'use strict';
module.exports = function (app) {
    let user = require('../controllers/UserController');
    let login = require('../controllers/loginController');
    let orderlist = require('../controllers/OrderController');
    let theatrelist = require('../controllers/TheatreController');
    let showtimelist = require('../controllers/ShowTimeController');
    let reviewlist = require('../controllers/ReviewController');
    let signUp = require('../controllers/SignUpController');
    var movieList = require('../controllers/MovieController');

    app.route('/users/:_id')
        .get(user.getProfile);
    app.route('/user')
        .post(user.profile);
    app.route('/signUp')
        .post(signUp.signUp);
    app.route('/login')
        .post(login.login);
    app.route('/orders')
        .get(orderlist.list_all_orders)
        .post(orderlist.create_order);
    app.route('/orders/:userId')
        .get(orderlist.user_orders)
     app.route('/theatre')        
        .post(theatrelist.create_theatre);
    app.route('/showtime')       
        .get(showtimelist.list_all_showtime)
        .post(showtimelist.create_showtime);
    app.route('/showtime/:movieId')       
        .get(showtimelist.list_by_movie)
     app.route('/reviews')     
        .get(reviewlist.list_all_reviews)   
        .post(reviewlist.create_review);
    app.route('/reviews/:userId')
        .get(reviewlist.user_reviews) 
     app.route('/reviews/:reviewId')
         .delete(reviewlist.delete) 
    app.route('/movies')
        .get(movieList.listMovies)
        .post(movieList.createMovies);
    app.route('/movies/:movieId')
        .get(movieList.readMovie)
        .put(movieList.updateMovie)
};

