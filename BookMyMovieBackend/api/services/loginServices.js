'use strict';

let mongoose = require('mongoose');
require('../models/UserModel');

let User = mongoose.model('User');
// save method
exports.login = function (user) {
    const promise = user.findOne({UserName: user.body.UserName, Password: user.body.Password});
    console.log(promise);
    return promise;
};
