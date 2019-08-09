var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
    user     : 'student',
    password: 'student',
    database: 'chat'
  });
  
  
  connection.connect(function(err) {
    if (err) {
        throw err; 
    }
  
    console.log('connected as id ' + connection.threadId);
  });


  module.exports = connection; 

  /*
server/db/index.js uses the mysql npm module to connect to the database server running on your computer
  */