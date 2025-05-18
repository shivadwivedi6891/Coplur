import express from 'express';
import { getFormData, updateFormData } from '../controllers/UserController.js';

const router = express.Router();

router.get('/', getFormData);
router.post('/', updateFormData);

export default router;