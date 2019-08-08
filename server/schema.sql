DROP DATABASE if EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  message_text varchar(100),
  user varchar(100),
  userID varchar(100) REFERENCES user (id),
  room varchar(100),
  room_id INT REFERENCES room (id),
  PRIMARY KEY (id)
);

CREATE TABLE room (
  id INT NOT NULL AUTO_INCREMENT,
  room_name varchar(100),
  message_text varchar(100),
  users_in_room int,
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  userName varchar(100),
  PRIMARY KEY (id)
)

/* Mapping the Primary Key and Foreign Key within respective tables

/* Create other tables and define schemas for them here! */






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* Remember to DROP all new tables before running SQL code again
