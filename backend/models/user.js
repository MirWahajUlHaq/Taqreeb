const mongoose = require('mongoose')
const crypto = require('crypto')
const uuid = require('uuid').v1

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        // required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true

    },
    phone: {
        type: String,
        required: true,
        maxlength: 11

    },
    profilePicture: {
        type: String
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
    salt: String,
    role: {
        type: Number
    },
    history: {
        type: Array,
        default: []
    }
}, { timeStamps: true })

// virtual field
//uuidv1 hashes the password
userSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = uuid()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function () {
        return this._password
    })

    userSchema.virtual("fullName").get(function () {
        return `${this.firstName}${this.lastName}`;
      });

//we can create schema methods. encryptPassword is in of itself a method
//sha1 is a method of encrypting the password
userSchema.methods = {

    authenticate: function (password) {
        return this.encryptPassword(password) === this.hashed_password;
    },

    encryptPassword: function (password) {
        if (!password) {
            return '';
        }
        try {
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
        } catch (err) {
            return "";
        }
    }
}

module.exports = mongoose.model("User", userSchema)