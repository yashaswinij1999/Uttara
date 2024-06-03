const express = require("express");
const app = express();

const fs = require("fs");
const data_json = fs.readFileSync("./Users.json");
const data = JSON.parse(data_json);
const users = data.users;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

exports.getAllData = (req, res) => {
  res.send(users);
};

exports.postData = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send(users);
};

exports.putData = (req, res) => {
  const { id } = req.params;
  const findElement = users.findIndex((el) => el.id === parseInt(id));
  console.log(findElement);
  users.splice(findElement, 1, req.body);
  res.send(users);
};

exports.patchData = (req, res) => {
  const { id } = req.params;
  const findElement = users.findIndex((el) => el.id === parseInt(id));
  users.splice(findElement, 1, req.body);
  res.send(users);
};

exports.deleteData = (req, res) => {
  const { id } = req.params;
  const removedUsers = users.filter((el) => el.id !== parseInt(id));
  res.send(removedUsers);
};
