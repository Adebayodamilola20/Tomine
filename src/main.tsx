import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { SITE_LOCKED, NotFound } from './gate';

createRoot(document.getElementById('root')!).render(
  <StrictMode>{SITE_LOCKED ? <NotFound /> : <App />}</StrictMode>,
);
