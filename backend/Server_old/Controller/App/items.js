
const House = require('../../Utilities/App/house');

const Room = require('../../Utilities/App/room');

const Item = require('../../Utilities/App/item');



var helpers = require('../../Services/Helper/index')

addItem = async (req, res) => {

    let requiredFields = ['itemName','images', 'description', 'roomId','houseId'];
    let validator = helpers.validateParams(req, requiredFields);
    if (!validator.status) {
        return helpers.showOutput(res, helpers.showResponse(false,validator.message), 203);
    }
    let user_id = req.decoded.user_id;
    if(!user_id){
        return helpers.showOutput(res, helpers.showResponse(false,"Invalid User"), 403);
    }
    req.body.userId=req.decoded.user_id;
    let result = await Item.addItem(req.body);

    return helpers.showOutput(res, result, result.code);
}

getItem = async (req, res) => {
    let requiredFields = [ 'houseId','roomId'];
    let validator = helpers.validateParams(req, requiredFields);
    if (!validator.status) {
        return helpers.showOutput(res, helpers.showResponse(false,validator.message), 203);
    }
    let user_id = req.decoded.user_id;
    if(!user_id){
        return helpers.showOutput(res, helpers.showResponse(false,"Invalid User"), 403);
    }
    req.body.userId=req.decoded.user_id;

    let result = await Item.getItem(req.body);
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



updateItem = async (req, res) => {

    let requiredFields = ['_id'];

    let validator = helpers.validateParams(req, requiredFields);
    if (!validator.status) {
        return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
    }
    let user_id = req.decoded.user_id;
    if (!user_id) {
        return helpers.showOutput(res, helpers.showResponse(false, "Invalid User"), 403);
    }
    let result = await Item.updateItem(req.body, user_id);
    return helpers.showOutput(res, result, result.code);
}




module.exports = {
    addItem,
    getItem,
    getCategoryEditId,
    toggleItemStatus,
    updateItem
}