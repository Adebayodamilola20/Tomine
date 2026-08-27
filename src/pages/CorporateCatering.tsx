import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import InfoHero from '../components/layout/InfoHero';
import { WHATSAPP_ORDER } from '../data/contact';
import cateringPhoto from '../assets/path1.jpg';
import './InfoPages.css';

const CorporateCatering = () => (
  <div className="info-page">
    <InfoHero
      eyebrow="Our Services"
      title="Corporate Catering"
      lede="Feed the whole office without anybody having to leave their desk."
      photo={cateringPhoto}
    />

    <div className="container info-body">
      <p>
        Meetings, training days, staff appreciation, end-of-year parties — we cook the
        same food we serve in our dining rooms in Ijede and Ikorodu, and bring it to
        your office in Lagos.
      </p>
      <p>
        Everything is cooked fresh on the day. We have been baking and cooking since
        2017, and a corporate order is handled by the same kitchen and the same hands
        as everything else on our menu.
      </p>

      <h2 className="info-h2">How it can be served</h2>
      <ul className="info-list">
        <li>Packaged individually, so each person has their own plate ready to go</li>
        <li>Served as a spread your team helps themselves from</li>
        <li>Split across several drop-offs if your day runs in sessions</li>
      </ul>

      <h2 className="info-h2">What we usually cook for offices</h2>
      <ul className="info-list">
        <li>Jollof rice, fried rice, and white rice with beans</li>
        <li>Swallow and soup — pounded yam, semo, eba, with efo-riro or egusi</li>
        <li>Proteins — chicken, turkey, croaker fish, cow leg, assorted meat</li>
        <li>Small chops and pastries — meat pie, chicken pie, doughnuts, scotch eggs</li>
        <li>Drinks, water and parfait to finish</li>
      </ul>

      <h2 className="info-h2">Placing an order</h2>
      <p>
        Message us on WhatsApp with your date, your headcount and roughly what you
        would like served, and we will come back to you with a quote. The earlier you
        tell us, the more we can do — large orders need a little notice so we can
        shop and prep properly.
      </p>

      <div className="info-cta">
        <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" size="lg">Get a catering quote</Button>
        </a>
        <Link to="/menu">
          <Button variant="outline" size="lg">See the full menu</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default CorporateCatering;
