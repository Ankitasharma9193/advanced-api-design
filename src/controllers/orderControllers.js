import e from 'express';
import express from'express';

const createOrder = (req, res) => {
  res.status(201).json({ message: 'Order created successfully' });
}

const getOrder = (req, res) => { 
  res.status(200).json({ message: 'Order retrieved successfully' });
}

const getOrderById = (req, res) => {
  res.status(200).json({ message: 'Order retrieved successfully' });
}

const updateOrder = (req, res) => {
  res.status(200).json({ message: 'Order updated successfully' });
}

const deleteOrder = (req, res) => {
  res.status(200).json({ message: 'Order deleted successfully' });
}

export { createOrder, getOrder, getOrderById, updateOrder, deleteOrder };