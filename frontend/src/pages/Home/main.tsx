/**
 * @page HomePage
 * @summary Main landing page for the Hello World Generator application
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none
 */
export const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Hello World Generator</h1>
        <p className="text-lg text-gray-600">
          Generate Hello World code in multiple programming languages
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center text-gray-500">
          <p className="text-lg mb-4">🚀 Ready to generate your first Hello World?</p>
          <p className="text-sm">Select a programming language and get started!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
