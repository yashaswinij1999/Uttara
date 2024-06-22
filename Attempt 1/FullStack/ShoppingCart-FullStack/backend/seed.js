const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Product = require("./model/productSchema");
const ProductData = require("./productData");

Product.insertMany(ProductData)
  .then(() => console.log("data saved"))
  .catch((error) => console.log("failed to connect"));

mongoose
  .connect(
    "mongodb+srv://Yashu:Yashu123@cluster0.rbr83rj.mongodb.net/ShoppingCart"
  )
  .then(() => console.log("database connected"))
  .catch(() => console.log("failed"));

app.listen(3000, (req, res) => {
  console.log("server started");
});
