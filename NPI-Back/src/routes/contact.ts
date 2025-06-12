import { Router } from 'express';
import { handleContact } from '../controller/contact';

const router = Router();

router.post('/contact', handleContact);

export default router;