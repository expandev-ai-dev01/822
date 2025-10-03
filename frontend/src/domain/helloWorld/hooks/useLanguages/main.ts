import { useQuery } from '@tanstack/react-query';
import { helloWorldService } from '../../services/helloWorldService';
import type { UseLanguagesReturn } from './types';

/**
 * @hook useLanguages
 * @summary Fetches and manages the list of available programming languages
 * @domain helloWorld
 * @type domain-hook
 * @category data
 *
 * @returns {UseLanguagesReturn} Languages data, loading state, error, and refetch function
 *
 * @examples
 * ```tsx
 * const { languages, isLoading, error } = useLanguages();
 * ```
 */
export const useLanguages = (): UseLanguagesReturn => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['languages'],
    queryFn: () => helloWorldService.listLanguages(),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  return {
    languages: data || [],
    isLoading,
    error: error as Error | null,
    refetch,
  };
};
