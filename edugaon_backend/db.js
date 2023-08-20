const mysql= require('mysql');
const conn = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'edugaon'
    }
)
conn.connect((err)=>{
    console.log('database is connected');
})

// application.listen(3000,()=>{
//     console.log('listing is port on 3000');
// })

module.exports = conn;