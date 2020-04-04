const Post = require("../models/post");
const User = require("../models/user");

module.exports.home = async function(req, res) {
  //return res.end("<h1>Express is up for Codial</h1>");
  //console.log(req.cookies);
  //res.cookie("user_id", 25);
  // Post.find({}, function(err, posts) {
  //   return res.render("home", {
  //    title: "Codial | Home",
  //    posts: posts
  //  });
  //});

  try {
    //populate the user for each post
    let posts = await Post.find({})
      .sort("-createdAt")
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user"
        }
      });
    let users = await User.find({});

    return res.render("home", {
      title: "Codial | Home",
      posts: posts,
      all_users: users
    });
  } catch (err) {
    console.log("Error ", err);
    return;
  }
};

//module.exports.actionName = frunction(req,res){}

//using then
//Post.find({}).populate('comments').then(function());

//using Promises
/*let posts = Post.find({}).populate('comments').exec();
posts.then();*/
