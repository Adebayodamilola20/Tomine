import { BRANCHES, CONTACT, MAIN_SITE_URL } from '../config';
import logoLight from '@tomine/assets/logo-light.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <img className="footer-logo" src={logoLight} alt="Tomine Restaurant" />
          <p className="footer-city">Two kitchens in Lagos</p>
        </div>

        <div className="footer-branches">
          {BRANCHES.map((branch) => (
            <div className="footer-branch" key={branch.name}>
              <span className="footer-label">{branch.name}</span>
              <address>{branch.address}</address>
              <a href={branch.phoneHref}>{branch.phone}</a>
            </div>
          ))}
        </div>

        <div className="footer-contact">
          <p>
            <span className="footer-label">WhatsApp</span>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
              Message us
            </a>
          </p>
          <p>
            <span className="footer-label">Also on</span>
            <a href={CONTACT.whatsappAlt} target="_blank" rel="noreferrer">
              {CONTACT.whatsappAltLabel}
            </a>
          </p>
          <p>
            <span className="footer-label">Email</span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>

        <div className="footer-actions">
          <a className="footer-cta" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            Place an order
          </a>
          <a className="footer-link" href={MAIN_SITE_URL} target="_blank" rel="noreferrer">
            Visit the main site ↗
          </a>
        </div>
      </div>

      <p className="footer-fineprint">
        Prices in Naira and subject to change. © {new Date().getFullYear()} Tomine.
      </p>
    </footer>
  );
}
