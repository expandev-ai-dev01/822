/**
 * @component App
 * @summary Root application component with all providers
 * @domain core
 * @type root-component
 * @category application
 */

import { AppProviders } from './providers';
import { AppRouter } from './router';

export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};
