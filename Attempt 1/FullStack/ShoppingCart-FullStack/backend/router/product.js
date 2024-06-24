const express = require("express");
const router = express.Router();

const controller = require("../controller/product");

router.get("/products/", controller.getProduct);
router.post("/cart/addToCart", controller.addToCart);
router.get("/cart/getCart", controller.getCart);
router.patch("/cart/update/:id", controller.modify);
router.patch("/cart/decrement/:id", controller.decrementQuantity);
module.exports = router;
