import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { helloWorldService } from '../../services/helloWorldService';
import type { UseCodeGenerationOptions, UseCodeGenerationReturn } from './types';
import type { GeneratedCode } from '../../types';

/**
 * @hook useCodeGeneration
 * @summary Manages code generation with state and error handling
 * @domain helloWorld
 * @type domain-hook
 * @category business-logic
 *
 * @param {UseCodeGenerationOptions} options - Hook configuration options
 * @returns {UseCodeGenerationReturn} Code generation state and actions
 *
 * @examples
 * ```tsx
 * const { generatedCode, isGenerating, generateCode } = useCodeGeneration({
 *   onSuccess: (data) => console.log('Code generated:', data)
 * });
 *
 * await generateCode('python');
 * ```
 */
export const useCodeGeneration = (
  options: UseCodeGenerationOptions = {}
): UseCodeGenerationReturn => {
  const [generatedCode, setGeneratedCode] = useState<GeneratedCode | null>(null);

  const mutation = useMutation({
    mutationFn: (selectedLanguage: string) => helloWorldService.generateCode({ selectedLanguage }),
    onSuccess: (data) => {
      setGeneratedCode(data);
      options.onSuccess?.(data);
    },
    onError: (error: Error) => {
      options.onError?.(error);
    },
  });

  const generateCode = async (selectedLanguage: string) => {
    await mutation.mutateAsync(selectedLanguage);
  };

  const reset = () => {
    setGeneratedCode(null);
    mutation.reset();
  };

  return {
    generatedCode,
    isGenerating: mutation.isPending,
    error: mutation.error as Error | null,
    generateCode,
    reset,
  };
};
