const createConnection = require("./manage-net");
const createTerminalListener = require("./manage-input");

const client = createConnection();
createTerminalListener(client);

// Filesystem package | Readline
