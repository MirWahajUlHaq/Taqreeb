const Admin = require("../../Utilities/Admin/index");
var helpers = require("../../Services/Helper/index");
const UserModel = require("../../Models/User/user");
const jwt = require("jsonwebtoken");
const { IdentityStore } = require("aws-sdk");


addCategory = async (req, res) => {
  let requiredFields = ["categoryName"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }

  let result = await Admin.addCategory(req.body);
  if (result.status) {
    let obj = {
      token: result.data.token,
      email: result.data.email,
    };
    return res.status(200).send({
      status: true,
      message: result.message,
      data: obj,
    });
  } else {
    return res.status(203).send({
      status: false,
      message: result.message,
      data: [],
    });
  }
};


allProducts = async (req, res) => {

  let result = await Admin.allProducts(req.body);
  return helpers.showOutput(res, result, result.code);

}

productApprove = async (req, res) => {
  let requiredFields = ['productId'];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
      return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
  }
  
  let result = await Admin.productApprove(req.body.productId);
  return helpers.showOutput(res, result, result.code);
}


allOrders = async (req, res) => {

  let result = await Admin.allOrders(req.body);
  return helpers.showOutput(res, result, result.code);

}

addUsers = async (req, res) => {

  let requiredFields = ['firstName','lastName','email','role','password'];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
      return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
  }

  let result = await Admin.addUsers(req.body);
  return helpers.showOutput(res, result, result.code);

}

allUsers = async (req, res) => {
  let result = await Admin.allUsers(req.body);
  return helpers.showOutput(res, result, result.code);

}

module.exports = {
  addCategory,
  allProducts,
  productApprove,
  allOrders,
  addUsers,
  allUsers

};
