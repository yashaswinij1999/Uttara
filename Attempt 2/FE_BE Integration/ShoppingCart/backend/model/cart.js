const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
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

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
