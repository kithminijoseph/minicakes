import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import cakeRoutes from './routes/cakes.js';
import orderRoutes from './routes/orders.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/cakes', cakeRoutes);
app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));
