const connection = require('../config/database');



const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    //Process data
    //call model
    // let users = [];

    // connection.query(
    //     'SELECT * FROM Users u',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log('>>>Results', results); // results contains rows returned by server
    //         console.log('>>>Fields', fields); // fields contains extra meta data about results, if available

    //         console.log(">> check users: ", users)
    //         res.send(JSON.stringify(users))
    //     }
    // );
    req.send('check abc')
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log('>>>> req.body ', req.body)

    let name = req.body.myname
    let email = req.body.email
    let address = req.body.address
    let city = req.body.city

    console.log(name, email, address, city)

    connection.query(
        `INSERT INTO Users (Name, Email, Address, City)
        VALUES (?, ?, ?, ?);
        `,
        [name, email, address, city],
        function (err, results) {
            console.log(results);
            res.send('Create User')
        }
    );


}


module.exports = {
    getHomepage,
    getABC,
    getTest,
    postCreateUser
}