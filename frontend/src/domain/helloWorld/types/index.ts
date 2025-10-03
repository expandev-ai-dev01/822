/**
 * @types HelloWorld
 * @summary Type definitions for Hello World domain
 * @domain helloWorld
 * @category types
 */

export type Language = {
  id: string;
  name: string;
  extension: string;
  identifier: string;
};

export type GeneratedCode = {
  code: string;
  language: string;
  languageIdentifier: string;
};

export type LanguageListParams = Record<string, never>;

export type CodeGenerateParams = {
  selectedLanguage: string;
};
