const fs = require("fs");
const rfs = require("rotating-file-stream");
const path = require("path");

const logDirectory = path.join(__dirname, "../production_logs");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: logDirectory,
});

const development = {
  name: "development",
  asset_path: "/assets",
  session_cookie_key: "blahsomething",
  db: "codial_development",
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "####", // your gmail username
      pass: "####", // your gmail password
    },
    tls: {
      rejectUnauthorized: false,
    },
  },
  google_client_id: "####",
  google_client_secret: "####",
  google_call_back_url: "http://localhost:8000/users/auth/google/callback",
  jwt_secret: "codial",
  morgan: {
    mode: "dev",
    options: { stream: accessLogStream },
  },
};

const production = {
  name: "production",
  asset_path: process.env.CODIAL_ASSET_PATH,
  session_cookie_key: process.env.CODIAL_SESSION_COOKIE,
  db: process.env.CODIAL_DB,
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.CODIAL_GMAIL_USERNAME, // generated username
      pass: process.env.CODIAL_GMAIL_PASSWORD, // generated password
    },
    tls: {
      rejectUnauthorized: false,
    },
  },
  google_client_id: process.env.GOOGLE_CLIENT_ID,
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
  google_call_back_url: process.env.GOOGLE_CALLBACK_URL,
  jwt_secret: process.env.CODIAL_JWT_SECRET,
  morgan: {
    mode: "combined",
    options: { stream: accessLogStream },
  },
};

module.exports = eval(
  process.env.NODE_ENV == undefined ? development : eval(process.env.NODE_ENV)
);
