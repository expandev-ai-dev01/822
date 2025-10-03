/**
 * @module helloWorld
 * @summary Hello World code generation domain module
 * @domain functional
 * @dependencies React, TanStack Query, Axios
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2025-01-15
 */

// Domain public exports - Components
export * from './components/LanguageSelector';
export * from './components/CodeDisplay';
export * from './components/CodeActions';

// Domain public exports - Hooks
export * from './hooks/useLanguages';
export * from './hooks/useCodeGeneration';

// Domain public exports - Services
export * from './services/helloWorldService';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'helloWorld',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['LanguageSelector', 'CodeDisplay', 'CodeActions'],
  publicHooks: ['useLanguages', 'useCodeGeneration'],
  publicServices: ['helloWorldService'],
  dependencies: {
    internal: ['@/core/components', '@/core/lib/api'],
    external: ['react', '@tanstack/react-query', 'axios'],
    domains: [],
  },
  exports: {
    components: ['LanguageSelector', 'CodeDisplay', 'CodeActions'],
    hooks: ['useLanguages', 'useCodeGeneration'],
    services: ['helloWorldService'],
    types: ['Language', 'GeneratedCode', 'LanguageListParams', 'CodeGenerateParams'],
  },
} as const;
