const { response } = require('express');
const express = require('express')
const router = express.Router()
const {signup, signin, signout} = require('../../controllers/vendor/auth')
// const {userSignupValidator} = require('../validators/index')

router.post('/vendor/signup', signup);
router.post('/vendor/signin', signin);
router.get('/signout', signout);


module.exports = router;