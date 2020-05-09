const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

//defining transporter
// create reusable transporter object using the default SMTP transport
//this is the part which sends email and how communication takes place
let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "dhanushmukhi", // generated username
    pass: "Dhanush@1297#", // generated password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

//here we define whenever we are going to send the html template and where it is stored in views
let renderTemplate = (data, relativePath) => {
  let mailHTML;
  ejs.renderFile(
    path.join(__dirname, "../views/mailers", relativePath),
    data,
    function (err, template) {
      if (err) {
        console.log("error in rendering template");
        return;
      }
      mailHTML = template;
    }
  );
  return mailHTML;
};

module.exports = {
  transporter: transporter,
  renderTemplate: renderTemplate,
};
