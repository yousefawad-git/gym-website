// MEMBER 1: Authentication
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const users = []; // in-memory demo storage

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required' });
  if (users.find(u => u.email === email)) return res.status(409).json({ error: 'Email already registered' });
  users.push({ name, email, password: await bcrypt.hash(password, 8) });
  res.status(201).json({ message: 'Registered', name, email });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: 'Wrong email or password' });
  res.json({ message: 'Logged in', name: user.name, email: user.email });
});

router.get('/count', (req, res) => res.json({ count: users.length })); // used by admin stats

module.exports = router;
