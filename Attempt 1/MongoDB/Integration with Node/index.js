const express = require("express");
const app = express();

const mongoose = require("mongoose");
const User = require("./model/userSchema.js");
const router = require("./Router/users.js");

app.use(express.json());

// app.get("/users", Controller.getUserDetails);
// app.post("/addUsers", Controller.add);
// app.delete("/removeUser/:id", Controller.deleteUser);
// app.patch("/editUser/:id", Controller.edit);

app.use("/users", router);

mongoose
  .connect(
    "mongodb+srv://Yashu:Yashu123@cluster0.rbr83rj.mongodb.net/UserDb?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("data base connected"))
  .catch(() => console.log("failed"));

app.listen(3000, () => {
  console.log("server connected");
});
