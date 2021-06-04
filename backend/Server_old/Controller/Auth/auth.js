const User = require("../../Utilities/User/index");
var helpers = require("../../Services/Helper/index");
const UserModel = require("../../Models/User/user");
const jwt = require("jsonwebtoken");
const { IdentityStore } = require("aws-sdk");


adminSignin = async (req, res) => {
  let requiredFields = ["email", "password"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }

  let result = await User.adminSignin(req.body);
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

userSignup = async (req, res) => {
  let requiredFields = ["firstName", "lastName", "email", "password","phone"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }
  let result = await User.userSignup(req.body);
  if (result.status) {
    return res.status(200).send({
      status: true,
      message: "Registration success",
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


userSignin = async (req, res) => {
  let requiredFields = ["email", "password"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }

  let result = await User.userSignin(req.body);
  if (result.status) {
    let obj = {
      token: result.data.token,
      user : {
        email: result.data.email,
        name: result.data.name,
      }
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


vendorSignup = async (req, res) => {
  let requiredFields = ["firstName", "lastName", "email", "password","phone"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }
  let result = await User.vendorSignup(req.body);
  if (result.status) {
    return res.status(200).send({
      status: true,
      message: "Registration success",
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


vendorSignin = async (req, res) => {
  let requiredFields = ["email", "password"];
  let validator = helpers.validateParams(req, requiredFields);
  if (!validator.status) {
    return res.status(203).send({
      status: false,
      message: "Please Fill Required Fields",
      data: [],
    });
  }

  let result = await User.vendorSignin(req.body);
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








uploadImage = async (req, res) => {
  if (!req.files) {
    return res.status(200).send({
      status: false,
      message: "Image Required",
      data: [],
    });
  } else {
    try {
      var data = req.files;
      var images = [];
      var i;
      for (i = 0; i < data.length; i++) {
        await images.push(data[i].filename);
      }

      return res.status(200).send({
        status: true,
        message: "Image uploaded",
        data: {
          images: images,
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

module.exports = {
  userSignin,
  userSignup,
  adminSignin,
  vendorSignup,
  vendorSignin,
  uploadImage,
};
