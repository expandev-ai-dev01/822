import { Language, GeneratedCode, LanguageListParams, CodeGenerationParams } from './languageTypes';
import * as fs from 'fs';
import * as path from 'path';

/**
 * @summary
 * In-memory cache for language list to ensure fast response times
 */
let languagesCache: Language[] | null = null;

/**
 * @summary
 * In-memory cache for code templates to ensure fast generation
 */
const templatesCache: Map<string, string> = new Map();

/**
 * @summary
 * Retrieves the list of available programming languages from configuration
 *
 * @function languageList
 * @module language
 *
 * @param {LanguageListParams} parameters - Account and user identifiers
 *
 * @returns {Promise<Language[]>} Array of available languages
 *
 * @throws {Error} When configuration file cannot be read
 *
 * @example
 * const languages = await languageList({ idAccount: 1, idUser: 1 });
 */
export async function languageList(parameters: LanguageListParams): Promise<Language[]> {
  /**
   * @performance Use cached data when available
   */
  if (languagesCache) {
    return languagesCache;
  }

  try {
    const configPath = path.join(process.cwd(), 'config', 'languages.json');
    const configData = fs.readFileSync(configPath, 'utf-8');
    const languages: Language[] = JSON.parse(configData);

    /**
     * @important Cache result for future requests
     */
    languagesCache = languages;

    return languages;
  } catch (error: any) {
    throw new Error('failedToLoadLanguages');
  }
}

/**
 * @summary
 * Generates Hello World code for the selected programming language
 *
 * @function codeGenerate
 * @module language
 *
 * @param {CodeGenerationParams} parameters - Account, user, and language selection
 *
 * @returns {Promise<GeneratedCode>} Generated code with language information
 *
 * @throws {Error} When language is not supported or template not found
 *
 * @example
 * const code = await codeGenerate({
 *   idAccount: 1,
 *   idUser: 1,
 *   selectedLanguage: 'python'
 * });
 */
export async function codeGenerate(parameters: CodeGenerationParams): Promise<GeneratedCode> {
  const { selectedLanguage } = parameters;

  /**
   * @validation Ensure selected language is supported
   * @throw {Error}
   */
  const languages = await languageList({
    idAccount: parameters.idAccount,
    idUser: parameters.idUser,
  });

  const language = languages.find((lang) => lang.id === selectedLanguage);

  if (!language) {
    throw new Error('languageNotSupported');
  }

  /**
   * @performance Use cached template when available
   */
  let template = templatesCache.get(selectedLanguage);

  if (!template) {
    try {
      const templatePath = path.join(process.cwd(), 'templates', `${selectedLanguage}.txt`);
      template = fs.readFileSync(templatePath, 'utf-8');

      /**
       * @important Cache template for future requests
       */
      templatesCache.set(selectedLanguage, template);
    } catch (error: any) {
      throw new Error('templateNotFound');
    }
  }

  return {
    code: template,
    language: language.name,
    languageIdentifier: language.identifier,
  };
}
