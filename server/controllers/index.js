var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get ((err, data) => {
        if (err){
          throw err; 
        } else {
          res.send(data); 
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = req.body;
      models.messages,post(data); //req.body 
      res.end(); 
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get ((err, data) => {
        if (err){
          throw err; 
        } else { 
          res.send(data); 
        }
      })
    },
    post: function (req, res) {
      models.post(req.body); //req.body 
      res.end(); 
    }
  }

  //rooms also needs to be inserted
};

/* 
server/controllers/index.js defines the messages and users controllers that your application will use. Skeletons of the controllers have already been created but you'll have to write out the details for their methods
*/