'use strict';
//import user service.
const userService = require('../services/userServices');

//code for post method
exports.create_user = function(req, res) {  
    const newuser = Object.assign({}, req.body);
    console.log(newuser);
    const resolve = (user) => {
        
        res.status(200);
        res.json(user);
    };
    userService.save(newuser)
        .then(resolve)
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