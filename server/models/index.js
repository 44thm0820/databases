var db = require('../db');


//GET AND POST PARAMETERS: PATH (probably database path or html path...) 2. CALLBACK 
// some relationship with accessing data from chatterbox 
module.exports = {
  messages: {
    get: function (callback) {
      var statement = 'SELECT * FROM messages';
      db.query(statement, function (err, res) {
        if (err){
          throw err; 
        } else {
          callback(null, res); 
        }
      })

    }, 
    // a function which produces all the messages
    //https://expressjs.com/en/guide/database-integration.html#mysql (express MYSQL syntax)
    // add error function 

    post: function (message, callback) {
      var statement = 
      'INSERT INTO messages (id, message_text, user, userID, room, room_id) VALUES (?, ?, ?, ?, ?, ?)'
      db.query(statement, [req.body.id, req.body.message_text, req.body.user, req.body.userID, req.body.room, req.body.room_id], (err, res) => {
        if (err) {
          throw err; 
        } else {
          callback(null, res)
        }
    });
  } 
    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var statement = 'SELECT * FROM user'; 
      db.query(statement, function(err, res) {
        if (err) {
          throw err; 
        } else {
          callback(null, res); 
        }
      });
    },
    //a function which produces all users 
    post: function (user) {
      var statement = 'INSERT INTO user (id, userName) VALUES (?, ?)'
      db.query(statement, [] )
    }
    //a function with can be used to insert ONE user into the database 
  }
};

//   //Eventually create the rooms table and appropriate functions to get all rooms and insert one room 

  
/*
server/models/index.js defines the messages and users models that your application will use. Skeletons of the models have already been created but you'll have to write out the details for their methods
*/