const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    },

    contact:{
        type: String,
        require: true
    },

    location:{
        type: String,
        require: true
    },

    pincode:{
        type: String,
        require: true
    },

    userType:{
        type: String,
        require: true
    }
});

const UserModel = mongoose.model("userData", UserSchema);
module.exports = UserModel;