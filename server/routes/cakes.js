import express from 'express';
import Cake from '../models/Cake.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const cakes = await Cake.find();
  res.json(cakes);
});

router.post('/', async (req, res) => {
  const cake = await Cake.create(req.body);
  res.status(201).json(cake);
});

export default router;
