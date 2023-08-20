//For edugaon sites
const express = require("express");
const conn = require("./db");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get("/login", (req, res) => {
   // const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';

const sql =  "INSERT INTO `login`(`username`, `password`) VALUES ('[Rk@gmail.com]','[rk@123]')";

  //const sql = "SELECT * FROM login WHERE username = ? And password = ?";
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  console.log(password);
  conn.query(sql, [email, password], (err, data) => {
    if (err) return res.json("Error");
    if (data.lenght > 0) {
      return res.json("Login Successfully");
    } else {
      return res.json("No Record");
    }
  });
});

app.listen(3000, "localhost", console.log("server is runing on post 3000"));

