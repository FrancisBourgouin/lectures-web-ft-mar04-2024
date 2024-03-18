const net = require("net");

const createConnection = () => {
  const client = net.createConnection({ host: "127.0.0.1", port: 9001 });
  client.setEncoding("utf-8");

  client.on("connect", () => {
    console.log("Succesfully connected to the server");
  });

  client.on("data", (data) => {
    console.log("Server said:", data);
  });

  return client;
};

module.exports = createConnection;
