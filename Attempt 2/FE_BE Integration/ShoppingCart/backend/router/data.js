const express = require("express");

const router = express.Router();

const controller = require("../controller/data");
router.get("/getProducts", controller.getProducts);
router.post("/addToCart", controller.addToCart);
router.get("/getCart", controller.getCart);
router.patch("/increment/:id", controller.increment);
router.patch("/decrement/:id", controller.decrement);
module.exports = router;
