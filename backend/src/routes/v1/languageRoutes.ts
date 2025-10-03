import { Router } from 'express';
import * as languageController from '@/api/v1/internal/language/controller';

const router = Router();

/**
 * @route GET /api/v1/internal/language
 * @description List all available programming languages
 * @access Internal (authenticated)
 */
router.get('/', languageController.listHandler);

/**
 * @route POST /api/v1/internal/language/generate
 * @description Generate Hello World code for selected language
 * @access Internal (authenticated)
 */
router.post('/generate', languageController.generateHandler);

export default router;
