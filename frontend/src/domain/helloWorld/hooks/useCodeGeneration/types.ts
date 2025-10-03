import type { GeneratedCode } from '../../types';

export type UseCodeGenerationOptions = {
  onSuccess?: (data: GeneratedCode) => void;
  onError?: (error: Error) => void;
};

export type UseCodeGenerationReturn = {
  generatedCode: GeneratedCode | null;
  isGenerating: boolean;
  error: Error | null;
  generateCode: (selectedLanguage: string) => Promise<void>;
  reset: () => void;
};
