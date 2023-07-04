const mongoose = require("mongoose");
const {v4: uuidv4} = require("uuid");

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    default: uuidv4(),
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
