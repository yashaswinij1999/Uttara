const express = require("express");
const app = express();

const log = (req, res, next) => {
  console.log("in log function", req.method);
  next();
};

const displayDate = (req, res, next) => {
  now = new Date();
  console.log("todayDate", now);
};

app.post("/getDate", displayDate);

const thirdWare = (req, res, next) => {
  console.log("in thirdWare");
  next();
};

const secondWare = (req, res, next) => {
  console.log("in secondWare");
  next();
};

const firstWare = (req, res, next) => {
  console.log("in firstmiddleware");
  next();
};

app.use(thirdWare);

// app.use(log, (req, res) => {
//   console.log("in app middleware");
// });

app.get("/get", (req, res) => {
  res.send({ type: "get", message: "in get call" });
});

app.post("/post", (req, res) => {
  res.send({ type: "post", message: "in post call" });
});

app.put("/put", (req, res) => {
  res.send({ type: "put", message: "in put call" });
});

app.listen(8080, (req, res) => {
  console.log("server started");
});
