var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "social_awareness"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});