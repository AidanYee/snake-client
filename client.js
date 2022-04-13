const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

    // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", (connect) => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write('Name: YEE');
  })

  conn.on("data", (data) => {
    // code that does something when data is received from the server
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect }