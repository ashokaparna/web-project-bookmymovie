
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

var fpMailOptions = {
  from: 'bookmymovie13@gmail.com',
  to: 'deeptinigamadmit@gmail.com',
  subject: 'Reset password',
  text: 'Congratulation on your order booking'
};


exports.email = function (newOrder) {
  console.log(newOrder);
  mailOptions.text = 'Theater Name: ' + newOrder.theatername + 
  " Movie Name: " + newOrder.movieName + " Show Time: " 
  + newOrder.showtime + " Total Seats: " + newOrder.seatdetails + 
 " Total Amount: " + newOrder.totalamount + " Booking Time: " +
 newOrder.creationtime;
  console.log('Inside email-' + newOrder.email);
  mailOptions.to = newOrder.email;
  //mailOptions.to =  "deepibm2012@gmail.com";
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

exports.forgotPasswordEmail = function (email, link) {
  console.log(link);
  console.log(email);
  fpMailOptions.text = 'We are here to help. \n Please click on the link below to reset your password \n' + link;
  fpMailOptions.to = email;
  transporter.sendMail(fpMailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};







