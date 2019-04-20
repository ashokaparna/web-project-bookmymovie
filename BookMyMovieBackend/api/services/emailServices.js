
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
  mailOptions.text = 'Theater Name: ' + newOrder.theatername + 
  " Movie Name: " + newOrder.moviename + " Show Time: " 
  + newOrder.showtime + " Total Seats: " + newOrder.noofseats + 
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








    