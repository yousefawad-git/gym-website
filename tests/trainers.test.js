const request = require('supertest');
const app = require('../server');
test('BMI is calculated correctly', async () => {
  const res = await request(app).post('/api/trainers/bmi').send({ weightKg: 70, heightCm: 175 });
  expect(res.body.bmi).toBe(22.9);
  expect(res.body.category).toBe('Normal');
});
