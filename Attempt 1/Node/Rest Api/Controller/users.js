const fs = require("fs");
const data_json = fs.readFileSync("./Users.json");
const data = JSON.parse(data_json);
const users = data.users;

exports.getAllData = (req, res) => {
  res.send(users);
};
