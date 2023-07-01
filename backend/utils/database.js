const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: '3306',
  database: "web3_app",
  password: "password"
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log(err);
    console.log("Connection Failed");
  }
});

module.exports = mysqlConnection;
