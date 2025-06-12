import app from './app';

export const startServer = () => {
  const PORT = process.env.PORT || 5005;

  app.listen(PORT, () => {
    console.log(`🚀 Serveur en ligne sur http://localhost:${PORT}`);
  });
};