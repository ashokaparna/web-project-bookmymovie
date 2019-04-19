'use strict';
let mongoose = require('mongoose');
require('../models/UserModel');

let User = mongoose.model('User');
// update method
exports.updateUser = function (user) {
    const promise = User.findOneAndUpdate({_id: user._id}, { $set: {phoneNo: user.phoneNo, email: user.email} }, {new: true}).exec();
    return promise;
};

exports.getUserDetails =function (_id) {
    console.log(_id);
    const promise = User.findOne({_id:_id}).exec();
    return promise
};
