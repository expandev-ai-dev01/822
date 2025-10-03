/**
 * @module main
 * @summary Application entry point with providers and routing setup
 * @type application-entry
 * @category core
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import '@/assets/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
