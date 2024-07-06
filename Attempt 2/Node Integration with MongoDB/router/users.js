const express = require("express");

const router = express.Router();
const controller = require("../controller/user");

router.get("/getUsers", controller.getUsers);
router.post("/addUsers", controller.addUsers);
router.patch("/updateUsers/:id", controller.updateUsers);
router.delete("/removeUser/:id", controller.removeUser);
module.exports = router;
