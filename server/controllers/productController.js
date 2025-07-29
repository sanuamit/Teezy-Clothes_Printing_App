// server/controllers/productController.js

import Product from '../models/Product.js';
import cloudinary from 'cloudinary';

// Create a new product
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, category } = req.body;

    // Cloudinary image upload (optional)
    let image = null;
    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      image = result.secure_url;
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      image,
    });

    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    next(error);
  }
};

// Get all products
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Get product by ID
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Update product
export const updateProduct = async (req, res, next) => {
  try {
    const { name, description, price, category } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;

    // Update image if new file uploaded
    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      product.image = result.secure_url;
    }

    await product.save();
    res.json({ message: 'Product updated successfully', product });
  } catch (error) {
    next(error);
  }
};

// Delete product
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};
