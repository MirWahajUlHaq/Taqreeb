var express = require('express');
var router = express.Router();
const Middleware = require('../../Middleware');

//const roomController=require('../../Controller/App/rooms')

const paymentController=require('../../Utilities/payment/payment')


router.post('/create-payment-intent',paymentController.createPaymentIntent);
// router.post('/get',Middleware.checkToken,itemController.getItem);
// router.post('/update',Middleware.checkToken,itemController.updateItem);


// Common Routes
router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });
module.exports = router;