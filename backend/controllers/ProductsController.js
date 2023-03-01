const Products = require("../models/Products");

//register user
async function addProducts(req, res) {
  try {
    const newProduct = await Products.create(req.body);
    newProduct.save();
  } catch (err) {
    return res.status(400).send(err, "error");
  }
}

//log user

module.exports = {
  addProducts,
};
