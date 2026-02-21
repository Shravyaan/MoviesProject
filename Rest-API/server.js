const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3005;
app.use(express.json());

function readData() {
  const data = fs.readFileSync("./data.json");
  return JSON.parse(data);
}

function writeDATA() {
  fs.writeFileSync("./data.json");
}

app.get("/products", (res, req) => {
  const products = readData();
  res.json(products);
});
