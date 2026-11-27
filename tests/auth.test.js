const request = require('supertest');
const app = require('../server');
test('register then login works', async () => {
  await request(app).post('/api/auth/register').send({ name: 'A', email: 'a@test.com', password: '1234' }).expect(201);
  await request(app).post('/api/auth/login').send({ email: 'a@test.com', password: '1234' }).expect(200);
  await request(app).post('/api/auth/login').send({ email: 'a@test.com', password: 'bad' }).expect(401);
});
