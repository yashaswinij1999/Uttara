const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  category: String,
  image: {
    type: String,
    required: true,
  },
  rating: {
    rate: Number,
    count: Number,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
