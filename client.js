const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  })

  conn.setEncoding("utf8");
  //conn.write("Move: up");

  conn.on("data", (data) => {
  console.log(data)
  });

  conn.on("connect", (data) => {
    console.log("Connection has been successfully established.");
  })

  setTimeout(() => {
    conn.write("Name: CS"), 3000
  })
  
  // setTimeout( () => {
  //   conn.write("Move: up");
  // }, 6000);

  // setTimeout( () => {
  //   conn.write("Move: left");
  // }, 9000);



  return conn;
}

module.exports = {
  connect
}


console.log("Connecting ...");
connect();
