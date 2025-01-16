const path = require('path'); //commonjs
const express = require('express'); //commonjs


const app = express(); // App expree
const port = 8080; // port

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Chaeck abc')
})

app.get('/test', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})