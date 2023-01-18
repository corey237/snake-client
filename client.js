const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  })

  conn.write("Name: CS");
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
  console.log(data)
  });

  conn.on("connect", (data) => {
    console.log("Connection has been successfully established.");
  })



  return conn;
}

module.exports = {
  connect
}


console.log("Connecting ...");
connect();