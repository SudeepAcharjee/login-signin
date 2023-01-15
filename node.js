const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

const app = express();

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

// Hash the password with bcrypt
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    // Insert the new user into the users table
    connection.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword],
      (error, results) => {
        if (error) {
          return res.status(500).json({ error: "Internal server error" });
        }
        return res.json({ message: "Registration successful" });
      }
    );
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
