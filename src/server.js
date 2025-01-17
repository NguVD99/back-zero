require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');


// console.log(">>> check env:", process.env);
const app = express(); // App expree
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// Khai bao route
app.use('/', webRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})