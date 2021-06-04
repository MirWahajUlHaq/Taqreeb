
const Item = require('../../Utilities/Restaurant/item');
const House = require('../../Utilities/App/house');

var helpers = require('../../Services/Helper/index')

addHouse = async (req, res) => {

   
    let requiredFields = ['houseName','images'];
    let validator = helpers.validateParams(req, requiredFields);
    if (!validator.status) {
        return helpers.showOutput(res, helpers.showResponse(false,validator.message), 203);
    }
    let user_id = req.decoded.user_id;
    if(!user_id){
        return helpers.showOutput(res, helpers.showResponse(false,"Invalid User"), 403);
    }
    req.body.userId=req.decoded.user_id;
    let result = await House.addHouse(req.body);

    return helpers.showOutput(res, result, result.code);
}

getHouse = async (req, res) => {
    
    req.body.userId=req.decoded.user_id;
    let result = await House.getHouse(req.body);
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



updateHouse = async (req, res) => {

    let requiredFields = ['_id'];

    let validator = helpers.validateParams(req, requiredFields);
    if (!validator.status) {
        return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
    }
    let user_id = req.decoded.user_id;
    if (!user_id) {
        return helpers.showOutput(res, helpers.showResponse(false, "Invalid User"), 403);
    }
    let result = await House.updateHouse(req.body, user_id);
    return helpers.showOutput(res, result, result.code);
}




module.exports = {
    addHouse,
    getHouse,
    getCategoryEditId,
    toggleItemStatus,
    updateHouse
}