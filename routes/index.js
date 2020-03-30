const express = require("express"); //fetch the existing instance
const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("router loaded");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));

//for any other routes, access from here
//router.use('/routerName', require('./routerFile'));

module.exports = router;
