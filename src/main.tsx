import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { SITE_LOCKED, NotFound } from './gate';

/* --- 404 gate: ON -------------------------------------------------------
 * Both sites render a plain 404 while SITE_LOCKED is true in src/gate.tsx.
 * To hand the site back, set that flag to false — one edit covers both,
 * because web-menu reads the same file through the @tomine alias. The
 * unlocked render is kept below so switching back is a two-line change.
 *
 *   <StrictMode><App /></StrictMode>
 * ---------------------------------------------------------------------- */

createRoot(document.getElementById('root')!).render(
  <StrictMode>{SITE_LOCKED ? <NotFound /> : <App />}</StrictMode>,
);
