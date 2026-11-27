// MEMBER 5: Contact form + admin stats (stats at /api/contact/stats for the demo)
const express = require('express');
const router = express.Router();

const messages = [];

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' });
  messages.push({ name, email, message, date: new Date().toISOString() });
  res.status(201).json({ message: 'Message received' });
});

router.get('/messages', (req, res) => res.json(messages));

router.get('/stats', (req, res) => res.json({ messages: messages.length }));

module.exports = router;
