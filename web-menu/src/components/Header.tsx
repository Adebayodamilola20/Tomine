import { useEffect, useState } from 'react';
import { MAIN_SITE_URL } from '../config';
import { slugify } from '../utils';
import logoMark from '@tomine/assets/logo-mark.png';

interface HeaderProps {
  sections: string[];
  activeSection: string;
}

export default function Header({ sections, activeSection }: HeaderProps) {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${lifted ? ' is-lifted' : ''}`}>
      <a className="skip-link" href="#menu">
        Skip to the menu
      </a>

      <div className="site-header-inner">
        <a className="wordmark" href="#top" aria-label="Tomine Restaurant — top of the menu">
          <img className="wordmark-mark" src={logoMark} alt="" />
          <span className="wordmark-text">Tomine</span>
          <span className="wordmark-sub">The Menu</span>
        </a>

        <nav className="section-nav" aria-label="Menu sections">
          {sections.map((section) => {
            const id = slugify(section);
            return (
              <a
                key={section}
                href={`#${id}`}
                className={`section-nav-link${activeSection === id ? ' is-active' : ''}`}
                aria-current={activeSection === id ? 'true' : undefined}
              >
                {section}
              </a>
            );
          })}
        </nav>

        <a className="header-cta" href={MAIN_SITE_URL} target="_blank" rel="noreferrer">
          Main site
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
