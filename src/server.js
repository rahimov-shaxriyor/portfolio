// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let messages = []; // Store messages in memory

// Get all messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Add new message
app.post('/messages', (req, res) => {
  const { full_name, phone, comment } = req.body;
  if (!full_name && !phone && !comment) {
    return res.status(400).json({ error: 'At least one field is required' });
  }

  const newMessage = { full_name, phone, comment };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});