'use strict';
//import Theatre service.
const theatreService = require('../services/theatreServices');

//code for post method
exports.create_theatre = function(req, res) {  
    const newtheatre = Object.assign({}, req.body);
    console.log(req.body);  
    const resolve = (theatre) => {   
        
        res.status(200);
        res.json(theatre);
    };
    theatreService.save(newtheatre)
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