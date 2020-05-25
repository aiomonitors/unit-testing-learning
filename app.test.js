/* eslint-disable no-undef */
const request = require('supertest');
const { app } = require('./app');

test('get date', async () => {
    const res = await request(app).get('/date');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ date: new Date().toJSON().slice(0, 10) });
});
