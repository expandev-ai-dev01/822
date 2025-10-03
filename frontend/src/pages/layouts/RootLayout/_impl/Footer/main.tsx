/**
 * @component Footer
 * @summary Application footer
 * @domain core
 * @type ui-component
 * @category layout
 */

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Hello World Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
