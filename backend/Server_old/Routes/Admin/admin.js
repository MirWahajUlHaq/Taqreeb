var express = require('express');
var router = express.Router();
const adminController=require('../../Controller/Admin/admin')
const Middleware = require('../../Middleware');



router.post('/addCategory',Middleware.checkAdminToken,adminController.addCategory);

router.post('/allProducts',Middleware.checkAdminToken,adminController.allProducts);

router.post('/productApprove',Middleware.checkAdminToken,adminController.productApprove);

router.post('/allOrders',Middleware.checkAdminToken,adminController.allOrders);

router.post('/addUsers',Middleware.checkAdminToken,adminController.addUsers);

router.post('/allUsers',Middleware.checkAdminToken,adminController.allUsers);




// Common Routes
router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });
module.exports = router;