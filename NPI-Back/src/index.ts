import { connectDB } from './config/db';
import { startServer } from './server';



(async () => {
  try {
    // Connexion à la base de données
    await connectDB();

    // Lancement du serveur
    startServer();
  } catch (error) {
    console.error('❌ Erreur critique au démarrage :', error);
    process.exit(1);
  }
})();
