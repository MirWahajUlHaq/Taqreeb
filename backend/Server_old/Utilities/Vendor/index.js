require("../../Db_Functions/index");
let User = require("../../Models/User/user");
let Product = require("../../Models/Product/product");
var Messages = require("../Messages/admin");
let helpers = require("../../Services/Helper/index");
let moment = require("moment");
let md5 = require("md5");
let jwt = require("jsonwebtoken");
let ObjectId = require("mongodb").ObjectID;
const { sendEmail } = require("../../Services/nodemailer");
const Booking = require("../../Models/Booking/booking");


addProduct = async (data,vendorId) => {
  let { productImage, productName ,description,categoryId,productPrice} = data;
  let newObj = {
    productName: productName,
    productImage: productImage,
    description:description,
    categoryId: ObjectId(categoryId),
    productPrice:productPrice,
    vendorId: ObjectId(vendorId),
      created_on: moment().unix()
  };
  
  console.log(newObj);
  let saveData = new Product(newObj)
  


  result = await postData(saveData);
console.log(result);
  if (result.status) {
      return helpers.showResponse(true, "Product Added", result.data._id, null, 200);
  }
  return helpers.showResponse(false, Messages.SERVER_ERROR, null, null, 200);
}

getProduct = async (vendorId) => {

  let result = await getDataArray(Product, {vendorId: vendorId ,status: { $ne: 2 }}, '',null, null,"categoryId vendorId","categoryName email");
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);
};



deleteProduct = async (productId, vendorId) => {
  
  let response = await Product.update(
    { _id: productId, vendorId: vendorId },
    { $set: { status: 2 } }
  );
  if (response) {
    return helpers.showResponse(true, "Product Deleted", [], null, 200);
  }
  return helpers.showResponse(
    false,
    "Failed While Deleting Addon",
    null,
    null,
    304
  );
};


getOrders = async (vendorId) => {

  let result = await getDataArray(Booking, {vendorId: vendorId ,status: { $ne: 2 }}, '',null, null,"vendorId userId productId","");
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);
};

orderApprove = async (orderId) => {

let response = await Booking.update(
  { _id: orderId},
  { $set: { status: 1 } }
);
if (response) {

  console.log(response)
  return helpers.showResponse(true, "Order Status Changed", [], null, 200);
}
return helpers.showResponse(
  false,
  "Failed While Deleting Addon",
  null,
  null,
  304
);
}

module.exports = {
  addProduct,
  getProduct,
  deleteProduct,
  getOrders,
  orderApprove
};
