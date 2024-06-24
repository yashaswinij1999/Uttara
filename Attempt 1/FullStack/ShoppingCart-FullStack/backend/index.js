const express = require("express");
const mongoose = require("mongoose");

const Product = require("./model/productSchema");
const productData = require("./productData");

const cors = require("cors");

// console.log(Product, productData);
// Product.insertMany(productData);

const app = express();
const router = require("./router/product");

app.use(cors());
app.use(express.json());
app.use("/shoppingcart", router);

app.listen(3000, () => console.log("server connected"));

mongoose
  .connect(
    "mongodb+srv://Yashu:Yashu123@cluster0.rbr83rj.mongodb.net/ShoppingCart"
  )
  .then(() => console.log("database connected"))
  .catch(() => console.log("failed"));
