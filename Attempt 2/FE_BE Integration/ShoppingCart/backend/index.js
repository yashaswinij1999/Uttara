const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const router = require("./router/data");
app.use("/shopApp", router);

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Yashu:Yashu123@cluster0.rbr83rj.mongodb.net/ShopApp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db connected"))
  .catch(() => console.log("db connection failed"));

app.listen(3000, (req, res) => {
  console.log("server started");
});
