const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!Product) {
    return res.json({ message: "Product not found" });
  }
  res.json(product);
});
