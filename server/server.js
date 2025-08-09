import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import cakeRoutes from './routes/cakes.js';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orders.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://minicakes-production.up.railway.app',
  'https://www.miniscakes.com',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204, // Some legacy browsers choke on 200
};

app.use(cors(corsOptions));

// ✅ Handle preflight requests explicitly
app.options('*', cors(corsOptions));

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
