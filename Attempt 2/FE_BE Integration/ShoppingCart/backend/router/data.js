const express = require("express");

const router = express.Router();

const controller = require("../controller/data");
router.get("/getProducts", controller.getProducts);
router.post("/addToCart", controller.addToCart);
router.get("/getCart", controller.getCart);

module.exports = router;
