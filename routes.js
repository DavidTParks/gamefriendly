"use strict";

var express = require("express");
var passport = require('passport');
var router = express.Router();
var Post = require("./models").Post;
var User = require("./models").User;
var GameSession = require("./models").GameSession;
var mid = require ("./middleware/index");

//Gamesession parameter
router.param("gID", function(req, res, next, id) {
    GameSession.findById(id, function(err, doc) {
        if(err) return next(err);
        if(!doc) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        req.gamesession = doc;
        return next();
    });
});

//User parameter
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

//Post parameter
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

//Comment parameter
router.param("cID", function(req, res, next, id) {
    req.comment = req.post.comments.id(id);
    if(!req.comment) {
        err = new Error("Not Found");
        err.status = 404;
        return next(err);
    }
    next();
});

//POST
//Signs up user if all fields are correct
router.post("/signup", function(req, res, next) {
    if(req.body.email &&
       req.body.username &&
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
//Logs in user and sets the session id
router.post("/login", function(req, res, next) {
    if(req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, function(error, user) {
            if(error || !user) {
                var err = new Error("Wrong email or password.");
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                res.status(201);
                res.json(user);
            }
        });
    } else {
        var err = new Error("Email and password are required.");
        err.status = 401;
        return next(err);
    }
});

//GET /logout
//Logs user out and destroys session
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
                .lean()
                .select('-password')
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
                .lean()
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

//GET /gamesessions
// Route for returning all game sessions
router.get("/gamesessions", function(req, res, next) {
    GameSession.find({})
                .lean()
                .sort({createdAt: -1})
                .exec(function(err, sessions) {
                    if(err) return next(err);
                    res.json(sessions);
                });
});

//GET /gamesessions
// Route for returning multiple game sessions with parameters
router.get("/gamesessions/:platform/:game", function(req, res, next) {
    var platform = req.params.platform;
    var game = req.params.game;
    GameSession.find({platform: platform, game: game})
                .lean()
                .sort({createdAt: -1})
                .exec(function(err, sessions) {
                    if(err) return next(err);
                    if (!sessions.length) {
                        err = new Error("No sessions found");
                        return next(err);
                    }
                    res.json(sessions);
                });
});

//GET /gamesessions/:gID
// Route for returning a single unique game session
router.get("/gamesessions/:gID", function(req, res, next) {
    res.json(req.gamesession);
});


//POST /posts
// Route for creating gamesessions for specific user
router.post("/gamesessions/:uID/", function(req, res, next) {
    var gamesession = new GameSession(req.body);
    req.user.sessions.push(gamesession);
    gamesession.postedBy = req.user._id;
    req.user.save(function(err, user) {
        if(err) return next(err);
        gamesession.save(function(err, gamesession){
            if(err) return next(err);
            res.json(gamesession);
            res.status(201);
        });
    });
});

//PUT /gamesessions/:uID/:gID
//Edit a game session
router.put("/gamesessions/:uID/sessions/:gID", function(req, res, next) {
    req.user.sessions.id(req.gamesession._id).sessionupdate(req.body, function(err, result) {
        if(err) return next(err);
        GameSession.findByIdAndUpdate(req.params.gID, {updatedAt: new Date()}, function (err, game) {
          if (err) return next(err);
          res.json(game);
          res.status(201);
        });
        /*
        req.gamesession.update(req.body, function(error, game) {
          if(error) return next(error);
          res.json(result);
          res.status(201);
        });
        */
    });
});


//DELETE /gamesessions/:uID/sessions/:gID
//Delete a specific gamesession
router.delete("/gamesessions/:uID/sessions/:gID", function(req, res, next) {
    req.user.sessions.id(req.gamesession._id).remove(function(err) {
        req.user.save(function(err, user) {
            if(err) return next(err);
            req.gamesession.remove(function(err) {
                if(err) return next(err);
                res.json(user);
                res.status(201);
            })
        });
    });
});

//GET specific post
router.get("/posts/:pID", function(req, res, next) {
    res.json(req.post);
});

//POST /posts/:pID/comments
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
//Vote on an comment on your post
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
