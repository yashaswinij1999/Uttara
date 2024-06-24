const Product = require("../model/productSchema");
const Cart = require("../model/cartSchema");

exports.getProduct = async function (req, res) {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

exports.addToCart = async function (req, res) {
  try {
    const newProduct = await Cart.create(req.body);
    res.send(newProduct);
  } catch (error) {
    res.send(error);
  }
};

exports.getCart = async function (req, res) {
  try {
    const data = await Cart.find({});
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.modify = async function (req, res) {
  try {
    const { id } = req.params;
    const update = await Cart.findByIdAndUpdate(
      { _id: id },
      { $inc: { quantity: 1 } },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).send(update);
  } catch (error) {
    res.send(error);
  }
};

exports.decrementQuantity = async function (req, res) {
  try {
    const { id } = req.params;
    const cartItem = await Cart.findById(id);
    if (!cartItem) {
      res.send("unable to find the Item");
    } else {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        await cartItem.save();
        res.send(cartItem);
      } else {
        await Cart.findByIdAndDelete(id);
      }
    }
  } catch (error) {
    res.send(error);
  }
};
