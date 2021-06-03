var express = require('express');
var router = express.Router();
const userController=require('../../Controller/User/user')
const Middleware = require('../../Middleware');



router.post('/getCategory',userController.getCategory);

router.post('/getCategory/farm',userController.getFarm);
router.post('/getCategory/photographer',userController.getPhotographer);
 router.post('/getCategory/eventdecorator',userController.getEventdecorator);
 router.post('/getCategory/beachhut',userController.getBeachhut);
 router.post('/getCategory/transport',userController.getTransport);
 router.post('/getCategory/lawn',userController.getLawn);
 router.post('/getCategory/hotel',userController.getHotel);
 router.post('/getCategory/caterer',userController.getCaterer);

 router.post('/singleProduct',userController.singleProduct);


 router.post('/orderProduct',Middleware.checkUserToken,userController.orderProduct);


 router.post('/searchProducts',userController.searchProducts);

 router.post('/testMail',userController.testMail);
 router.post('/filterProducts',userController.filterProducts);

 router.post('/getCategoryProducts',userController.getCategoryProducts);

// Common Routes
router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });
module.exports = router;