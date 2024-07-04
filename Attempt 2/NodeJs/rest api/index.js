const express = require("express");

const app = express();
const usersJson = require("./Users.json");
const users = usersJson.users;

app.use(express.json());

app.delete("/deleteUser/:id", (req, res) => {
  const { id } = req.params;
  const removeData = users.filter((el) => el.id !== parseInt(id));
  res.send(removeData);
});

app.put("/putUsers/:id", (req, res) => {
  const { id } = req.params;
  const findProduct = users.findIndex((el) => el.id === parseInt(id));
  users.splice(findProduct, 1, req.body);
  res.send(users);
});

app.patch("/update/:id", (req, res) => {
  const { id } = req.params;
  console.log(typeof id);
  const findProduct = users.findIndex((el) => el.id === parseInt(id));
  console.log(findProduct);
  users.splice(findProduct, 1, req.body);
  res.send(users);
});

app.post("/addUser", (req, res) => {
  users.push(req.body);
  res.send(req.body);
});

app.get("/getUsers", (req, res) => {
  res.send(users);
});

app.listen(8080, (req, res) => {
  console.log("server started");
});
