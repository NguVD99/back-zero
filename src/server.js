require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const mysql = require('mysql2');


// console.log(">>> check env:", process.env);
const app = express(); // App expree
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// Khai bao route
app.use('/', webRouter);

// Test connection
// Create the connection to database
const connection = mysql.createConnection({
    host: '89.233.105.193',
    port: 3306,
    user: 'db_ngu_dev',
    password: '123123123Aa',
    database: 'db_ngu_dev',
});

// A simple SELECT query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log('>>>Results', results); // results contains rows returned by server
        console.log('>>>Fields', fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})