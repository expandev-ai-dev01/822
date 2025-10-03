import type { Language } from '../../types';

export type LanguageSelectorProps = {
  languages: Language[];
  selectedLanguage: string | null;
  onLanguageSelect: (languageId: string) => void;
  disabled?: boolean;
  className?: string;
};
