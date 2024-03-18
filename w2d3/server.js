// Chat Server

// Higher Order Function => It's a function that can take in a function as a parameter
const fancyDoSomething = (action) => {
  console.log("🔥🔥🔥🥔🥔🥔🥔🥔🔥🔥🔥🔥🔥");
  action();
  console.log("🔥🔥🔥🥔🥔🥔🥔🥔🔥🔥🔥🔥🔥");
};

// Callback is a relationship status between a function and a higher order function
const sayHello = () => console.log("Hello there.");

// fancyDoSomething(sayHello);

// Server => Will provide information when triggered by an event
// Client => Will receive information when it triggers an event

const net = require("net");

// waiter = server

const listOfClients = [];

const waiterInstructionManual = (client) => {
  // Possible actions

  const logToConsole = (data) => console.log("Client said: ", data);
  const parrotBack = (data) => {
    console.log("Client said: ", data);
    client.write(`🦜: ${data}`);
  };
  const broadcast = (data) => {
    console.log("Client said: ", data);
    for (const storedClient of listOfClients) {
      if (client !== storedClient) {
        storedClient.write(`📣: ${data}`);
      } else {
        client.write("You broadcasted the message \n");
      }
    }
  };

  client.setEncoding("utf-8");
  listOfClients.push(client);

  console.log("A new client came in");
  console.log(listOfClients.length);
  client.write("Welcome to the restaurant 'Servertown' \n");

  // Event triggers
  client.on("data", broadcast);
};

const waiter = net.createServer(waiterInstructionManual);

// Port, where you want to listen (zone in a restaurant, appt number in an address)

// 127.0.0.1 | localhost

waiter.listen(9001);
