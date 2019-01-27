var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// var dbConnection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

// dbConnection.connect(function(err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log('connected');
//   }
// });
// // exports.dbConnection = dbConnection
// module.exports = dbConnection;

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = db.define('User', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true} ,
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true} ,
  user: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

// Message.belongsTo(User);
// User.hasMany(Message);

// User.sync();
// Message.sync();

exports.db = db;
exports.User = User;
exports.Message = Message;