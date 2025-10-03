import { useState } from 'react';
import { Card } from '@/core/components/Card';
import { Button } from '@/core/components/Button';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import {
  LanguageSelector,
  CodeDisplay,
  CodeActions,
  useLanguages,
  useCodeGeneration,
} from '@/domain/helloWorld';
import type { Language } from '@/domain/helloWorld';

/**
 * @page HomePage
 * @summary Main page for Hello World code generation
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none
 *
 * @data
 * - Sources: Language API, Code Generation API
 * - Loading: Skeleton loading states
 * - Caching: 5 minutes stale time
 *
 * @userFlows
 * - Primary: Select language → Generate code → View/Download
 * - Error: Display error messages for API failures
 */
export const HomePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  // Fetch available languages
  const { languages, isLoading: isLoadingLanguages, error: languagesError } = useLanguages();

  // Code generation hook
  const { generatedCode, isGenerating, error: generateError, generateCode } = useCodeGeneration();

  /**
   * @handler handleLanguageSelect
   * @summary Updates selected language state
   */
  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId);
  };

  /**
   * @handler handleGenerateCode
   * @summary Triggers code generation for selected language
   */
  const handleGenerateCode = async () => {
    if (!selectedLanguage) return;
    await generateCode(selectedLanguage);
  };

  // Find selected language details
  const selectedLanguageDetails = languages.find((lang: Language) => lang.id === selectedLanguage);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello World Code Generator</h1>
        <p className="text-lg text-gray-600">
          Generate Hello World code in multiple programming languages
        </p>
      </div>

      <div className="space-y-6">
        {/* Language Selection Card */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Select Language</h2>

          {isLoadingLanguages ? (
            <LoadingSpinner size="medium" />
          ) : languagesError ? (
            <div className="text-red-600 text-center py-4">
              <p>Failed to load languages. Please try again.</p>
            </div>
          ) : (
            <LanguageSelector
              languages={languages}
              selectedLanguage={selectedLanguage}
              onLanguageSelect={handleLanguageSelect}
              disabled={isGenerating}
            />
          )}
        </Card>

        {/* Generate Button Card */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Generate Code</h2>
          <Button
            onClick={handleGenerateCode}
            disabled={!selectedLanguage || isGenerating}
            loading={isGenerating}
            variant="primary"
            size="large"
            className="w-full"
          >
            {isGenerating ? 'Generating...' : '🚀 Generate Hello World Code'}
          </Button>

          {generateError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                {generateError.message || 'Failed to generate code. Please try again.'}
              </p>
            </div>
          )}
        </Card>

        {/* Code Display Card */}
        {generatedCode && (
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 3: View & Download</h2>

            <CodeDisplay
              code={generatedCode.code}
              language={generatedCode.language}
              languageIdentifier={generatedCode.languageIdentifier}
              className="mb-4"
            />

            <CodeActions
              code={generatedCode.code}
              language={generatedCode.language}
              extension={selectedLanguageDetails?.extension || '.txt'}
            />
          </Card>
        )}

        {/* Empty State */}
        {!generatedCode && !isGenerating && (
          <Card>
            <div className="text-center text-gray-500 py-8">
              <p className="text-lg mb-2">👆 Select a language and generate your code</p>
              <p className="text-sm">Your generated code will appear here</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default HomePage;
