import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import InfoHero from '../components/layout/InfoHero';
import { WHATSAPP_ORDER } from '../data/contact';
import outdoorPhoto from '../assets/path4.jpg';
import './InfoPages.css';

const OutdoorCatering = () => (
  <div className="info-page">
    <InfoHero
      eyebrow="Our Services"
      title="Outdoor Catering"
      lede="Your celebration, cooked by the kitchen your family already knows."
      photo={outdoorPhoto}
    />

    <div className="container info-body">
      <p>
        Weddings, naming ceremonies, birthdays, house-warmings, church and community
        events — we cater across Lagos, and we bring the food our regulars come back
        for rather than something generic.
      </p>
      <p>
        We have been cooking in Ikorodu and Ijede since 2017, so we understand how a
        Nigerian party actually runs: guests arrive in waves, the count grows, and
        the food has to still be hot for the people who came late.
      </p>

      <h2 className="info-h2">What we cater</h2>
      <ul className="info-list">
        <li>Party jollof and fried rice, cooked in quantity</li>
        <li>Swallow and soup — pounded yam, semo, eba, efo-riro, egusi</li>
        <li>Grilled and fried proteins — chicken, turkey, croaker fish, cow leg</li>
        <li>Small chops and pastries for arrival and for the goody bags</li>
        <li>Bread and baked goods straight from our own ovens</li>
        <li>Soft drinks, malt, water and parfait</li>
      </ul>

      <h2 className="info-h2">Before you book</h2>
      <p>
        Tell us the date, the venue, roughly how many guests you are expecting and
        what you would like on the table. We will put a quote together for you.
        Because everything is cooked fresh, the sooner you talk to us the better —
        especially for weekend dates, which fill up first.
      </p>

      <div className="info-cta">
        <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" size="lg">Talk to us about your event</Button>
        </a>
        <Link to="/menu">
          <Button variant="outline" size="lg">See the full menu</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default OutdoorCatering;
