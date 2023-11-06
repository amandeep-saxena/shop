const express = require("express");

const router = express.Router();

// const{createNewUser } = require("../controller/user")
const { registerUser , LoginUser  } = require("../controller/Auth");

router.post("/sigup" , registerUser)

router.post("/login" , LoginUser)
module.exports = router