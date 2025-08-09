import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import cakeRoutes from './routes/cakes.js';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orders.js';

dotenv.config();


const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://minicakes-production.up.railway.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // if you use cookies/auth
}));
app.use(express.json());
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use routes
app.use('/api/cakes', cakeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
