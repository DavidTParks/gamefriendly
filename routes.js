"use strict";

var express = require("express");
var passport = require('passport');
var router = express.Router();
var Post = require("./models").Post;
var User = require("./models").User;
var GameSession = require("./models").GameSession;

router.param("uID", function(req, res, next, id) {
    User.findById(id, function(err, doc) {
        if(err) return next(err);
        if(!doc) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        req.user = doc;
        return next();
    });
});

router.param("pID", function(req, res, next, id) {
    Post.findById(id, function(err, doc) {
        if(err) return next(err);
        if(!doc) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        req.post = doc;
        return next();
    });
});

router.param("cID", function(req, res, next, id) {
    req.comment = req.post.comments.id(id);
    if(!req.comment) {
        err = new Error("Not Found");
        err.status = 404;
        return next(err);
    }
    next();
});

router.post("/signup", function(req, res, next) {
    if(req.body.email &&
       req.body.name &&
       req.body.password &&
       req.body.confirmPassword) {
        if(req.body.password !== req.body.confirmPassword) {
            var err = new Error("Passwords do not match");
            err.status = 400;
            return next(err);
        }
        var user = new User(req.body);
        user.save(function(err, user) {
            if(err) return next(err);
            req.session.userId = user._id;
            res.status(201);
            res.json(user);
        });
    } else {
        var err = new Error("All fields required.");
        err.status = 400;
        return next(err);
    }
});

//POST login
router.post("/login", function(req, res, next) {
    if(req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, function(error, user) {
            if(error || !user) {
                var err = new Error("Wrong email or password.");
                err.status = 401;
                return next(err);
            } else {
                res.status(201);
                //res.json(user);
                req.session.userId = user._id;
            }
        });
    } else {
        var err = new Error("Email and password are required.");
        err.status = 401;
        return next(err);
    }
});

//GET /logout
router.get("/logout", function(req, res, next) {
    if(req.session) {
        req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                res.status(201);
                //return res.redirect("/");
            }
        });
    }
});

//GET /users
//Route to get all users
router.get("/users", function(req, res, next) {
    User.find({})
                .exec(function(err, users) {
                    if(err) return next(err);
                    res.json(users);
                });
});

//GET /users/:uID
//Route to get specific user
router.get("/users/:uID", function(req, res, next) {
    res.json(req.user)
});

//GET /posts
//Route to get all posts
router.get("/posts", function(req, res, next) {
    Post.find({})
                .sort({createdAt: -1}) 
                .exec(function(err, posts) {
                    if(err) return next(err);
                    res.json(posts);
                });
});

//POST /posts
// Route for creating posts for specific user
router.post("/posts/:uID/", function(req, res, next) {
    var post = new Post(req.body);
    req.user.posts.push(post);
    req.user.save(function(err, user) {
        if(err) return next(err);
        post.save(function(err, post){
            if(err) return next(err);
        });
        res.status(201);
        res.json(user);
    });
});

//POST /posts
// Route for creating posts for specific user
router.get("/gamesessions", function(req, res, next) {
    GameSession.find({})
                .sort({createdAt: -1}) 
                .exec(function(err, users) {
                    if(err) return next(err);
                    res.json(users);
                });
});


//POST /posts
// Route for creating posts for specific user
router.post("/gamesessions/:uID/", function(req, res, next) {
    var gamesession = new GameSession(req.body);
    req.user.sessions.push(gamesession);
    req.user.save(function(err, user) {
        if(err) return next(err);
        gamesession.save(function(err, gamesession){
            if(err) return next(err);
            res.json(gamesession);
        });
        res.status(201);
    });
});

//GET specific post
router.get("/posts/:pID", function(req, res, next) {
    res.json(req.post);
});

//POST /posts/:id/comments
// Route for creating comments
router.post("/posts/:pID/comments", function(req, res, next) {
    req.post.comments.push(req.body);
    req.post.save(function(err, post) {
        if(err) return next(err);
        res.status(201);
        res.json(post);
    });
});

//PUT /posts/:id/comments/:id
//Edit a specific comment
router.put("/posts/:pID/comments/:cID", function(req, res) {
    req.comment.update(req.body, function(err, result) {
        if(err) return next(err);
        res.json(result);
    });
});

//DELETE /posts/:id/comments/:id
//Delete a specific comment
router.delete("/posts/:pID/comments/:cID", function(req, res) {
    req.comment.remove(function(err) {
        req.post.save(function(err, post) {
            if(err) return next(err);
            res.json(post);
        });
    });
});

//POST /posts/:pID/comments/:cID/vote-up
//POST /posts/:pID/comments/:cID/vote-down
//Vote on an comment
router.post("/posts/:pID/comments/:cID/vote-:dir", 
    function(req, res, next) {
        if(req.params.dir.search(/^(up|down)$/) == -1) {
            var err = new Error("Not Found");
            err.status = 404;
            next(err);
        } else {
            req.vote = req.params.dir;
            next();
        }
    }, 
    function(req, res, next) {
        req.comment.vote(req.vote, function(err, post) {
            if(err) return next(err);
            res.json(post);
    });
});

module.exports = router;
