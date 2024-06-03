const express = require("express");
const {
  getAllData,
  postData,
  putData,
  patchData,
  deleteData,
} = require("../Controller/users");
const app = express();

const router = express.Router();

router.get("/", getAllData);
router.post("/", postData);
router.put("/:id", putData);
router.patch("/:id", patchData);
router.delete("/:id", deleteData);

exports.router = router;
