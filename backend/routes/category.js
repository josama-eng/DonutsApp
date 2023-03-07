const express = require("express");
const Category = require("../models/Category");
const categoryController = require("../controllers/CategoryController");
const router = new express.Router();

//add category

router.post("/categories", categoryController.addCategory);

//get category

router.get("/categories", categoryController.getCategories);

module.exports = router;
