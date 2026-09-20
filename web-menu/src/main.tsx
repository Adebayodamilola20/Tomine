import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { SITE_LOCKED, NotFound } from '@tomine/gate';

/* --- 404 gate: ON -------------------------------------------------------
 * The flag lives in the main site at src/gate.tsx and is read here through
 * the @tomine alias, so one edit covers both sites. Set SITE_LOCKED to
 * false to hand everything back.
 *
 *   <StrictMode><App /></StrictMode>
 * ---------------------------------------------------------------------- */

createRoot(document.getElementById('root')!).render(
  <StrictMode>{SITE_LOCKED ? <NotFound /> : <App />}</StrictMode>
);
