const nodemailer = require("../config/nodemailer");

//this is another way of exporting a method
//this newComment method should be called when a new comment is made so we update in comments controller
exports.newComment = (comment) => {
  console.log("inside new comment mailer");

  //sendmail is predefined function
  nodemailer.transporter.sendMail(
    {
      from: "dhanushmukhi@gmail.com", // sender address
      to: comment.user.email, // list of receivers
      subject: "New Comment Published", // Subject line
      // text: "Hello world?", // plain text body
      html: "<h1>Yep, your comment is now published!!!</h1>", // html body
    },
    (err, info) => {
      if (err) {
        console.log("error in publishing mail", err);
        return;
      }
      console.log("Message sent ", info);
      return;
    }
  );
};
