
'use strict';
var nodemailer = require('nodemailer');


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deepti.spring.admit@gmail.com',
    pass: 'FestingRoad2019@'
  }
});

var mailOptions = {
  from: 'deepti.spring.admit@gmail.com',
  to: 'deeptinigamadmit@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

function sendmail()
{
  console.log("email function");
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}



exports.transporter.sendMail = function(mailOptions, function(error, info)
{
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      };

    