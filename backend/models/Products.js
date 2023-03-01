const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const conn = require("../db/connect");
const User = require("./User");
const ObjectID = mongoose.Schema.Types.ObjectID;

const productsSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectID,
      ref: "User",
    },
    name: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    images: [String],
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.Products || mongoose.model("Products", productsSchema);
