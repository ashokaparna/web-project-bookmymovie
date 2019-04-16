
const express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');

class HandlerGenerator {
    login (req, res) {
        let username = req.body.username;
        let password = req.body.password;
        // For the given username fetch user from DB
        let mockedUsername = 'admin';
        let mockedPassword = 'password';

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                let token = jwt.sign({username: username},
                    config.secret,
                    { expiresIn: '24h' // expires in 24 hours
                    }
                );
                // return the JWT token for the future API calls
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    token: token
                });
            } else {
                res.send(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.send(400).json({
                success: false,
                message: 'Authentication failed! Please check the request'
            });
        }
    }
    index (req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }
}

//require express framework
function main () {
    var express = require('express'),
        app = express(),
        //to execute on port 3000
        port = process.env.PORT || 3000,
        mongoose = require('mongoose'),
        bodyParser = require('body-parser');

// mongoose instance connection url connection
    mongoose.Promise = global.Promise;
//connecting to DB using mongoose
//Database with name kaminiDatabase will create automatically
    mongoose.connect('mongodb+srv://thesparklers:The_Sparklers@1@bookmymoviecluster-9bnce.mongodb.net/bookmymovie-db?retryWrites=true',{
        useMongoClient: true, useNewUrlParser: true
    });
//mongoose.connect('mongodb://localhost/contacts_db');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

//importing contact routes
    var routes = require('./api/routes/loginRoutes');
    routes(app); //register the route

    app.listen(port);
    console.log('API server started on: ' + port);
}

main();
