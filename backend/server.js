require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoute = require("./routes/user");
const productsRoute = require("./routes/products");
const categoriesRoute = require("./routes/category");
require("./db/connect");
mongoose.set("strictQuery", false);

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());
server.use("/public", express.static(path.join(__dirname, "public")));

server.use(userRoute);
server.use(productsRoute);
server.use(categoriesRoute);

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
