var express = require('express');
var router = express.Router();
const vendorController=require('../../Controller/Vendor/vendor')

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




router.post('/addProduct',Middleware.checkVendorToken,vendorController.addProduct);
router.post('/getProduct',Middleware.checkVendorToken,vendorController.getProduct);
router.post('/deleteProduct',Middleware.checkVendorToken,vendorController.deleteProduct);

router.post('/uploadImage',[Middleware.checkVendorToken,uploadCover.single("image")], vendorController.uploadImage);

router.post('/getOrders',Middleware.checkVendorToken,vendorController.getOrders);

router.post('/orderApprove',Middleware.checkVendorToken,vendorController.orderApprove);



// Common Routes
router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });
module.exports = router;