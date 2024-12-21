const express = require('express');
const Timer = require('../models/Timer');
const router = express.Router();

// Create a new timer
router.post('/', async (req, res) => {
  const { shop, startDate, endDate, description } = req.body;

  try {
    const timer = new Timer({ shop, startDate, endDate, description });
    await timer.save();
    res.status(201).json(timer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch timers for a specific shop
router.get('/:shop', async (req, res) => {
  const { shop } = req.params;

  try {
    const timers = await Timer.find({ shop });
    res.json(timers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
