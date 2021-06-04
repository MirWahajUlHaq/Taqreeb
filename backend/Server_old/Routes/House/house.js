var express = require('express');
var router = express.Router();
const houseController=require('../../Controller/App/houses')
const Middleware = require('../../Middleware');



router.post('/add',Middleware.checkToken,houseController.addHouse);
router.post('/get',Middleware.checkToken,houseController.getHouse);
router.post('/update',Middleware.checkToken,houseController.updateHouse);


// Common Routes
router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });
module.exports = router;