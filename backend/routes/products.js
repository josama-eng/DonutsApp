const express = require("express");
const Products = require("../models/Products");
const productsController = require("../controllers/ProductsController");
const router = new express.Router();

//add product
router.post("/products", productsController.addProducts);

module.exports = router;
