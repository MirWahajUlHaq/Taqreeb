
require("dotenv").config();

const API_SECRET = process.env.JWT_SECRET;

let jwt = require('jsonwebtoken');

checkToken = async (req, res, next) => {
  let token = req.headers['access_token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

  if (!token) {
    return res.status(401).json({ status: false, message: "Something went wrong with token" });
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, API_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Something went wrong with token" });
      }
      
      req.decoded = decoded;
      req.token = token
      next();
    });
  } else {
    return res.status(401).json({ status: false, message: "Something went wrong with token" });
  }
  
};

module.exports = {
  checkToken: checkToken,
  // checkTokenRestaurant:checkTokenRestaurant,
  // checkAdminToken:checkAdminToken,
  // reauthAdminToken:reauthAdminToken

}