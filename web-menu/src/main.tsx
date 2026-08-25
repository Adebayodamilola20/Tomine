import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { SITE_LOCKED, NotFound } from '@tomine/gate';

createRoot(document.getElementById('root')!).render(
  <StrictMode>{SITE_LOCKED ? <NotFound /> : <App />}</StrictMode>
);
