const Users = require("../model/users");

const getUsers = async function (req, res) {
  try {
    const users = await Users.find({});
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};

const addUsers = async function (req, res) {
  try {
    await Users.create(req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
};

const updateUsers = async function (req, res) {
  try {
    const { id } = req.params;
    const findUser = await Users.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.send(findUser);
  } catch (error) {
    console.log(error);
  }
};

const removeUser = async function (req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await Users.findByIdAndDelete({ _id: id });
    res.send(deletedUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsers, addUsers, updateUsers, removeUser };
