const request = require('supertest');
const app = require('./app');

test('GET / return message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Prueba de CI/CD');
});
