const Product = require("../models/product");

const createProduct = async (req, res) => {
  try {
    // Extract the data from the request body
    const {name, description, price, category, imageUrl} = req.body;

    // Create a new product instance
    const product = new Product({
      name,
      description,
      price,
      category,
      imageUrl
    });
    // Save the product to the database
    const newProduct = await product.save();

    res.status(201).json({success: true, data: newProduct}); // Return the newly created product in the response
  } catch (error) {
    res.status(500).json({success: false, error: "Failed to create product"});
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({success: true, data: products});
  } catch (error) {
    res
      .status(500)
      .json({success: false, error: "Failed to retrieve products"});
  }
};

const getProduct = async (req, res) => {
  try {
    const {productId} = req.params;
    const product = await Product.findById(productId);
    if (product) {
      res.status(200).json({success: true, data: product});
    } else {
      res.status(404).json({success: false, error: "Product not found"});
    }
  } catch (error) {
    res.status(500).json({success: false, error: "Failed to retrieve product"});
  }
};

const updateProduct = async (req, res) => {
  try {
    const {productId} = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      {new: true}
    );
    if (updatedProduct) {
      res.status(200).json({success: true, data: updatedProduct});
    } else {
      res.status(404).json({success: false, error: "Product not found"});
    }
  } catch (error) {
    res.status(500).json({success: false, error: "Failed to update product"});
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {productId} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (deletedProduct) {
      res
        .status(200)
        .json({success: true, message: "Product deleted successfully"});
    } else {
      res.status(404).json({success: false, error: "Product not found"});
    }
  } catch (error) {
    res.status(500).json({success: false, error: "Failed to delete product"});
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
