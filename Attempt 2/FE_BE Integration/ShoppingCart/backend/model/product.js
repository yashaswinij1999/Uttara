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
  image: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
