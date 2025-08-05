import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
    enum: ['6-inch', '8-inch', '10-inch'],
  },
  price: {
    type: Number,
    required: true,
  },
});

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  variants: {
    type: [variantSchema],
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
