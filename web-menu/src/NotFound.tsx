import { useEffect } from 'react';

/**
 * The menu site's own copy of the 404.
 *
 * It is duplicated rather than imported from the main site on purpose: this is
 * a separate Vite project, and pulling a React component across the project
 * boundary means two copies of React in one bundle. The shared piece is the
 * SITE_LOCKED flag in data/siteLock.ts, which is plain TypeScript and travels
 * safely. Keep the markup here in step with src/gate.tsx if it ever changes.
 */
const SYSTEM_FONT =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';

export default function NotFound() {
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
