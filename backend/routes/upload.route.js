import { Router } from 'express';
import { upload } from '../controllers/upload.controller.js';
import { uploadedFile } from '../middlewares/multer.middleware.js';

const router = Router();

router.route('/upload').post(uploadedFile.single('file'),upload);

export default router;