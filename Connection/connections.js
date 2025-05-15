const mysql = require ("mysql");
const connect = mysql.createConnection({
    host :"LocalHost",
    port :3306 ,
    password :"ifto#25" ,
    user: "root",
    database : "CRUD"
})

module.exports = connect;