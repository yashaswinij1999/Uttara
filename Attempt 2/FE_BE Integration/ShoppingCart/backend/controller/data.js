const Product = require("../model/product");
const Cart = require("../model/cart");

const decrement = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Cart.findById({ _id: id });
    console.log(product);
    if (product) {
      if (product.qty > 1) {
        product.qty -= 1;
        product.save();
        res.send(product);
      } else {
        const removeProduct = await Cart.findByIdAndDelete({ _id: id });
        res.send(removeProduct);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const increment = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Cart.findById({ _id: id });
    if (product) {
      product.qty += 1;
      product.save();
      res.send(product);
    }
  } catch (error) {
    console.log(error);
  }
};

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

module.exports = { getProducts, addToCart, getCart, increment, decrement };
