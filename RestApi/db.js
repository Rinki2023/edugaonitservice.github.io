const mysql= require('mysql');
const conn = mysql.createConnection(
    {
        host:'localhost',
        user:'',
        password:'',
        database:'edugaon'
    }
)
conn.connect((err)=>{
    console.log('database is connected');
})

module.exports = conn;