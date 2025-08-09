import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import cakeRoutes from './routes/cakes.js';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orders.js';

dotenv.config();


const app = express();
const allowedOrigins = ['http://localhost:5173', 'https://minicakes-production.up.railway.app', 'https://www.miniscakes.com'];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like curl or Postman)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));
app.use(express.json());
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
app.get('/test-mongo', async (req, res) => {
  try {
    // Just check connection state
    if (mongoose.connection.readyState === 1) {
      res.json({ status: 'MongoDB connected!' });
    } else {
      res.status(500).json({ status: 'MongoDB not connected!' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Use routes
app.use('/api/cakes', cakeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
