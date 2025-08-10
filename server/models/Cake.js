import mongoose from 'mongoose';

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
});

const Cake = mongoose.model('Cake', cakeSchema);

export default Cake;
