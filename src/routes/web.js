const express = require('express');
const { getHomepage, getABC, getTest, postCreateUser, getCreatePage, getEditPage, postUpdateUser } = require('../controllers/homeController')
const router = express.Router();


router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/test', getTest)

router.get('/create', getCreatePage)

router.get('/edit/:id', getEditPage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)


module.exports = router;