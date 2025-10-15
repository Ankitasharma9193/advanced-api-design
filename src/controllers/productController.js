import e from 'express';
import express from'express';

const createProduct = async (req, res) => {
  try{

    const { name, price, stock } = req.body;
    
    if (!name || !price || !stock) {
      return res.status(400).json({ error: 'Name, price, and stock are required' });
    }
    stock += parseInt(stock);
    
    const newProduct = await Product.create({ 
      name, price, stock
    });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });

  } catch(error){
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
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