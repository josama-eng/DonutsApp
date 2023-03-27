const express = require("express");
const Products = require("../models/Products");
const productsController = require("../controllers/ProductsController");
const router = new express.Router();

//add product
router.post("/products", productsController.addProducts);

//get products

router.get("/products", productsController.getProducts);

// get top products

router.get("/products/top", productsController.getTopProducts);

//get single product
router.get("/productDetails/:id", productsController.productDetails);

module.exports = router;
