require('dotenv').config();
const path = require('path'); //commonjs
const express = require('express'); //commonjs

const configViewEngine = require('./config/viewEngine')

// console.log(">>> check env:", process.env);
const app = express(); // App expree
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// Khai bao route
app.get('/', (req, res) => {
    res.send('Hello World! test')
})

app.get('/abc', (req, res) => {
    res.send('Chaeck abc')
})

app.get('/test', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})