var db = require('../db');
var url = require('url');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('hello model');
      db.query("SELECT * FROM messages", function (err, result, fields) {
        if (err) throw err;
        console.log('model: ', JSON.stringify(result));
        callback(err, JSON.stringify(result));
      })
    }, // a function which produces all the messages

    post: function (data, callback) {
      db.query("INSERT INTO messages (text, roomname, username) VALUES (?, ?, ?)", data, function (err, result, fields) {

        if (err) throw err;
        callback(result)
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        callback(err, result)
      })
    }, // a function which produces all the messages

    post: function (data, callback) {
      db.query("INSERT INTO users (user_name) VALUES (?)", data, function (err, result, fields) {
        if (err) throw err;
        callback(result)
      })
    }
  }
};
