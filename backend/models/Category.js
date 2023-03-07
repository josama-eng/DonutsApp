const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const conn = require("../db/connect");
const User = require("./User");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
