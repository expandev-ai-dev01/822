/**
 * @page HomePage
 * @summary Main landing page for Hello World generator
 * @domain core
 * @type landing-page
 * @category public
 */

import { WelcomeSection } from './_impl/WelcomeSection';

export const HomePage = () => {
  return (
    <div className="home-page">
      <WelcomeSection />
    </div>
  );
};

export default HomePage;
