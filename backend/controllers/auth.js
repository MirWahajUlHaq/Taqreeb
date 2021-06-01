const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken"); //to generate signed token
const expressJwt = require("express-jwt"); //for authorization check

exports.signup = (req, res) => {
  const userData = new User(req.body);
  const { email } = req.body;
  //console.log('req.body', user)

  User.findOne({ email }, (err, user) => {
    if (err || user) {

    //   res.status(400).json({
    //     err: "Email address already exist. Please Signup!",
    //   });
    return res.send({
        message:
            "Email address already exist. Try again..!",
        status: 400,
    });
    }

    userData.save((err, user) => {
      if (err) {
        // return res.status(400).json({
        //     err: errorHandler(err)
        // })
        console.log(err);
      }
      user.salt = undefined;
      user.hashed_password = undefined;
      res.json({
        user,
      });
    });
  });
};

exports.signin = (req, res) => {
  //find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      // res.status(400).json({
      //   err: "User with that email address does not exist. Please Signup!",
      // });
      return res.send({
        message:
            "User with that email address does not exist. Please Signup",
        status: 400,
    });
    }
    //if user is found making sure he is sending the correct password
    //create authenticate method in user model
    if (!user.authenticate(password)) {
      return res.status(200).json({
        message: "The email id or password is not correct",
        status: 401,
      });
      
    }
    //generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    //persist the tokeen as 't' in cookie with expiry date
    res.cookie("token", token, { expire: new Date() + 9999 });
    //return response with user and token to frontend client
    const { _id, firstName, lastName, phone, email, role, username } = user;
    return res.json({
      token,
      user: { _id, firstName, lastName, phone, email, role, username },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({
    message: "Logged Out!",
  });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"], // added later
  userProperty: "auth",
});

//this checks if the user profile that is trying to access the secret route is the one that is already signed in

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id
    if (!user) {
        return res.status(403).json({
            error: "Access denied"
        });
    }
    next();
}

exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 1) {
        return res.status(403).json({
            error: 'Admin Resource! Access Denied!'
        })
    }
    next();
}

exports.isVendor = (req, res, next) => {
    if (req.profile.role === 2) {
        return res.status(403).json({
            error: 'Vendor Resource, Access Denied'
        })
    }
    next();
}

