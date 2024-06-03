const express = require("express");
const app = express();
const usersRouter = require("./Router/users");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", usersRouter.router);

app.listen(5000, () => {
  console.log("server started");
});
