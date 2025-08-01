import mongoose from 'mongoose';

const cakeSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
});

export default mongoose.model('Cake', cakeSchema);
