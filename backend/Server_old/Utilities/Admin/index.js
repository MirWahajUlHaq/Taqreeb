require("../../Db_Functions/index");
let User = require("../../Models/User/user");
let Category = require("../../Models/Category/category");
let Product = require("../../Models/Product/product");


var Messages = require("../Messages/admin");
let helpers = require("../../Services/Helper/index");
let moment = require("moment");
let md5 = require("md5");
let jwt = require("jsonwebtoken");
let ObjectId = require("mongodb").ObjectID;
const { sendEmail } = require("../../Services/nodemailer");
const Booking = require("../../Models/Booking/booking");



addCategory = async (data) => {

  let { categoryName } = data;

  
  let newObj = {
    categoryName: categoryName.toLowerCase(),
};
  let dataPost = new Category(newObj)
  result = await postData(dataPost);
  return helpers.showResponse(true, "Category Added", [], null, 200);


};


allProducts = async (req) => {

let result = await getDataArray(Product, {status: { $ne: 2 }}, '',null, null,"categoryId vendorId","categoryName email");
if (result.status) {
  return helpers.showResponse(true, "Success", result.data, null, 200);
}
return helpers.showResponse(false, "No Data Found", null, null, 200);


}


allOrders = async (req) => {

  let result = await getDataArray(Booking, {status: { $ne: 2 }}, '',null, null,"userId productId vendorId","");
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);
  
  
  }
  



productApprove = async (productId) => {
  let response = await Product.update(
    { _id: productId},
    { $set: { status: 1 } }
  );
  if (response) {
    return helpers.showResponse(true, "Product Status Changed", [], null, 200);
  }
  return helpers.showResponse(
    false,
    "Failed While Deleting Addon",
    null,
    null,
    304
  );
};

addUsers = async (data) => {
  
  
  let { firstName, lastName, email, password,role } = data;
  let newObj = {
    firstName: firstName.toLowerCase(),
    lastName: lastName.toLowerCase(),
    email: email.toLowerCase(),
    password: md5(password),
    role: role
  };

  let user = new User(newObj);
  let Count = await getUser(User, {
    email: email,
  });

  if (Count) {
    return helpers.showResponse(false, "Already Exist", null, null, 200);
  } else {
    let result = await postData(user);
    console.log('result',result)

    if (result.status) {
      return helpers.showResponse(
        true,
        "User Added Successfully",
        result.data._id,
        null,
        200
      );
    } else {
      return helpers.showResponse(
        false,
        Messages.SERVER_ERROR,
        null,
        null,
        200
      );
    }
  }


};


allUsers = async (req) => {

  let result = await getDataArray(User, {status: { $ne: 2 }}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);
  
  
  }

module.exports = {
  addCategory,
  allProducts,
  productApprove,
  allOrders,
  addUsers,
  allUsers
};
