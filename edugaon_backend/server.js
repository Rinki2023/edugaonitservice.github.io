const express = require('express');
const conn = require('./db');
//const cors= require('cors');
 const app = express();

// app.use(cors());

app.post("/login", (req, res) => {
     const sql = "SELECT * FROM login WHERE username = ? , password = ?, google_sign = ? And facebook_sign = ? ";
     const values = [
      req.body.email,
      req.body.password,
      req.body.google_sign,
      req.body.facebook_sign
     ]
     db.query(sql,[values], (err, data) =>{
      if(err) return res.json("Login Faild");
      return res.json(data);
     })
} )


  app.listen(3000, () => {
    console.log("This is my code which is running on the 3000 localhost");
  });