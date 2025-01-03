const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("utama");
});

app.get("/hello", (req, res) => {
  console.log({ urlparam: req.query });
  res.send("Hello World! LALALA");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  const username = req.body.username;
  if (username === usernameFromDbExist) {
    res.status(400).send("username tidak dapat digunakan");
  }
  res.send("login berhasil");
});

app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("update berhasil");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
