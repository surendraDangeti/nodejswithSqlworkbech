const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'edureka',
    multipleStatements: true,
})
mysqlConnection.connect((err)=>{
    if(err) {
        console.log('not connected')
        throw err
    }
    else {
        console.log('connected')
    }
})


module.exports = mysqlConnection;