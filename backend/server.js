require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/user");
const productsRoute = require("./routes/products");
require("./db/connect");

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());
server.use(express.static(__dirname + "/public"));

server.use(userRoute);
server.use(productsRoute);

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
