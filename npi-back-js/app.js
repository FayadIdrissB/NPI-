const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact.routes');

const app = express();

app.use(cors({
  origin: 'https://npi-front.fly.dev',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(express.json());

app.get('/ping', (req, res) => res.send('pong'));

app.use('/api/contact', contactRoutes);

module.exports = app;