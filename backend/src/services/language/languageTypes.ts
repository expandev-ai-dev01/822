/**
 * @types Language
 * @summary Type definitions for language service
 * @domain language
 * @category types
 */

export interface Language {
  id: string;
  name: string;
  extension: string;
  identifier: string;
}

export interface GeneratedCode {
  code: string;
  language: string;
  languageIdentifier: string;
}

export interface LanguageListParams {
  idAccount: number;
  idUser: number;
}

export interface CodeGenerationParams {
  idAccount: number;
  idUser: number;
  selectedLanguage: string;
}
