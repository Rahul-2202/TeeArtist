// const productModel = require("../models/product");
const getProducts = async (req, res) => {
  res.send("all the products");
};
const createProduct = async (req, res) => {
  res.send("create new product");
};

const updateProduct = async (req, res) => {
  res.send("update product");
};

const deleteProduct = async (req, res) => {
  res.send("delete product");
};

module.exports = {getProducts, createProduct, updateProduct, deleteProduct};
