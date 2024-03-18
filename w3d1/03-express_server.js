// Basic express server wo/ EJS

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

const express = require("express");

const server = express();

server.use((req, res, next) => {
  console.log("User asked for:", req.url);
  console.log("User with the method:", req.method);

  // Move along!
  return next();
});

server.get("/", (req, res) => {
  return res.send("Hello again!");
});

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/new", (req, res) => {
  return res.send("NEW USER PAGE");
});

server.get("/users/:user_id", (req, res) => {
  // :user_id => req.params.user_id
  const userId = req.params.user_id;
  const currentUser = users[userId];

  if (currentUser) {
    return res.json(currentUser);
  }

  return res.send("No user with that id");
});

server.post("/users", (req, res) => {
  console.log(req);

  res.send("OK.");
});

server.use((req, res, next) => {
  console.log("OH NO! THEY ARE ASKING FOR A ROUTE THAT WE DON'T HAVE...");

  return res.status(404).send("Sorry :(");
});

// 200 => 200 OK / 201 CREATED (GOOD JOB)
// 300 => 301 TEMPORARY REDIRECT / 302 PERMANENT REDIRECT (FINE, LET'S GO SOMEHWERE ELSE)
// 400 => 404 NOT FOUND / 403 FORBIDDEN / 418 I'M A TEAPOT (USER FUDGED UP)
// 500 => 500 INTERNAL SERVER ERROR (SERVER FUDGED UP)

// (req,res) => {
//   // ...
// }
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// Middlewares!
