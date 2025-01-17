const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! test')
})

router.get('/abc', (req, res) => {
    res.send('Chaeck abc')
})

router.get('/test', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;