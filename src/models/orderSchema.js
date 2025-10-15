import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
  }],
  status: { type: String, default: 'pending' },
  total: { type: Number, required: true },
  idempotencyKey: { type: String, unique: true } // Prevent duplicate orders
}, 
{ timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
