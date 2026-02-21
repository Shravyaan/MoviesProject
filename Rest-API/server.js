const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3005;
app.use(express.json());

function readDATA() {
  const data = fs.readFileSync("./data.json");
  return JSON.parse(data);
}

function writeDATA(data) {
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
}
app.get("/products", (req, res) => {
  const products = readDATA();
  res.json(products);
});

app.post("/products", (req, res) => {
  const products = readDATA();
  const newProduct = req.body;
  newProduct.id =
    products.length > 0 ? products[products.length - 1].id + 1 : 1;
  products.push(newProduct);
  writeDATA(products);
  res.json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const products = readDATA();
  const id = req.params.id;
  const index = products.findIndex((p) => p.id == id);
  if (index === -1) {
    return res.json({ message: "Product not found" });
  }
  products[index] = { id, ...req.body };
  writeDATA(products);
  res.json(products[index]);
});

app.delete("/products/:id", (req, res) => {
  const products = readDATA();
  const id = parseInt(req.params.id);
  const filteredProduct = products.filter((p) => p.id !== id);
  if (products.length === filteredProduct.length) {
    return res.json({ message: "Message not found" });
  }
  writeDATA(filteredProduct);
  res.json({ message: "Product Deleted" });
});

app.listen(PORT);
