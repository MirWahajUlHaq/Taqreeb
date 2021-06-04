const API_SECRET_USER = process.env.API_SECRET_USER;
const API_SECRET_VENDOR = process.env.API_SECRET_VENDOR;
const API_SECRET_ADMIN = process.env.API_SECRET_ADMIN;

let jwt = require('jsonwebtoken');
var helpers = require('../Services/Helper/index');
const User = require('../Models/User/user');



checkVendorToken = async (req, res, next) => {
  let token = req.headers['access_token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (!token) {
    return res.status(401).json({ status: false, message: "Something went wrong with token" });
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, API_SECRET_VENDOR, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Something went wrong with token" });
      }
      let user_id = decoded.user_id;
      let response={status:null,data:{status:null}}
      // if(decoded.type==0){
      //    response = await Admin.getUserDetail(user_id);
      // }
      // if (!response.status) {
      //   return res.status(451).json({ status: false, message: "Invalid Token" });
      // }
      // if (!response.data.status) {
      //   return res.status(423).json({ status: false, message: "Invalid User" });
      // }
      req.decoded = decoded;
      req.token = token
      next();
    });
  } else {
    return res.status(401).json({ status: false, message: "Something went wrong with token" });
  }
};

checkAdminToken = async (req, res, next) => {
  let token = req.headers['access_token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (!token) {
    return res.status(401).json({ status: false, message: "Something went wrong with token" });
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, API_SECRET_ADMIN, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Something went wrong with token" });
      }
      let user_id = decoded.user_id;
      console.log(user_id)
      let response={status:null,data:{status:null}}
      // if(decoded.type==0){
      //    response = await Admin.getUserDetail(user_id);
      // }
      // if (!response.status) {
      //   return res.status(451).json({ status: false, message: "Invalid Token" });
      // }
      // if (!response.data.status) {
      //   return res.status(423).json({ status: false, message: "Invalid User" });
      // }
      req.decoded = decoded;
      req.token = token
      next();
    });
  } else {
    return res.status(401).json({ status: false, message: "Something went wrong with token" });
  }
};

checkUserToken = async (req, res, next) => {
  let token = req.headers['access_token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (!token) {
    return res.status(401).json({ status: false, message: "Something went wrong with token" });
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, API_SECRET_USER, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Something went wrong with token" });
      }
      let user_id = decoded.user_id;
      console.log(user_id)
      let response={status:null,data:{status:null}}
      // if(decoded.type==0){
      //    response = await Admin.getUserDetail(user_id);
      // }
      // if (!response.status) {
      //   return res.status(451).json({ status: false, message: "Invalid Token" });
      // }
      // if (!response.data.status) {
      //   return res.status(423).json({ status: false, message: "Invalid User" });
      // }
      req.decoded = decoded;
      req.token = token
      next();
    });
  } else {
    return res.status(401).json({ status: false, message: "Something went wrong with token" });
  }
};



module.exports = {
  checkVendorToken,
  checkUserToken,
  checkAdminToken:checkAdminToken,

}