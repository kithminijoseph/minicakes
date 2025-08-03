import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  cake: String,
  customerName: String,
  address: String,
  dueDate: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", OrderSchema);
