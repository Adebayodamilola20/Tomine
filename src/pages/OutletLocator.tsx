import { MapPin, Phone, Navigation, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import InfoHero from '../components/layout/InfoHero';
import { BRANCHES } from '../data/locations';
import { WHATSAPP_ORDER } from '../data/contact';
import locatorPhoto from '../assets/building-2.jpg';
import './InfoPages.css';

const mapsUrl = (name: string, address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${address}`)}`;

const OutletLocator = () => (
  <div className="info-page">
    <InfoHero
      eyebrow="Find Us"
      title="Outlet Locator"
      lede="Two branches in Lagos. Both bake and cook the same menu, every day."
      photo={locatorPhoto}
    />

    <div className="container info-body">
      <div className="outlet-grid">
        {BRANCHES.map((branch) => (
          <div className="outlet-card" key={branch.name}>
            <h2 className="outlet-name">{branch.name}</h2>

            <p className="outlet-row">
              <MapPin size={18} />
              <span>{branch.address}</span>
            </p>

            <a className="outlet-row" href={branch.phoneHref}>
              <Phone size={18} />
              <span>{branch.phone}</span>
            </a>

            <div className="outlet-actions">
              <a
                href={mapsUrl(branch.name, branch.address)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="icon-btn">
                  <Navigation size={16} /> Directions
                </Button>
              </a>
              <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="icon-btn">
                  <MessageCircle size={16} /> Order
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OutletLocator;
