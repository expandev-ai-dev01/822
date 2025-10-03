/**
 * @component WelcomeSection
 * @summary Welcome section with application introduction
 * @domain core
 * @type ui-component
 * @category display
 */

import { Code2, Download, Eye, Languages } from 'lucide-react';

export const WelcomeSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Hello World Generator</h1>
        <p className="text-xl text-gray-600">
          Generate Hello World code in multiple programming languages instantly
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <FeatureCard
          icon={<Languages className="w-8 h-8" />}
          title="Language Selection"
          description="Choose from various programming languages"
        />
        <FeatureCard
          icon={<Code2 className="w-8 h-8" />}
          title="Code Generation"
          description="Automatically generate Hello World code"
        />
        <FeatureCard
          icon={<Eye className="w-8 h-8" />}
          title="Code Preview"
          description="View generated code with syntax highlighting"
        />
        <FeatureCard
          icon={<Download className="w-8 h-8" />}
          title="Download Code"
          description="Download code in appropriate file format"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-6">
          Select a programming language and generate your Hello World code
        </p>
        <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-primary-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};
