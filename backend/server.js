require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('./middleware/cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors);
app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Health check
app.get('/health', (req, res) => res.json({ status: 'OK', message: 'AI Nexus Backend Ready!' }));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

