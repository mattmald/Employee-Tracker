const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

db.connect(function (error) {
  if (error) 
  throw(error)
});

module.exports = db;