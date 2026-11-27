const request = require('supertest');
const app = require('../server');
test('contact form saves a message', async () => {
  await request(app).post('/api/contact').send({ name: 'A', email: 'a@t.com', message: 'Hi' }).expect(201);
  const res = await request(app).get('/api/contact/stats');
  expect(res.body.messages).toBe(1);
});
