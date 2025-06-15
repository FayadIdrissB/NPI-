import { Router } from 'express';
import { handleContact } from '../controller/contact';


const router = Router();

router.get('/', (req, res) => {
  res.send('✅ Contact route OK');
});

router.post('/contact', handleContact);

export default router;