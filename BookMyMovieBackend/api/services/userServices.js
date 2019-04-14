
'use strict';

let mongoose = require('mongoose');
require('../models/UserModel');

let User = mongoose.model('User');
// save method
exports.save = function (user) {
    console.log("inside");
    const newuser = new User(user);
    console.log("before save");
    const promise = newuser.save();
    console.log(promise);
    return promise;
};

/**
 * Returns an all users.
 *
 */
exports.userList = function() {
    const promise = User.find().exec();
    return promise;
}

