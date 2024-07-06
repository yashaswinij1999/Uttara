const express = require("express");
const app = express();

const mongoose = require("mongoose");

const router = require("./router/users");
app.use(express.json());
app.use("/users", router);

mongoose
  .connect(
    "mongodb+srv://Yashu:Yashu123@cluster0.rbr83rj.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db connected"))
  .catch(() => console.log("failed"));

app.listen(3000, (req, res) => {
  console.log("server started");
});
