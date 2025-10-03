import { useCallback } from 'react';
import { Button } from '@/core/components/Button';
import { cn } from '@/core/utils/cn';
import type { CodeActionsProps } from './types';

/**
 * @component CodeActions
 * @summary Action buttons for generated code (download)
 * @domain helloWorld
 * @type domain-component
 * @category form
 *
 * @props
 * @param {string} code - Code content to download
 * @param {string} language - Language name
 * @param {string} extension - File extension
 * @param {boolean} disabled - Whether actions are disabled
 *
 * @examples
 * ```tsx
 * <CodeActions
 *   code={generatedCode.code}
 *   language={generatedCode.language}
 *   extension=".py"
 *   disabled={!generatedCode}
 * />
 * ```
 */
export const CodeActions = ({ code, extension, disabled = false, className }: CodeActionsProps) => {
  /**
   * @handler handleDownload
   * @summary Creates and downloads code file
   * @sideEffect Creates temporary download link and triggers download
   */
  const handleDownload = useCallback(() => {
    // Create Blob from code content
    const blob = new Blob([code], { type: 'text/plain' });

    // Create temporary download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `helloworld${extension}`;

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [code, extension]);

  return (
    <div className={cn('flex gap-3', className)}>
      <Button onClick={handleDownload} disabled={disabled} variant="primary" size="medium">
        📥 Download Code
      </Button>
    </div>
  );
};
