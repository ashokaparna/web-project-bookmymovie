'use strict';
//import user service.
const showtimeService = require('../services/showtimeServices');
let mongoose = require('mongoose');
/**
 * Returns a list of contacts in JSON
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
let ShowTime = mongoose.model('ShowTime');
exports.list = function (request, response) {
   
    const resolve = (showtime) => {
        response.status(200);
        response.json(showtime);
    };
    showtimeService.list({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};
exports.list_by_movie = function (request, response) {
   
    const resolve = (showtime) => {
        response.status(200);
        console.log(showtime);
        response.json(showtime);
    };
    showtimeService.list_by_movieName(request.params.movieName)
        .then(resolve)
       
        .catch(renderErrorResponse(response));
};

exports.list_all_showtime = function (request, response) {
   
    const resolve = (showtime) => {
        console.log("hii" + showtime);
        response.status(200);
        response.json(showtime);
    };
    showtimeService.showtimeList({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//code for post method
exports.create_showtime = function(req, res) {  
    const newshowtime = Object.assign({}, req.body);
    console.log(req.body);  
    const resolve = (show) => {   
        
        res.status(200);
        res.json(show);
    };
    showtimeService.save(newshowtime)
        .then(resolve).then(console.log("resolved"))
        .catch(renderErrorResponse(res));
  };
  // error function
  let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};
exports.lists = function (request, response) {
    response.header('Access-Control-Allow-Origin' , '*' );
    const resolve = (contacts) => {
        response.status(200);
        response.json(contacts);
    };
    showtimeService.userList({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};
