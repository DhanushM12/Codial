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
      user: "dhanushmukhi", // generated username
      pass: "Dhanush@1297#", // generated password
    },
    tls: {
      rejectUnauthorized: false,
    },
  },
  google_client_id:
    "273710427537-s6hqhoqr8sahh7igmjifabfgbiut3g5o.apps.googleusercontent.com",
  google_client_secret: "B-xfUk8LleK0VWho7-RGzbUL",
  google_call_back_url: "http://localhost:8000/users/auth/google/callback",
  jwt_secret: "codial",
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
};

module.exports = eval(
  process.env.NODE_ENV == undefined ? development : eval(process.env.NODE_ENV)
);
