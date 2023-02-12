const mysql = require('mysql');

// require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'businessdb',
  port: 3306
});

connection.connect(function(err) {
    if (err) 
    {
      console.log("Error", err);
      throw err;  
    } 
  
    console.log("Connected!")
});

module.exports = connection