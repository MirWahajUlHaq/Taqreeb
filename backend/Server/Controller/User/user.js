const User = require("../../Utilities/User/index");
var helpers = require("../../Services/Helper/index");
const UserModel = require("../../Models/User/user");
const jwt = require("jsonwebtoken");
const { IdentityStore } = require("aws-sdk");


getCategory = async (req, res) => {


  let result = await User.getCategory(req.body);
    return helpers.showOutput(res, result, result.code);
  

};

getFarm = async (req, res) => {

  let result = await User.getFarm(req.body);
  return helpers.showOutput(res, result, result.code);

};

getPhotographer= async (req, res) => {

  let result = await User.getPhotographer(req.body);
  return helpers.showOutput(res, result, result.code);

};
getEventdecorator= async (req, res) => {

  let result = await User.getEventdecorator(req.body);
  return helpers.showOutput(res, result, result.code);

};
getBeachhut= async (req, res) => {

  let result = await User.getBeachhut(req.body);
  return helpers.showOutput(res, result, result.code);

};
getTransport= async (req, res) => {

  let result = await User.getTransport(req.body);
  return helpers.showOutput(res, result, result.code);

};
getLawn= async (req, res) => {

  let result = await User.getLawn(req.body);
  return helpers.showOutput(res, result, result.code);

};
getHotel= async (req, res) => {

  let result = await User.getHotel(req.body);
  return helpers.showOutput(res, result, result.code);

};

getCaterer= async (req, res) => {

  let result = await User.getCaterer(req.body);
  return helpers.showOutput(res, result, result.code);

};


singleProduct= async (req, res) => {

  let requiredFields = ['productId'];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
      return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
  }

  let result = await User.singleProduct(req.body.productId);
  return helpers.showOutput(res, result, result.code);

};


orderProduct= async (req, res) => {

 
let requiredFields = ["startDate", "endDate", "productId", "transactionID","streetAddress","city","state","zip","country","price"];
let validator = helpers.validateParams(req, requiredFields);
if (!validator.status) {
  return res.status(203).send({
    status: false,
    message: "Please Fill Required Fields",
    data: [],
  });
}

let result = await User.orderProduct(req.body,req.decoded.user_id);
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

}


testMail= async (req, res) => {


  let result = await User.testMail(req.body);
  return helpers.showOutput(res, result, result.code);

};

searchProducts= async (req, res) => {

  let requiredFields = ["productName"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }

  let result = await User.searchProducts(req.body);
  return helpers.showOutput(res, result, result.code);

};


filterProducts= async (req, res) => {

  let requiredFields = ["lowPrice","highPrice","categoryId"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }

  let result = await User.filterProducts(req.body);
  return helpers.showOutput(res, result, result.code);

};
getCategoryProducts= async (req, res) => {

  let requiredFields = ["categoryId"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }


  let result = await User.getCategoryProducts(req.body);
  return helpers.showOutput(res, result, result.code);

};

module.exports = {
  getCategory,
  getFarm,
  getPhotographer,
  getEventdecorator,
  getBeachhut,
  getTransport,
  getLawn,
  getHotel,
  getCaterer,
  singleProduct,
  orderProduct,
  testMail,
  searchProducts,
  filterProducts,
  getCategoryProducts

};
