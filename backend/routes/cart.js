const express = require('express')
const router = express.Router()

const {addItemToCart} = require('../controllers/cart')
const {requireSignin, isAuth} = require('../controllers/auth')
const {userById} = require('../controllers/user')

router.post('/user/cart/addtocart/:userId', requireSignin, isAuth, addItemToCart);
router.param('userId', userById);

module.exports = router;