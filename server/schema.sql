DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE lobby (
  id_lobby INT NOT NULL AUTO_INCREMENT,
  lobby_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_lobby)
);

CREATE TABLE users (
  id_user INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_user)
);

CREATE TABLE messages (
  objectId INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(255) NOT NULL,
  roomname VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  created_At TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (objectId)
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

