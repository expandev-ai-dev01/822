import { Router } from 'express';
import languageRoutes from './languageRoutes';

const router = Router();

// Language routes - /api/v1/internal/language
router.use('/language', languageRoutes);

export default router;
