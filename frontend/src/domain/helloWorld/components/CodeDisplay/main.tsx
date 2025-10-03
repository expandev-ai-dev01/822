import { useEffect, useRef } from 'react';
import { cn } from '@/core/utils/cn';
import type { CodeDisplayProps } from './types';

/**
 * @component CodeDisplay
 * @summary Displays generated code with syntax highlighting
 * @domain helloWorld
 * @type domain-component
 * @category display
 *
 * @props
 * @param {string} code - Generated code content
 * @param {string} language - Language display name
 * @param {string} languageIdentifier - Language identifier for highlighting
 *
 * @security
 * - XSS Prevention: Code is rendered as text, not HTML
 *
 * @accessibility
 * - ARIA: Proper code block semantics
 * - Screen Reader: Code content is readable
 *
 * @examples
 * ```tsx
 * <CodeDisplay
 *   code={generatedCode.code}
 *   language={generatedCode.language}
 *   languageIdentifier={generatedCode.languageIdentifier}
 * />
 * ```
 */
export const CodeDisplay = ({
  code,
  language,
  languageIdentifier,
  className,
}: CodeDisplayProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Future: Integrate syntax highlighting library here
    // Example: Prism.highlightElement(codeRef.current);
  }, [code, languageIdentifier]);

  return (
    <div className={cn('w-full', className)}>
      <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-300">{language}</span>
        <span className="text-xs text-gray-400">{languageIdentifier}</span>
      </div>
      <div className="bg-gray-900 rounded-b-lg p-4 overflow-x-auto">
        <pre className="text-sm">
          <code
            ref={codeRef}
            className="text-gray-100 font-mono"
            data-language={languageIdentifier}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};
