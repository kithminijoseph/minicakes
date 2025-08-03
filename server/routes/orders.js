import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { cake, customerName, address, dueDate } = req.body;

    const newOrder = new Order({
      cake,
      customerName,
      address,
      dueDate
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving order" });
  }
});

export default router;
