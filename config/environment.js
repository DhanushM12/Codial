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
};

module.exports = development;
