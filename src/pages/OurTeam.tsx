import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import InfoHero from '../components/layout/InfoHero';
import { TEAM } from '../data/team';
import { WHATSAPP_ORDER } from '../data/contact';
import teamPhoto from '../assets/building-1.jpg';
import './InfoPages.css';

const OurTeam = () => (
  <div className="info-page">
    <InfoHero
      eyebrow="Who We Are"
      title="Our Team"
      lede="The bakers, cooks and faces behind the counter at Ijede and Ikorodu."
      photo={teamPhoto}
    />

    <div className="container info-body">
      <p>
        Tomine has been family-run since 2017. The same people who opened the ovens
        that first year are still the ones deciding what goes on the plate — which is
        why the jollof tastes the same in Ijede as it does in Ikorodu.
      </p>

      {TEAM.length > 0 ? (
        <div className="team-grid">
          {TEAM.map((member) => (
            <div className="team-card" key={member.name}>
              {member.photo && (
                <img className="team-photo" src={member.photo} alt={member.name} loading="lazy" />
              )}
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      ) : (
        /* No invented names or stock headshots — the real ones go in
           src/data/team.ts and this grid fills itself in. */
        <div className="team-pending">
          <h2 className="info-h2" style={{ marginTop: 0 }}>Photos on the way</h2>
          <p style={{ marginBottom: 0 }}>
            We are putting names and faces to the team. In the meantime, you will
            meet them at the counter — or say hello on WhatsApp.
          </p>
        </div>
      )}

      <div className="info-cta">
        <Link to="/about">
          <Button variant="primary" size="lg">Read our story</Button>
        </Link>
        <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">Say hello</Button>
        </a>
      </div>
    </div>
  </div>
);

export default OurTeam;
