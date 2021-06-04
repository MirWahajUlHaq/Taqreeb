require("../../Db_Functions/index");
let User = require("../../Models/User/user");
let Category = require("../../Models/Category/category");
let Product = require("../../Models/Product/product");
let Booking = require("../../Models/Booking/booking");
var Messages = require("../Messages/admin");
let helpers = require("../../Services/Helper/index");
let moment = require("moment");
let md5 = require("md5");
let jwt = require("jsonwebtoken");
let ObjectId = require("mongodb").ObjectID;
const { sendEmail,sendEmailTest } = require("../../Services/nodemailer");
const Review = require("../../Models/Reviews/review");


adminSignin = async (data) => {
  let { email, password } = data;
  let where = {
    email: email,
    password: md5(password),
    status: { $eq: 1 },
    role: { $eq: 2 },
  };
  let result = await getSingleData(User, where, "-password");


    if (result.status) {
      console.log(result)
      let token = jwt.sign(
        { user_id: result.data._id },
        process.env.API_SECRET_ADMIN,
        {
          expiresIn: process.env.JWT_EXPIRY
        }
      );
      let data = {
        token: token,
        time: process.env.JWT_EXPIRY,
        email: result.data.email,
      };
      return helpers.showResponse(true, "Login Success", data, null, 200);
    }
  
  return helpers.showResponse(false, "Invalid Credential", null, null, 200);
};

