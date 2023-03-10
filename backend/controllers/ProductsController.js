const Products = require("../models/Products");

// add products
async function addProducts(req, res) {
  try {
    const newProduct = await Products.create(req.body);
    newProduct.save();
  } catch (err) {
    return res.status(400).send(err, "error");
  }
}

// get products

async function getProducts(req, res) {
  try {
    const allProducts = await Products.find({});
    if (!allProducts.length) {
      return res.status(400).send("No products in database");
    } else {
      console.log(allProducts);
      res.send(allProducts);
    }
  } catch (error) {
    console.log(error);
  }
}

// get top products

async function getTopProducts(req, res) {
  try {
    const topProducts = await Products.find({ isTop: true });
    return res.status(220).send(topProducts);
  } catch (error) {
    console.log(error);
    res.status(425).send(error);
  }
}

module.exports = {
  addProducts,
  getProducts,
  getTopProducts,
};
