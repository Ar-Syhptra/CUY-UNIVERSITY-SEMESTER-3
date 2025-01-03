const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  response(200, "ini data", "ini mesage", res);
});

app.get("/mahasiswa", (req, res) => {
  response(200, "mahasiswa get list", res);
});

app.get("/mahasiswa/:nim", (req, res) => {
  const nim = req.params.nim;
  response(200, `spesifik mahasiswa by id ${nim}`, res);
});

app.post("/mahasiswa", (req, res) => {
  response(200, "ini posting", res);
});

app.put("/mahasiswa", (req, res) => {
  response(200, "ini update", res);
});

app.delete("/mahasiswa", (req, res) => {
  response(200, "ini delete data", res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