userSignup = async (data) => {
  let { firstName, lastName, email, password,phone } = data;
  let newObj = {
    firstName: firstName.toLowerCase(),
    lastName: lastName.toLowerCase(),
    email: email.toLowerCase(),
    password: md5(password),
    phone: phone,
    role: 0
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


userSignin = async (data) => {
  let { email, password } = data;
  let where = {
    email: email,
    password: md5(password),
    status: { $eq: 1 },
    role: { $eq: 0 },
  };
  let result = await getSingleData(User, where, "-password");


    if (result.status) {
      console.log(result)
      let token = jwt.sign(
        { user_id: result.data._id },
        process.env.API_SECRET_USER,
        {
          expiresIn: process.env.JWT_EXPIRY
        }
      );
      let data = {
        token: token,
        time: process.env.JWT_EXPIRY,
        email: result.data.email,
        name: result.data.firstName,
      };
      return helpers.showResponse(true, "Login Success", data, null, 200);
    }
  
  return helpers.showResponse(false, "Invalid Credential", null, null, 200);
};


vendorSignup = async (data) => {
  let { firstName, lastName, email, password,phone } = data;
  let newObj = {
    firstName: firstName.toLowerCase(),
    lastName: lastName.toLowerCase(),
    email: email.toLowerCase(),
    password: md5(password),
    phone: phone,
    role: 1
  };
  let user = new User(newObj);
  let Count = await getUser(User, {
    email: email,
  });

  if (Count) {
    return helpers.showResponse(false, "Already Exist", null, null, 200);
  } else {
    let result = await postData(user);

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


vendorSignin = async (data) => {
  let { email, password } = data;
  let where = {
    email: email,
    password: md5(password),
    status: { $eq: 1 },
  };
  let result = await getSingleData(User, where, "-password");


    if (result.status) {
      console.log(result)
      let token = jwt.sign(
        { user_id: result.data._id },
        process.env.API_SECRET_VENDOR,
        {
          expiresIn: process.env.JWT_EXPIRY
        }
      );
      let data = {
        token: token,
        time: process.env.JWT_EXPIRY,
        email: result.data.email,
      };
      return helpers.showResponse(true, "Login Success", data, null, 200);
    }
  
  return helpers.showResponse(false, "Invalid Credential", null, null, 200);
};


getCategory = async (data) => {

  let result = await getDataArray(Category, {}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "Invalid Credential", null, null, 200);

};


forgotPasswordMail = async (data) => {
  let { email } = data;
  let otp = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  let UserData = {
    otp: otp.toString(),
  };

  let Count = await getUser(User, {
    email: email,
  });

  if (!Count) {
    return helpers.showResponse(
      false,
      "Email not registered with us",
      null,
      null,
      203
    );
  }

  let result = await updateByQuery(User, UserData, {
    email: email,
    status: { $ne: 2 },
  });
  if (result.status) {
    // email sent code here
    sendEmail(
      email,
      "IMVP OTP===>",
      JSON.stringify(otp),
      (from = "noreply@IMVP.com"),
      () => {
        return helpers.showResponse(
          true,
          "OTP has been sent to your Mail",
          null,
          null,
          200
        );
      }
    );
    return helpers.showResponse(
      true,
      "OTP has been sent to Mail",
      null,
      null,
      200
    );
  }
  return helpers.showResponse(
    false,
    Messages.FORGOT_EMAIL_ERROR,
    null,
    null,
    204
  );
};

forgotChangePassword = async (data) => {
  let { otp, email, password } = data;
  let UserData = {
    otp: "",
    password: md5(password),
  };
  let Count = await getUser(User, {
    email: email,
    otp,
  });
  if (!Count) {
    return helpers.showResponse(false, "Invalid Otp", null, null, 203);
  }
  let result = await updateByQuery(User, UserData, {
    email: email,
    otp: otp,
    status: { $ne: 2 },
  });
  if (result.status) {
    return helpers.showResponse(true, "Password Changed", null, null, 200);
  }
  return helpers.showResponse(false, "Invalid Otp", null, null, 203);
};

changePassword = async (req) => {
  let { oldPassword, newpassword } = req.body;
  let where = {
    _id: ObjectId(req.decoded.user_id),
    password: md5(oldPassword),
  };
  let result = await getSingleData(User, where, "-password");

  if (result.status) {
    let obj = {
      password: md5(newpassword),
    };
    let res1 = await updateData(User, obj, req.decoded.user_id);
    console.log(res1);

    return helpers.showResponse(
      true,
      "Passowrd change Successfully",
      [],
      null,
      200
    );
  } else {
    return helpers.showResponse(
      false,
      "Old Password Not machted",
      null,
      null,
      200
    );
  }
  return helpers.showResponse(false, "Invalid Credential", null, null, 200);
};


getFarm  = async (req) => {

  let result = await getDataArray(Product, {categoryId: ObjectId('60b720e5b2024c2a20e93a5e'),status: { $eq: 1 }}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);


}

getPhotographer  = async (req) => {

  let result = await getDataArray(Product, {categoryId: ObjectId('60b72111b2024c2a20e93a5f'),status: { $eq: 1 }}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);


}
getEventdecorator  = async (req) => {

  let result = await getDataArray(Product, {categoryId: ObjectId('60b72123b2024c2a20e93a60'),status: { $eq: 1 }}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);


}
getBeachhut  = async (req) => {

  let result = await getDataArray(Product, {categoryId: ObjectId('60b72133b2024c2a20e93a62'),status: { $eq: 1 }}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);


}
getTransport  = async (req) => {

  let result = await getDataArray(Product, {categoryId: ObjectId('60b72172b2024c2a20e93a65'),status: { $eq: 1 }}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);


}
getLawn  = async (req) => {

  let result = await getDataArray(Product, {categoryId: ObjectId('60b72243b2024c2a20e93a67'),status: { $eq: 1 }}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);


}
getHotel  = async (req) => {

  let result = await getDataArray(Product, {categoryId: ObjectId('60b7212cb2024c2a20e93a61'),status: { $eq: 1 }}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);


}


getCaterer  = async (req) => {

  let result = await getDataArray(Product, {categoryId: ObjectId('60b72139b2024c2a20e93a63'),status: { $eq: 1 }}, '',null, null);
  if (result.status) {
    return helpers.showResponse(true, "Success", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", null, null, 200);


}


singleProduct = async (productId) => {


  let result = await getSingleData(Product, { _id: ObjectId(productId),
  });

  let resultReviews = await getDataArray(Review, {productId: ObjectId(productId),status: { $eq: 1 }}, '',null, null);

console.log('result',result)
console.log('resultReviews',resultReviews)

let newObj = {
  productDetails: result.data
}

if(resultReviews.status){

  newObj.reviews= resultReviews.data
}else{
  newObj.reviews= []

}
  
  if (result.status) {
    return helpers.showResponse(true, "Success", newObj, null, 200);
  }

  
  return helpers.showResponse(
    false,
    "Failed",
    null,
    null,
    200
  );
};


orderProduct = async (body,user_id) => {


  let result = await getSingleData(Product, { _id: ObjectId(body.productId),});

  userResult = await getSingleData(User, { _id: ObjectId(user_id),});

  const vendorId = result.data.vendorId;
  const email = userResult.data.email;


  let newObj = {
    vendorId: ObjectId(vendorId),
    userId: ObjectId(user_id),
    startDate: body.startDate,
    endDate: body.endDate,
    transactionID: body.transactionID,
    productId: body.productId,
    streetAddress: body.streetAddress,
    city:body.city,
    state:body.state,
    zip: body.zip,
    country: body.country,
    price: body.price,
    created_on: moment().unix()
    
  }


  let saveData = new Booking(newObj)
  


  result = await postData(saveData);
  if (result.status) {


    try {
    sendEmailTest(email);
    } catch (error) {
    console.log(error)  
    }


      return helpers.showResponse(true, "Order Successfully", result.data._id, null, 200);
  }

  return helpers.showResponse(false, Messages.SERVER_ERROR, null, null, 200);
};


testMail  = async (body) => {

const email = 'testAdmin11185@yopmail.com';

const otp = 'sss';

sendEmailTest();

// sendEmail(
//   email,
//   "EMAIL===>",
//   JSON.stringify(otp),
//   (from = "noreply@email.com"),
//   () => {

//     return helpers.showResponse(
//       true,
//       "Order has been placed",
//       null,
//       null,
//       200
//     );
//   }
// );

}




searchProducts = async (data) => {
  
  let page = 1;
  let startIndex = 0;
  let queryObject = { status: { $eq: 1 } };
  let sort = null;

  const string = data.productName;

  if (string ) {
    console.log(string);
    queryObject = {
      $or: [
        { productName: { $regex: string, $options: "$i" } },
      ],
      status: { $eq: 1 },
    };
  }

 
  let result = await getDataArray(
    Product,
    queryObject,
    "",
    null,
    null
  );
  

  if (result.status) {
    return helpers.showResponse(true, "Sucess", result.data, null, 200);
  }
  return helpers.showResponse(false, "No Data Found", [], null, 200);
};


filterProducts = async (data) => {
  
  let queryObject = { status: { $eq: 1 }, categoryId :ObjectId(data.categoryId), productPrice : { $gt :  data.lowPrice, $lt : data.highPrice} };
  
   
    let result = await getDataArray(
      Product,
      queryObject,
      "",
      null,
      null
    );
    
  
    if (result.status) {
      return helpers.showResponse(true, "Sucess", result.data, null, 200);
    }
    return helpers.showResponse(false, "No Data Found", [], null, 200);
  };


  getCategoryProducts = async (data) => {
  
    let queryObject = { status: { $eq: 1 }, categoryId :ObjectId(data.categoryId) };
    
     
      let result = await getDataArray(
        Product,
        queryObject,
        "",
        null,
        null
      );
  
      let resultName = await getSingleData(Category, { _id: ObjectId(data.categoryId),
      });
      
      const newData = {
        data: result.data,
        categoryName: resultName.data.categoryName
      }
  
      
      if (result.status) {
        return helpers.showResponse(true, "Sucess", newData, null, 200);
      }
      return helpers.showResponse(false, "No Data Found", [], null, 200);
    };


module.exports = {
  adminSignin,
  userSignup,
  userSignin,
  vendorSignup,
  vendorSignin,
  getCategory,
  forgotPasswordMail,
  forgotChangePassword,
  changePassword,
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
