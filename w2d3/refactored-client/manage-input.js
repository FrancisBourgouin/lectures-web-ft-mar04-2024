const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createTerminalListener = (client) => {
  rl.on("line", (line) => {
    client.write(line);
  });

  return rl;
};

module.exports = createTerminalListener;
