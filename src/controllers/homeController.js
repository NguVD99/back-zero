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

const postCreateUser = async (req, res) => {
    // console.log('>>>> req.body ', req.body)

    let name = req.body.myname
    let email = req.body.email
    let address = req.body.address
    let city = req.body.city

    // let { name, email, address, city } = req.body;

    console.log("Name = ", name, "Email= ", email, "Address= ", address, "City= ", city)
    // Cach 1
    // connection.query(
    //     `INSERT INTO Users (Name, Email, Address, City)
    //     VALUES (?, ?, ?, ?);
    //     `,
    //     [name, email, address, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Create User')
    //     }
    // );


    // cach 2
    let [results, fields] = await connection.query(
        `INSERT INTO Users (Name, Email, Address, City) VALUES (?, ?, ?, ?)`, [name, email, address, city]
    );
    res.send('Create User');

}


const getCreatePage = (req, res) => {
    res.render('create.ejs')
}


module.exports = {
    getHomepage,
    getABC,
    getTest,
    postCreateUser,
    getCreatePage
}