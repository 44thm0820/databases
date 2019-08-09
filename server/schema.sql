DROP DATABASE chat;
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

/* 
schema.sql is a skeleton schema file intended to create and use a database, and create new tables within it. Aside from writing SQL at the command line, you can also write it in a file  and load it into a running MySQL server. Follow the link and read enough to learn how. In the schema.sql file you will be writing one or more CREATE TABLE statements that will define the structure of your database tables and loading them into your running MySQL server

NOTE: if when running your SQL code from this file, and you find a bug in the schema or how it was generated, you'll want to "drop" all the new tables before running it again. 

This will reset your database by throwing away all data and schema information, to give you a blank slate before re-running your improved version of the SQL code. Look up how to do this if and when the need arises

*/