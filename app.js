"use strict";

var express = require("express");
var routes = require("./routes");
var webpack = require('webpack');
var config = require('./webpack.config');
var jsonParser = require("body-parser").json;
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var path = require('path');

var app = express();

//Setup webpack to serve our files
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

app.use('/css', express.static(__dirname + '/src/css'));

app.use(logger("dev"));
app.use(jsonParser());
app.use(cookieParser());

//Mongoose Configuration
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/deletedbroute");

var db = mongoose.connection;

db.on("error", function(err){
    console.error("connection error:", err);
});

db.once("open", function(){
    console.log("db connection successful");
    // All database communication goes here
});

//Setting headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
        return res.status(200).json({})
    }
    next();
});

//Use sessions for tracking login
app.use(session({
    secret:"david is ur pal",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

//Send the users session data to app locals
app.use(function (req, res, next) {
    res.locals.currentUser = req.session.userId;
    next();
});


//Use our routes
app.use(routes);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

//Set the view enginge for ejs templates
//app.set("view engine", "ejs");

// catch 404 and forward to error handler
app.use(function(req, res, next){
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error Handler
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

//Running on localhost port 3000
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Express server listening on port:", port);
});
