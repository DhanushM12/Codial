const express = require("express"); //fetch the existing instance
const router = express.Router();

router.use("/posts", require("./posts"));

module.exports = router;
