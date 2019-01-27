var models = require('../models');

// var defaultCorsHeaders = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/JSON'
// };


// // No ORM
// module.exports = {
//   messages: {
//     get: function (req, res) {
//       console.log('hello controller')
//       models.messages.get(function(err, data) {
//         if(err) throw err;
//         res.writeHead(200, defaultCorsHeaders);
//         res.end(data);
//       });
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       var fields = [req.body.text, req.body.roomname, req.body.username];
//       console.log(fields);
//       models.messages.post(fields, function() {
//         res.writeHead(201, defaultCorsHeaders);
//         res.end();
//       });
//     } // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       models.users.get(function(data) {
//         res.writeHead(200, defaultCorsHeaders);
//         res.end(JSON.stringify(data));
//       });
//     },
//     post: function (req, res) {
//       var fields = [req.body.username];
//       models.users.post(fields, function() {
//         res.writeHead(201, defaultCorsHeaders);
//         res.end();
//       });
//     }
//   }
// };


var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({include: [db.User]})
        .then(function(messages) {
          res.json(messages);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        .spread(function(user, created) {
          db.Message.create({
            userid: user.get('id'),
            text: req.body.message,
            roomname: req.body.roomname
          }).then(function(message) {
            res.sendStatus(201);
          });
        });
    }
  },

  users: {
    get: function (req, res) {
      db.User.findAll()
        .then(function(users) {
          res.json(users);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });
    }
  }
};