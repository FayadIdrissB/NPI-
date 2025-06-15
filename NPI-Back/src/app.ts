import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://npi-front.fly.dev',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}));
app.options('*', cors());

app.use(express.json());

// Routes
app.use('/api', contactRoutes);

export default app;