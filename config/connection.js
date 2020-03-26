// Set up MySQL connection.
var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "b5p9r77o20xt9ox3",
  password: "aqt1e9tvtsj1nkbj",
  database: "x5g1oel7ch1xypf5"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export connection for our ORM to use.
module.exports = connection;
