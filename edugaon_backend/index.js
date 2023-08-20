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
  

//upload page

// const express = require("express");
// const path = require('path');
// const multer = require('multer');
// const bodyParser = require('body-parser');

// const diskStorage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null,"./uploads" );
//     },
//     filename: function(req, file, cb){
//         const filename = Date.now() + file.originalname;
//         cb(null, filename)
//     }
// })

// const upload = multer({storage: diskStorage});

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", path.resolve("./views"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/home', (req, res)=>{
//     return res.render("homepage.ejs")
// })
// app.post('/upload',upload.single("profilePic"), (req, res)=>{
//     console.log(req.body);
//     console.log(req.file);

//     return res.redirect("/home");
// });

// app.listen(3000,"localhost" , console.log("server is runing on post 3000"));











// const express = require("express");
// const conn = require("./config");
// const bodyParser = require('body-parser')
// const app = express();
// app.use(bodyParser.json());
// app.get("/", (req, response) => {
//   conn.query("select * from student", (err, result) => {
//     if (err) {
//       response.send("error");
//     } else {
//       response.send(result);
//     }
//   });
// });

// app.post("/postuser", (req, response) => {
//   const body = req.body;
//   const data = {
//     id: body["userid"],
//     Name: body["username"],
//     Class: body["class"],
//     RollNo: body["rollno"],
//   };
//   conn.query("INSERT INTO student SET ?", data, (err, result, feild) => {
//     if (err) {
//       response.send("error");
//     } else {
//       response.send(result);
//     }
//   });
// });

// app.put("/updateuser", (req, response) => {
//   const body = req.body;
//   const data = ["Rinki","5th",12,1]
//   conn.query(
//     "UPDATE student SET Name = ?, Class = ?, RollNo = ? WHERE id = ?",
//     data,
//     (err, result, feild) => {
//       if (err) {
//         response.send("Error");
//       } else {
//         response.send(result);
//       }
//     }
//   );
// });

// app.delete("/:id", (req, res) => {
//     const id = req.body.id;
//     console.log(id);
//     conn.query(`DELETE FROM student WHERE id = ${id}`, (err, rows) => {
//       if (err) {
//         res.send("Error deleting data");
//       } else {
//         res.send("Data deleted successfully");
//       }
//     });
//   });

// app.listen(3000, () => {
//   console.log("This is my code which is running on the 3000 localhost");
// });

