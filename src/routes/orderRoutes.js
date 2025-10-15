import express from 'express';

const router = express.Router();
import { createOrder, getOrder, getOrderById, updateOrder, deleteOrder } from '../controllers/OrderControllers.js';

router.post('/', createOrder);       // POST /api/v1/orders
router.get('/', getOrder);          // GET /api/v1/orders
router.get('/:id', getOrderById);    // GET /api/v1/orders/:id
router.put('/:id', updateOrder);     // PUT /api/v1/orders/:id
router.delete('/:id', deleteOrder);  // DELETE /api/v1/orders/:id

export default router;