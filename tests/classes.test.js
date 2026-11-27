const request = require('supertest');
const app = require('../server');
test('class booking stops at capacity', async () => {
  await request(app).post('/api/classes/book').send({ email: 'x@t.com', classId: 1 }).expect(201);
  await request(app).post('/api/classes/book').send({ email: 'y@t.com', classId: 1 }).expect(201);
  await request(app).post('/api/classes/book').send({ email: 'z@t.com', classId: 1 }).expect(409);
});
