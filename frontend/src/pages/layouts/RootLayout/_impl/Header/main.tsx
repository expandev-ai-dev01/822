import { Link } from 'react-router-dom';

/**
 * @component Header
 * @summary Application header with branding and navigation
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Hello World Generator</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
