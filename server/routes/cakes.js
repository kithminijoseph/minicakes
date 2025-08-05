import express from 'express';
import Cake from '../models/Cake.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cakes = await Cake.find();
    res.json(cakes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id);
    if (!cake) return res.status(404).json({ message: 'Cake not found' });
    res.json(cake);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST a new cake (admin only, maybe)
router.post('/', async (req, res) => {
  try {
    const newCake = new Cake(req.body);
    await newCake.save();
    res.status(201).json(newCake);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err });
  }
});

export default router;
