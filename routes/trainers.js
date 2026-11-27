// MEMBER 4: Trainers + BMI (the BMI endpoint is mounted at /api/trainers/bmi)
const express = require('express');
const router = express.Router();

const trainers = [
  { id: 1, name: 'Omar Hassan', speciality: 'Strength training' },
  { id: 2, name: 'Salma Adel', speciality: 'Yoga & mobility' },
  { id: 3, name: 'Karim Nabil', speciality: 'Cardio & weight loss' }
];

router.get('/', (req, res) => res.json(trainers));

router.post('/bmi', (req, res) => {
  const weight = Number(req.body.weightKg);
  const height = Number(req.body.heightCm) / 100;
  if (!weight || !height || weight <= 0 || height <= 0)
    return res.status(400).json({ error: 'weightKg and heightCm must be positive numbers' });
  const bmi = +(weight / (height * height)).toFixed(1);
  const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
  res.json({ bmi, category });
});

module.exports = router;
