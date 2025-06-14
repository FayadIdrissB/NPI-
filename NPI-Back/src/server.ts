import app from './app';

export const startServer = () => {
  const PORT = Number(process.env.PORT) || 5005;

  app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Serveur en ligne sur http://localhost:${PORT}`);
});
};