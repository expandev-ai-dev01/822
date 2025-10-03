/**
 * @component Header
 * @summary Application header with navigation
 * @domain core
 * @type ui-component
 * @category navigation
 */

import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary-600">
            <Code2 className="w-6 h-6" />
            <span>Hello World Generator</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
