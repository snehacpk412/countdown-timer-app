const mongoose = require('mongoose');

const TimerSchema = new mongoose.Schema({
  shop: { type: String, required: true }, // Store identifier
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Timer', TimerSchema);
