DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,

  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(255) NOT NULL,
  username VARCHAR(40) NOT NULL,
  roomname VARCHAR(20) NOT NULL,

  PRIMARY KEY (ID)
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

