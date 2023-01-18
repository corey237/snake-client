const net = require("net");
const { connect } = require("./client.js");
const { setupInput } = require("./client.js");

console.log("Connecting...");
connect();
setupInput();


 

