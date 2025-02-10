const net = require('net'); // Importing the 'net' module to create a TCP server
const Parser = require('redis-parser'); // Importing 'redis-parser' to handle Redis protocol

// In-memory key-value store
const store = {};

// Creating a TCP server
const server = net.createServer((connection) => {
  console.log('Client Connected...');

  // Creating a Redis protocol parser
  const parser = new Parser({
    returnReply: (reply) => {
      const command = reply[0]; // Extract command (e.g., 'SET' or 'GET')

      switch (command) {
        case 'set': {
          const key = reply[1]; // Extract key from command
          const value = reply[2]; // Extract value from command
          store[key] = value; // Store the key-value pair in memory
          connection.write(`+OK\r\n`); // Send Redis-compliant success response
          break;
        }
        case 'get': {
          const key = reply[1]; // Extract key
          const value = store[key]; // Retrieve value from the store
          console.log({ key, value });

          if (!value) {
            connection.write(`$-1\r\n`); // Redis response for 'null' (key not found)
          } else {
            connection.write(`$${value.length}\r\n${value}\r\n`); // Send value with correct RESP format
          }
          break;
        }
        default:
          connection.write(`-ERR Unknown command\r\n`); // Handle unknown commands
      }
    },
    returnError: (err) => {
      console.error(err); // Log errors
    },
  });

  // Handling incoming data from the client
  connection.on('data', (data) => {
    parser.execute(data); // Parse and process the received data
  });
});

// Start the server and listen on port 8000
server.listen(8000, () => {
  console.log('Custom Redis Server is Running...');
});
