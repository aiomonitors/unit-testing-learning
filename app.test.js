const { app } = require('./app');
const request = require('supertest');

test('get date', async () => {
    const res = await request(app).get('/date');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ date: new Date().toJSON().slice(0,10) });
})