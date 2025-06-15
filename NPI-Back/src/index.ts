import { connectDB } from './config/db';
import { startServer } from './server';


console.log('🟢 Lancement du backend...');
(async () => {
  try {
    // Connexion à la base de données
    console.log('🟢 Lancement du backend...');
    await connectDB();

    // Lancement du serveur
    startServer();
  } catch (error) {
    console.error('❌ Erreur critique au démarrage :', error);
    process.exit(1);
  }
})();
