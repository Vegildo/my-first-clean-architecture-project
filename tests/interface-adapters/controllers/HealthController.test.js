//tests/interface-adapters/controllers/HealthController.test.js
// Teste usando jest e supertest para o endpoint /health

const express = require('express');
const request = require('supertest');
const healthRouter = require('../../../src/interface-adapters/controllers/HealthController');

const app = express();
app.use('/', healthRouter); // Monta o router no app

describe('GET /health', () => {
    it('should return 200', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: 'UP' }); // Adiciona validação para o body
    });
});


