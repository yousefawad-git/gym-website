// MEMBER 3: Class booking
const express = require('express');
const router = express.Router();

const classes = [
  { id: 1, name: 'Yoga', time: 'Mon 18:00', capacity: 2, booked: [] },
  { id: 2, name: 'Cardio', time: 'Wed 19:00', capacity: 15, booked: [] },
  { id: 3, name: 'Strength', time: 'Fri 17:00', capacity: 10, booked: [] }
];

router.get('/', (req, res) =>
  res.json(classes.map(c => ({ id: c.id, name: c.name, time: c.time, capacity: c.capacity, spotsLeft: c.capacity - c.booked.length })))
);

router.post('/book', (req, res) => {
  const { email, classId } = req.body;
  const cls = classes.find(c => c.id === Number(classId));
  if (!email || !cls) return res.status(400).json({ error: 'email and valid classId required' });
  if (cls.booked.includes(email)) return res.status(409).json({ error: 'Already booked' });
  if (cls.booked.length >= cls.capacity) return res.status(409).json({ error: 'Class is full' });
  cls.booked.push(email);
  res.status(201).json({ message: `Booked ${cls.name}` });
});

router.get('/bookings/count', (req, res) =>
  res.json({ count: classes.reduce((n, c) => n + c.booked.length, 0) })
);

module.exports = router;
