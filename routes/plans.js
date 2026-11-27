// MEMBER 2: Membership plans
const express = require('express');
const router = express.Router();

const plans = [
  { id: 1, name: 'Monthly', price: 30, months: 1 },
  { id: 2, name: 'Quarterly', price: 80, months: 3 },
  { id: 3, name: 'Yearly', price: 280, months: 12 }
];
const subscriptions = [];

router.get('/', (req, res) => res.json(plans));

router.post('/subscribe', (req, res) => {
  const { email, planId } = req.body;
  const plan = plans.find(p => p.id === Number(planId));
  if (!email || !plan) return res.status(400).json({ error: 'email and valid planId required' });
  subscriptions.push({ email, planId: plan.id });
  res.status(201).json({ message: `Subscribed to ${plan.name}` });
});

router.get('/subscriptions/count', (req, res) => res.json({ count: subscriptions.length }));

module.exports = router;
