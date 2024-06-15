const express = require("express");
const app = express();

const mongoose = require("mongoose");
const User = require("./model/userSchema");

const u1 = new User({
  firstName: "Terry",
  lastName: "Medhurst",
  emailId: "atuny0@sohu.com",
  contactNumber: "+63 791 675 8914",
});

User.insertMany([u1])
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

mongoose
  .connect(
    "mongodb+srv://Yashu:Yashu123@cluster0.rbr83rj.mongodb.net/UserDb?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("data base connected"))
  .catch(() => console.log("failed"));

app.listen(3000, () => {
  console.log("server connected");
});
