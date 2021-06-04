const Admin = require("../../Utilities/Admin/index");
const Vendor = require("../../Utilities/Vendor/index");
var helpers = require("../../Services/Helper/index");
const UserModel = require("../../Models/User/user");
const jwt = require("jsonwebtoken");
const { IdentityStore } = require("aws-sdk");


addProduct = async (req, res) => {

  
  let requiredFields = ["productName", "productImage", "description", "categoryId","productPrice"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }




  let result = await Vendor.addProduct(req.body,req.decoded.user_id);
  if (result.status) {
  
    return res.status(200).send({
      status: true,
      message: result.message,
      data: [],
    });
  } else {
    return res.status(203).send({
      status: false,
      message: result.message,
      data: [],
    });
  }
};


getProduct = async (req, res) => {
  
  let result = await Vendor.getProduct(req.decoded.user_id);
    return helpers.showOutput(res, result, result.code);
  

};


uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(200).send({
      status: false,
      message: "Image Required",
      data: [],
    });
  } else {
    try {
      const filename = req.file.filename;

      return res.status(200).send({
        status: true,
        message: "Image uploaded",
        data: {
          filename: filename,
        },
      });
    } catch (error) {
      return res.status(200).send({
        status: false,
        message: "Failed",
        data: [],
      });
    }
  }
};


deleteProduct = async (req, res) => {
  let requiredFields = ['productId'];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
      return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
  }
  
  let result = await Vendor.deleteProduct(req.body.productId,req.decoded.user_id);
  return helpers.showOutput(res, result, result.code);
}


getOrders = async (req, res) => {
  
  let result = await Vendor.getOrders(req.decoded.user_id);
    return helpers.showOutput(res, result, result.code);
  

};


orderApprove = async (req, res) => {
  
  let requiredFields = ['orderId'];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
      return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
  }
  
  let result = await Vendor.orderApprove(req.body.orderId);
  return helpers.showOutput(res, result, result.code);

};


module.exports = {
  addProduct,
  uploadImage,
  getProduct,
  deleteProduct,
  getOrders,
  orderApprove
  
};
