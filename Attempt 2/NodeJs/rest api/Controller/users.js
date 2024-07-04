const userjson = require("../Users.json");
const users = userjson.users;

const getUsers = (req, res) => {
  res.send(users);
};

const addUser = (req, res) => {
  users.push(req.body);
  res.send(req.body);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log(typeof id);
  const findProduct = users.findIndex((el) => el.id === parseInt(id));
  console.log(findProduct);
  users.splice(findProduct, 1, req.body);
  res.send(users);
};

const putUser = (req, res) => {
  const { id } = req.params;
  const findProduct = users.findIndex((el) => el.id === parseInt(id));
  users.splice(findProduct, 1, req.body);
  res.send(users);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const removeData = users.filter((el) => el.id !== parseInt(id));
  res.send(removeData);
};

module.exports = { getUsers, addUser, updateUser, putUser, deleteUser };
