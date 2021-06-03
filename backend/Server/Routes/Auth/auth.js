var express = require('express');
var router = express.Router();

const AuthController = require('../../Controller/Auth/auth')
const Middleware = require('../../Middleware');


var path = require("path");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Server/Images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
var uploadCover = multer({
  storage,
});

// Admin Routes
//router.post('/add', AdminController.addAdmin);

router.post('/userSignup', AuthController.userSignup);
router.post('/userSignin', AuthController.userSignin);

router.post('/vendorSignup', AuthController.vendorSignup);
router.post('/vendorSignin', AuthController.vendorSignin);

router.post('/adminSignin', AuthController.adminSignin);




// Common Routes
router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });

module.exports = router;