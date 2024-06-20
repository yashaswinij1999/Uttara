const express = require("express");
const router = express.Router();

const Controller = require("../Controller/users.js");

router.get("/", Controller.getUserDetails);
router.post("/addUsers", Controller.add);
router.delete("/removeUser/:id", Controller.deleteUser);
router.patch("/editUser/:id", Controller.edit);

module.exports = router;
