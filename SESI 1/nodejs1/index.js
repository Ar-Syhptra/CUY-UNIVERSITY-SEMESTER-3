const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("utama");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  if (req.name === "arkan") {
    res.send("login berhasil");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
