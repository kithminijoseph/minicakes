import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      cakeId: String,
      message: String,
      quantity: Number
    }
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
