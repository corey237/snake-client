const net = require("net");
const { IP, PORT } = require("./constants.js");
const connect = function () {
  const conn = net.createConnection({
    ip: IP,
    port: PORT
  })

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
  console.log(data)
  });

  conn.on("connect", (data) => {
    console.log("Connection has been successfully established.");
  })

  setTimeout(() => {
    conn.write("Name: CS"), 3000
  })
  return conn;
}

module.exports = {
  connect
}
