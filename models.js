'use strict';

var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var sortComments = function(a, b) {
    if(a.votes == b.votes) {
        return b.updatedAt - a.updatedAt;
    }
    return b.votes - a.votes;
}

var sortPosts = function(a, b) {
    return b.createdAt - a.createdAt;
}

var CommentSchema = new Schema({
    text: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    votes: {type: Number, default:0}
});

CommentSchema.method("update", function(updates, callback) {
    Object.assign(this, updates, {updatedAt: new Date()});
    this.parent().save(callback);
});

CommentSchema.method("vote", function(vote, callback) {
    if(vote == "up") {
        this.votes += 1;
    } else {
        this.votes -= 1;
    }
    this.parent().save(callback);
});

var GameSessionSchema = new Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    region: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    game: {
      type: String,
      required: true
    },
    age: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    platform: {
      type: [String], 
      enum: ["Xbox One", "PS4", "PC"],
      required: true
    }
});


var PostSchema = new Schema({
    text: String,
    createdAt: {type: Date, default: Date.now},
    comments: [CommentSchema]
});

PostSchema.pre("save", function(next){
    this.comments.sort(sortComments); //[object Object]
    next();
});

var UserSchema = new Schema({
    posts: [PostSchema],
    sessions: [GameSessionSchema],
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
});

// authenticate input against database documents
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email })
      .exec(function (error, user) {
        if (error) {
          return callback(error);
        } else if ( !user ) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password , function(error, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
}

// hash password before saving to database
UserSchema.pre('save', function(next) {
  this.posts.sort(sortPosts);
  this.sessions.sort(sortPosts);
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

var GameSession = mongoose.model("GameSession", GameSessionSchema);
var Post = mongoose.model("Post", PostSchema);
var User = mongoose.model("User", UserSchema);

module.exports.GameSession = GameSession;
module.exports.Post = Post;
module.exports.User = User;