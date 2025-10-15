import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  status: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' },
  amount: { type: Number, required: true },
  idempotencyKey: { type: String, unique: true }, // Prevent duplicate payments
},
{ timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
