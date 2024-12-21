require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const timerRoutes = require('./routes/timerRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/timers', timerRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
