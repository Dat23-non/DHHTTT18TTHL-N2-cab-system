const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const authMiddleware = require('./auth.middleware');

const app = express();
app.use(express.json());

// Proxy to auth
app.use('/auth', createProxyMiddleware({ target: 'http://auth:3001', changeOrigin: true }));

// Protected routes (example for booking)
app.use('/booking', authMiddleware, createProxyMiddleware({ target: 'http://booking:3002', changeOrigin: true }));

app.listen(3000, () => console.log('Gateway on 3000'));