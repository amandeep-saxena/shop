const express = require("express");

const router = express.Router();

// const{createNewUser } = require("../controller/user")
const {createNewUser ,verifyOtp  } = require("../controller/user");

router.post("/otp" ,createNewUser)
router.post("/verifyOtp" ,verifyOtp)

module.exports = router