import { useEffect } from 'react';

/**
 * Front-door gate for both sites.
 *
 * While this is true, the main site and the standalone menu site both render a
 * plain 404 instead of the real thing — a visitor reads it as "there is nothing
 * at this address" rather than "this site is switched off".
 *
 * To bring both sites back: change this to false, rebuild, deploy. That is the
 * only edit needed — web-menu reads this same file through the @tomine alias.
 */
export const SITE_LOCKED = true;

/**
 * Both sites style h1/h2 globally, and a rule that targets the element beats
 * anything inherited from a parent — so the font has to be set on each node
 * here or the 404 comes out in the restaurant's serif and looks designed.
 */
const SYSTEM_FONT =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';

/**
 * Deliberately plain. This copies the stock hosting 404 — system font, no
 * colour, no logo — because anything branded would read as "their site is
 * broken" instead of "this address does not exist".
 */
export function NotFound() {
  useEffect(() => {
    document.title = '404: This page could not be found.';

    /* The tab icon and the share preview would otherwise still say Tomine. */
    document
      .querySelectorAll(
        'link[rel="icon"], link[rel="apple-touch-icon"], meta[name="description"], meta[property^="og:"]'
      )
      .forEach((el) => el.remove());

    const { style } = document.body;
    const previous = { margin: style.margin, background: style.background };
    style.margin = '0';
    style.background = '#fff';

    return () => {
      style.margin = previous.margin;
      style.background = previous.background;
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: 0,
        background: '#fff',
        color: '#000',
        fontFamily: SYSTEM_FONT,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1
          style={{
            display: 'inline-block',
            margin: '0 20px 0 0',
            paddingRight: 23,
            fontFamily: SYSTEM_FONT,
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: 'normal',
            verticalAlign: 'top',
            lineHeight: '49px',
            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
          }}
        >
          404
        </h1>
        <div style={{ display: 'inline-block' }}>
          <h2
            style={{
              margin: 0,
              fontFamily: SYSTEM_FONT,
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: 'normal',
              lineHeight: '49px',
            }}
          >
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
}
