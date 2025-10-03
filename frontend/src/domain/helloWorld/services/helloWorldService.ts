import { authenticatedClient } from '@/core/lib/api';
import type { Language, GeneratedCode, CodeGenerateParams } from '../types';

/**
 * @service helloWorldService
 * @summary Hello World service for authenticated endpoints
 * @domain helloWorld
 * @type rest-service
 * @apiContext internal
 *
 * @description
 * All methods in this service use authenticatedClient which targets:
 * /api/v1/internal/language/...
 *
 * Authentication token is automatically added by interceptor.
 */
export const helloWorldService = {
  /**
   * @endpoint GET /api/v1/internal/language
   * @summary Fetches list of available programming languages
   */
  async listLanguages(): Promise<Language[]> {
    const response = await authenticatedClient.get('/language');
    return response.data.data;
  },

  /**
   * @endpoint POST /api/v1/internal/language/generate
   * @summary Generates Hello World code for selected language
   */
  async generateCode(params: CodeGenerateParams): Promise<GeneratedCode> {
    const response = await authenticatedClient.post('/language/generate', params);
    return response.data.data;
  },
};
