const express = require("express");
const router = express.Router();

const controller = require("../controller/product");

router.get("/products/", controller.getProduct);

module.exports = router;
