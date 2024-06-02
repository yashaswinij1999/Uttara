const express = require("express");
const app = express();

const fs = require("fs");
const data = fs.readFileSync("Users.json");
const data_json = JSON.parse(data);
const users = data_json.users;

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const removeUser = users.filter((el) => el.id !== parseInt(id));
  res.send(removeUser);
});

app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const findProduct = users.findIndex((el) => el.id === parseInt(id));
  users.splice(findProduct, 1, { ...req.body });
  res.send(users);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const findProduct = users.findIndex((el) => el.id === parseInt(id));
  users.splice(findProduct, 1, req.body);
  console.log(users);
});

app.post("/users/", (req, res) => {
  users.push(req.body);
  res.send(req.body);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(5000, () => {
  console.log("server started");
});
