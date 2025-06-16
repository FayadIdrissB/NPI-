import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.options('*', cors());

app.use(express.json());

// Routes

app.use('/api', contactRoutes);

// Debug : afficher toutes les routes chargées
if (app._router && app._router.stack) {
  app._router.stack.forEach((middleware: any) => {
    if (middleware.route) {
      console.log("🧪 RESEND_API_KEY:", process.env.RESEND_API_KEY);
      console.log(`🛣️ Route: ${middleware.route.path}`);
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach((handler: any) => {
        console.log(`🛣️ Route (child): ${handler.route?.path}`);
      });
    }
  });
}

app.get('/', (req, res) => {
  res.send('🚀 Backend en ligne !');
});

export default app;