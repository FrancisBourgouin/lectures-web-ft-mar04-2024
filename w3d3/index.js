const express = require("express");
const cookieParser = require("cookie-parser");

const thieves = require("./data/thiefData");
const {
  authenticateThief,
  fetchThiefByEmail,
  createThief,
} = require("./helpers/thiefHelpers");

const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.static("public")); // Everything in the folder "public" will be accessible without having to build a route
app.use(express.urlencoded({ extended: false })); // Take a form string and convert it to an object (req.body)
app.set("view engine", "ejs"); // Tells render to use EJS by default

/*
 *
 * GET SECTION PARTY!
 *
 */

app.get("/", (req, res) => {
  const { email } = req.cookies;

  const { user } = fetchThiefByEmail(thieves, email);

  const templateVars = { user };

  return res.render("index", templateVars);
});

app.get("/logout", (req, res) => {
  // res.cookie("email", "");
  res.clearCookie("email");
  return res.redirect("/");
});

app.get("/login", (req, res) => {
  return res.render("login");
});

app.get("/register", (req, res) => {
  // req.body => information from a form when it's a POST
  // req.params => /users/:user_id, information from the url parameters (req.params.user_id)
  // req.query => /register?error=no valid name, req.query.error

  const templateVars = { error: JSON.parse(req.query.error) };
  // const templateVars = { error: req.cookies.error && JSON.parse(req.cookies.error) };
  return res.render("register", templateVars);
});

/*
 *
 * POST SECTION PARTY!
 *
 */

app.post("/login", (req, res) => {
  const { error, user } = authenticateThief(thieves, req.body.email, req.body.password);

  if (error) {
    console.log(error);
    return res.redirect("/login");
  }

  res.cookie("email", user.email);
  return res.redirect("/");
});

app.post("/register", (req, res) => {
  const { error, user } = createThief(thieves, req.body);

  if (error) {
    console.log("Error(s) with the following fields", error);
    const parsedErrors = JSON.stringify(error);
    // res.cookie("error", parsedErrors);
    // return res.redirect(`/register`);
    return res.redirect(`/register?error=${parsedErrors}`);
  }

  res.cookie("email", user.email);
  res.clearCookie("error");

  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
