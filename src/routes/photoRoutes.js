import express from 'express';
import { createPhotoWithCaption, editCaption } from '../controllers/photoController.js';
import { verifyJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/photos', verifyJWT, createPhotoWithCaption);
router.put('/photos/:id/caption', verifyJWT, editCaption);

export default router;
