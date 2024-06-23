const Product = require("../model/productSchema");

exports.getProduct = async function (req, res) {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};
