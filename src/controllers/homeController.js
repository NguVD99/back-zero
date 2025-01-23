const connection = require('../config/database');



const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    //Process data
    //call model
    let users = [];

    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log('>>>Results', results); // results contains rows returned by server
            console.log('>>>Fields', fields); // fields contains extra meta data about results, if available

            console.log(">> check users: ", users)
            res.send(JSON.stringify(users))
        }
    );
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomepage,
    getABC,
    getTest
}