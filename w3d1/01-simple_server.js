// Net package vs HTTP package

const http = require("http");

const user1 = {
  name: "Pequeno Pollo de la Pampa",
  email: "pock@pock.com",
  isAdmin: false,
};

const user2 = {
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  isAdmin: true,
};

const users = {
  "pock@pock.com": user1,
  "gentleman@cambrioleur.com": user2,
};

// GET => Get information from the server
// POST => Send information to the server
// PUT => Update information
// DELETE => Delete information

// GET /users
// POST /users

// Request: will contain what the client asking
// Response: will contain what we want to send back
const server = http.createServer((req, res) => {
  console.log("The request type is:", req.method);
  console.log("The path that they are for is:", req.url);
  console.log("The content is:", req.headers);
});

server.listen(3000);
