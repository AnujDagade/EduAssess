import { Router } from 'express';
import { upload } from '../controllers/upload.controller.js';

const router = Router();

router.route('/upload').post(upload);

export default router;