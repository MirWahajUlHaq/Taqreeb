const { response } = require('express');
const express = require('express')
const router = express.Router()

const {signup, signin, signout, requireSignin} = require('../controllers/auth')
// const {userSignupValidator} = require('../validators/index')

router.post('/signup',  signup);
router.post('/signin', signin);
router.get('/signout', signout);

// router.post('/vendorprofile',(req,res) =>{
//     res.status(200).json({ user:'profile'})
// });

module.exports = router;