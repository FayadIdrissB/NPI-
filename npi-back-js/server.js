require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5005;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connexion MongoDB établie avec succès !');

    // Lancer le serveur seulement après connexion
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de connexion MongoDB :', err.message);
  });