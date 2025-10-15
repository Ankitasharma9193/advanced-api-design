import e from 'express';
import express from'express';

const createProduct = (req, res) => {
  res.status(201).json({ message: 'Product created successfully' });
}

const getProducts = (req, res) => { 
  res.status(200).json({ message: 'Product retrieved successfully' });
}

const getProductById = (req, res) => {
  res.status(200).json({ message: 'Product retrieved successfully' });
}

const updateProduct = (req, res) => {
  res.status(200).json({ message: 'Product updated successfully' });
}

const deleteProduct = (req, res) => {
  res.status(200).json({ message: 'Product deleted successfully' });
}

export { createProduct, getProducts, getProductById, updateProduct, deleteProduct };