import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import InfoHero from '../components/layout/InfoHero';
import { WHATSAPP_ORDER } from '../data/contact';
import { BRANCHES } from '../data/locations';
import hallPhoto from '../assets/building-1.jpg';
import './InfoPages.css';

const HallReservation = () => (
  <div className="info-page">
    <InfoHero
      eyebrow="Our Services"
      title="Hall Reservation"
      lede="Take the room for the afternoon, and let us handle the food."
      photo={hallPhoto}
    />

    <div className="container info-body">
      <p>
        Both of our branches have space that can be set aside for a private
        gathering, with our kitchen right there — so the food arrives hot, and
        nobody has to organise catering separately.
      </p>

      <h2 className="info-h2">What people use the space for</h2>
      <ul className="info-list">
        <li>Birthdays, proposals and small family celebrations</li>
        <li>Baby showers and naming ceremonies</li>
        <li>Meetings, training sessions and team days</li>
        <li>Photo and video shoots</li>
        <li>Get-togethers that are too big for the house and too small for a venue</li>
      </ul>

      <h2 className="info-h2">Where</h2>
      <div className="outlet-grid">
        {BRANCHES.map((branch) => (
          <div className="outlet-card" key={branch.name}>
            <h3 className="outlet-name">{branch.name}</h3>
            <p className="outlet-row">{branch.address}</p>
            <a className="outlet-row" href={branch.phoneHref}>{branch.phone}</a>
          </div>
        ))}
      </div>

      <h2 className="info-h2">Reserving</h2>
      <p>
        The two rooms are not the same size, so the number of guests we can seat
        depends on which branch you choose and how you want it laid out. Message us
        with your date, your rough headcount and which branch suits you, and we will
        tell you what we can do and what it will cost.
      </p>

      <div className="info-cta">
        <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" size="lg">Reserve a space</Button>
        </a>
        <Link to="/outlet-locator">
          <Button variant="outline" size="lg">Find our branches</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default HallReservation;
