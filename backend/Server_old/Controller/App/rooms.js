
const Item = require('../../Utilities/Restaurant/item');
const House = require('../../Utilities/App/house');

const Room = require('../../Utilities/App/room');


var helpers = require('../../Services/Helper/index')

addRoom = async (req, res) => {

    let requiredFields = ['roomName','images', 'houseId'];
    let validator = helpers.validateParams(req, requiredFields);
    if (!validator.status) {
        return helpers.showOutput(res, helpers.showResponse(false,validator.message), 203);
    }
    let user_id = req.decoded.user_id;
    if(!user_id){
        return helpers.showOutput(res, helpers.showResponse(false,"Invalid User"), 403);
    }
    req.body.userId=req.decoded.user_id;
    let result = await Room.addRoom(req.body);

    return helpers.showOutput(res, result, result.code);
}

getRoom = async (req, res) => {
    let requiredFields = [ 'houseId'];
    let validator = helpers.validateParams(req, requiredFields);
    if (!validator.status) {
        return helpers.showOutput(res, helpers.showResponse(false,validator.message), 203);
    }
    let user_id = req.decoded.user_id;
    if(!user_id){
        return helpers.showOutput(res, helpers.showResponse(false,"Invalid User"), 403);
    }
    req.body.userId=req.decoded.user_id;

    let result = await Room.getRoom(req.body);
    return helpers.showOutput(res, result, result.code);
}

getCategoryEditId = async (req, res) => {
    // let requiredFields = ["category_id"];
    // let validator = helpers.validateParams(req, requiredFields);
    // if (!validator.status) {
    //     return helpers.showOutput(res, helpers.showResponse(false, "User Added"), 203);
    // }


    //req.body.restaurant_id=req.decoded.user_id;
    let result = await Item.getCategoryEditId(req.body);
    return helpers.showOutput(res, result, result.code);
}


toggleItemStatus = async (req, res) => {

    let requiredFields = ['item_id'];

    let validator = helpers.validateParams(req, requiredFields);
    if (!validator.status) {
        return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
    }
    let user_id = req.decoded.user_id;
    if (!user_id) {
        return helpers.showOutput(res, helpers.showResponse(false, "Invalid User"), 403);
    }
   
    let result = await Item.toggleItemStatus(req.body, user_id);
    return helpers.showOutput(res, result, result.code);
}



updateRoom = async (req, res) => {

    let requiredFields = ['_id'];

    let validator = helpers.validateParams(req, requiredFields);
    if (!validator.status) {
        return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
    }
    let user_id = req.decoded.user_id;
    if (!user_id) {
        return helpers.showOutput(res, helpers.showResponse(false, "Invalid User"), 403);
    }
    let result = await Room.updateRoom(req.body, user_id);
    return helpers.showOutput(res, result, result.code);
}




module.exports = {
    addRoom,
    getRoom,
    getCategoryEditId,
    toggleItemStatus,
    updateRoom
}