import mongoose from 'mongoose';

const CakeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String],
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Cake = mongoose.model('Cake', CakeSchema);

export default Cake;
