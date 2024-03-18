const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("How do you know that a mathematician planted a tree?", (answer) => {
//   if (answer === "It has square roots") {
//     console.log("Good job!");
//   } else {
//     console.log("Close! It has square roots");
//   }
// });

const client = net.createConnection({ host: "165.227.47.243", port: 50541 });
// const client = net.createConnection({ host: "127.0.0.1", port: 9001 });
client.setEncoding("utf-8");

client.on("connect", () => {
  console.log("Succesfully connected to the server");

  // setInterval(() => {
  //   client.write("🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔");
  // }, 500);
});

client.on("data", (data) => {
  console.log("Server said:", data);
});

rl.on("line", (line) => {
  client.write(line);
});

// Filesystem package | Readline
