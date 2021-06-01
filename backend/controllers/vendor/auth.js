const User = require('../../models/user')
const { errorHandler } = require('../../helpers/dbErrorHandler')
const jwt = require('jsonwebtoken'); //to generate signed token
const expressJwt = require('express-jwt'); //for authorization check

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "Vendor already registered",
      });
      let role = 2;
      console.log("req.body", req.body, req.body.email, role);
      const _user = new User(req.body);
      _user.role = role;
      
      _user.save((err, user) => {
        if (err) {

          console.log(err);

            // return res.status(400).json({
            //     err: errorHandler(err)
            // })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        })
    })
  });
};

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        const isPassword = await user.authenticate(req.body.password);
        if (
          isPassword &&
          (user.role === 2   || user.role === "super-admin")
        ) {
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          const { _id, firstName, lastName, email, role, fullName } = user;
          res.cookie("token", token, { expiresIn: "1d" });
          res.status(200).json({
            token,
            user: { _id, firstName, lastName, email, role, fullName },
          });
        } else {
          return res.status(400).json({
            message: "Invalid Password",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
  };
  

exports.signout = (req, res) => {
    res.clearCookie('t')
    res.json({
        message: "Logged Out!"
    })
}

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
    if (req.profile.role === 0) {
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

