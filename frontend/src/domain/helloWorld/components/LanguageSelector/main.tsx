import { cn } from '@/core/utils/cn';
import type { LanguageSelectorProps } from './types';

/**
 * @component LanguageSelector
 * @summary Dropdown component for selecting programming language
 * @domain helloWorld
 * @type domain-component
 * @category form
 *
 * @props
 * @param {Language[]} languages - Array of available languages
 * @param {string | null} selectedLanguage - Currently selected language ID
 * @param {Function} onLanguageSelect - Callback when language is selected
 * @param {boolean} disabled - Whether selector is disabled
 *
 * @accessibility
 * - ARIA: Proper label and select semantics
 * - Keyboard: Native select keyboard navigation
 *
 * @examples
 * ```tsx
 * <LanguageSelector
 *   languages={languages}
 *   selectedLanguage={selected}
 *   onLanguageSelect={handleSelect}
 * />
 * ```
 */
export const LanguageSelector = ({
  languages,
  selectedLanguage,
  onLanguageSelect,
  disabled = false,
  className,
}: LanguageSelectorProps) => {
  return (
    <div className={cn('w-full', className)}>
      <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 mb-2">
        Select Programming Language
      </label>
      <select
        id="language-select"
        value={selectedLanguage || ''}
        onChange={(e) => onLanguageSelect(e.target.value)}
        disabled={disabled}
        className={cn(
          'w-full px-4 py-2 border border-gray-300 rounded-lg',
          'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
          'disabled:bg-gray-100 disabled:cursor-not-allowed',
          'text-gray-900 bg-white'
        )}
      >
        <option value="" disabled>
          Choose a language...
        </option>
        {languages.map((language) => (
          <option key={language.id} value={language.id}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};
