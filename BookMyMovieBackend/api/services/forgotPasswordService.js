'use strict';

let mongoose = require('mongoose');
require('../models/UserModel');
let User = mongoose.model('User');
// save method
exports.forgotPassword = function (email) {
    const promise = User.findOne({email: email});
    return promise;
};

exports.updateRandomToken = function(user, token){
    const promise = User.findOneAndUpdate({_id: user._id}, { $set: {reset_password_token: token, reset_password_expires: Date.now() + 86400000} }, {new: true}).exec();
    return promise;
};
