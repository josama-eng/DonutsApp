const Category = require("../models/Category");

//add category

async function addCategory(req, res) {
  try {
    const newCategory = await Category.create(req.body);
    newCategory.save();
  } catch (err) {
    return res.status(422).send(err);
  }
}

//get category
async function getCategories(req, res) {
  try {
    const allCategories = await Category.find({});
    if (!allCategories.length) {
      return res.status(250).send("No categories");
    } else {
      console.log(allCategories);
      return res.status(200).send(allCategories);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
}

module.exports = {
  addCategory,
  getCategories,
};
