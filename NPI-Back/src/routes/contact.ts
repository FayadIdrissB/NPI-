import { Router } from 'express';
import { handleContact } from '../controller/contact';

const router = Router();

// Route POST pour soumettre le formulaire de contact
router.post('/contact', handleContact);

// Route GET pour tester la route de contact
router.get('/ping', (req, res) => {
  res.send('pong');
});

console.log("✔ contactRoutes loaded");
export default router;