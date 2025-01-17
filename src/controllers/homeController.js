
const getHomepage = (req, res) => {
    res.send('Hello World! test')
}

const getABC = (req, res) => {
    res.send('Check abc')
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomepage,
    getABC,
    getTest
}