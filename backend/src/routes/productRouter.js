const express = require("express");
const {authorizeUser, authorizeAdmin} = require("../middlewares/auth");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");
const productRouter = express.Router();

productRouter.get("/get", authorizeUser, getProducts);
productRouter.get("/get/:id", authorizeUser, getProduct);
productRouter.post("/create", authorizeAdmin, createProduct);
productRouter.put("/update/:id", authorizeUser, updateProduct);
productRouter.delete("/delete/:id", authorizeUser, deleteProduct);

module.exports = productRouter;
