var express = require('express');
var router = express.Router();
const houseController=require('../../Controller/App/houses')
const Middleware = require('../../Middleware');

const roomController=require('../../Controller/App/rooms')



router.post('/add',Middleware.checkToken,roomController.addRoom);
router.post('/get',Middleware.checkToken,roomController.getRoom);
router.post('/update',Middleware.checkToken,roomController.updateRoom);


// Common Routes
router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });
module.exports = router;