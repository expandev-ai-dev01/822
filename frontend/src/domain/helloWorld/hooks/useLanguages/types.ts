import type { Language } from '../../types';

export type UseLanguagesReturn = {
  languages: Language[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};
