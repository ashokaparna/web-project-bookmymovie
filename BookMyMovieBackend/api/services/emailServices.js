
'use strict';
var nodemailer = require('nodemailer');


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bookmymovie13@gmail.com',
    pass: 'ijklmn786@'
  }
});

var mailOptions = {
  from: 'bookmymovie13@gmail.com',
  to: 'deeptinigamadmit@gmail.com',
  subject: 'Order Successful',
  text: 'Congratulation on your order booking'
};

exports.email = function (newOrder) {
  console.log('Inside email-' + newOrder.OrderId);
  mailOptions.text = 'OrderId: ' + newOrder.OrderId;
  console.log('Inside email-' + newOrder.Email);
  mailOptions.to = newOrder.Email;
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};








    