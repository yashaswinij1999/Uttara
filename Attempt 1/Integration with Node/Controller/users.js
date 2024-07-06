const mongoose = require("mongoose");
const User = require("../model/userSchema");

exports.getUserDetails = async function (req, res) {
  const users = await User.find({});
  res.send(users);
};

exports.add = async function (req, res) {
  try {
    const newUser = await User.create(req.body);
    newUser.save();
    res.status(200).send("Data added succesfully");
  } catch (error) {
    res.status(500).send("failed to save");
  }
};

exports.deleteUser = async function (req, res) {
  const { id } = req.params;
  const remove = await User.findByIdAndDelete({ _id: id });
  res.send(remove);
};

exports.edit = async function (req, res) {
  const { id } = req.params;
  const updateUser = await User.findByIdAndUpdate(
    { _id: id },
    { firstName: "rama" },
    { new: true, runValidators: true }
  );
  res.send(updateUser);
};
