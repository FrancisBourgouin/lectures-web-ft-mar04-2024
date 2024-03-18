// Basic express server w/ EJS

const express = require("express");
// const bodyParser = require("body-parser");

const fs = require("fs");

const server = express();
server.set("view engine", "ejs");

const user1 = {
  id: 1,
  name: "Pequeno Pollo de la Pampa",
  email: "pock@pock.com",
  isAdmin: false,
};

const user2 = {
  id: 2,
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  isAdmin: true,
};

const users = {
  1: user1,
  2: user2,
};

// server.get("/", (req, res) => {
//   fs.readFile("./index.html", { encoding: "utf-8" }, (err, data) => {
//     console.log(data);
//     res.send(data);
//   });
// });
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
  res.render("index");
});

server.get("/users", (req, res) => {
  const userList = Object.values(users);
  const templateVars = { users: userList };
  return res.render("users", templateVars);
});

server.get("/users/new", (req, res) => {
  return res.render("new-user");
});

server.get("/users/:user_id", (req, res) => {
  const currentUser = users[req.params.user_id];
  const templateVars = { user: currentUser };

  // TEMPLATE + DATA === JOY!
  return res.render("user", templateVars);
});

server.post("/users", (req, res) => {
  const userId = Object.values(users).length + 1;

  const newUser = {
    id: userId,
    name: req.body.name,
    email: req.body.email,
    isAdmin: req.body.isAdmin === "on",
  };

  users[userId] = newUser;

  return res.redirect("/users");
});

server.listen(3000);
