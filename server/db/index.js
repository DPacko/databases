var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', '', {
  define: {
    timestamps: false
  }
});

var User = orm.define('User', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  text: Sequelize.STRING,
  username: Sequelize.STRING,
  roomname: Sequelize.STRING
});


User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;

var mysql = require('mysql');