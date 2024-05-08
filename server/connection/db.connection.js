const mysql = require("mysql2")

const poot = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"dangnhap"
})

const db = poot.promise()
module.exports = db