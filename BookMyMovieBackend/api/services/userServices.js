
'use strict';
require('../models/UserModel');
const mongoose = require('mongoose'),
    tblUser = mongoose.model('User');

// save method
exports.save = function (user) {
    tblUser = mongoose.model('tblUser');
    const newuser = new tblUser(user);
    const promise = newuser.save();
    return promise;
};

