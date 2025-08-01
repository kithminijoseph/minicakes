import express from 'express';
import Order from '../models/Orders.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const order = await Order.create({
      userId: decoded.id,
      items: req.body.items,
      total: req.body.total
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

export default router;
