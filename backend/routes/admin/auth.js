const express = require('express');
const { signup, signin, signout,getUsers, userCreate } = require('../../controllers/admin/auth');
// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
// const { requireSignin } = require('../../common-middleware');
const router = express.Router();


router.post('/admin/signup', signup);
router.post('/admin/signin', signin);
router.post('/admin/signout', signout)
router.post('/admin/getUsers', getUsers)
router.post('/admin/userCreate', userCreate)


module.exports = router;