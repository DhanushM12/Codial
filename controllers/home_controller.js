const Post = require("../models/post");
const User = require("../models/user");

module.exports.home = function(req, res) {
  //return res.end("<h1>Express is up for Codial</h1>");
  //console.log(req.cookies);
  //res.cookie("user_id", 25);
  // Post.find({}, function(err, posts) {
  //   return res.render("home", {
  //    title: "Codial | Home",
  //    posts: posts
  //  });
  //});

  //populate the user for each post
  Post.find({})
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user"
      }
    })
    .exec(function(err, posts) {
      User.find({}, function(err, users) {
        return res.render("home", {
          title: "Codial | Home",
          posts: posts,
          all_users: users
        });
      });
    });
};

//module.exports.actionName = frunction(req,res){}
