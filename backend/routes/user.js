const express = require("express");
const User = require("../models/User");
const userController = require("../controllers/UserController");
const router = new express.Router();

//register user
router.post("/register", userController.registerUser);

module.exports = router;
