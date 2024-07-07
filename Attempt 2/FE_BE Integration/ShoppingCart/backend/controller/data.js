const Product = require("../model/product");
const Cart = require("../model/cart");

const getCart = async (req, res) => {
  try {
    const data = await Cart.find({});
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const addToCart = async (req, res) => {
  try {
    const { _id, title, price, image, qty } = req.body;
    const existing = await Cart.findById({ _id });

    console.log(existing);
    if (existing) {
      existing.qty = qty + 1;
      console.log(existing);
      await existing.save();
      res.send(existing);
    } else {
      const data = await Cart.create(req.body);
      res.send(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const resp = await Product.find({});
    res.send(resp);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts, addToCart, getCart };
