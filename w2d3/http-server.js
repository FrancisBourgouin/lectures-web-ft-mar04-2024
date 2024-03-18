const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Received a request for the path:", request.url);

  response.end(`Hello!, you requested the path ${request.url}`);
});

server.listen(9001);
