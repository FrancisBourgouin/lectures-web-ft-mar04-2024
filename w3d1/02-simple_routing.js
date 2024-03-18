// HTTP Server w/ Routing

const http = require("http");

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

const server = http.createServer((req, res) => {
  console.log("The path that they are for is:", req.url);

  const firstPart = req.url.split("/")[1];
  const secondPart = req.url.split("/")[2];

  switch (firstPart) {
    case "":
      return res.end("Hello!"); // Send a hello!

    case "users":
      if (secondPart) {
        const convertedUser = JSON.stringify(users[secondPart]);
        return res.end(convertedUser); // users[secondPart]
      }
      const convertedUsers = JSON.stringify(users);
      return res.end(convertedUsers); // users

    default:
      return res.end("Sorry no routes built for that yet.");
  }
});

server.listen(3000);
