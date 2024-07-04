const express = require("express");
const app = express();

const router = express.Router();
const controller = require("../Controller/users");

router.get("/getUsers", controller.getUsers);
router.post("/addUser", controller.addUser);
router.patch("/updateUser/:id", controller.updateUser);
router.put("/putUser/:id", controller.putUser);
router.delete("/deleteUser/:id", controller.deleteUser);

module.exports = router;
