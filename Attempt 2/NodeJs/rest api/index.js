const express = require("express");

const app = express();
const usersJson = require("./Users.json");
const users = usersJson.users;

app.use(express.json());

const router = require("./Router/users");
app.use("/users", router);

app.listen(8080, (req, res) => {
  console.log("server started");
});
