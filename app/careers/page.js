import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import styles from '../../styles/Legal.module.css';

const roles = [
  'Service Engineer – Hydraulics',
  'Application Specialist – Bolting',
  'Sales Engineer – Industrial Solutions'
];

export const metadata = {
  title: 'Careers at Meceleon',
  description: 'Explore career opportunities with Meceleon.'
};

export default function CareersPage() {
  return (
    <>
      <PageIntro
        title="Careers"
        tagline="Join the team"
        description="We are always looking for passionate engineers and sales specialists who love solving industrial challenges."
      />
      <Section>
        <div className={styles.copy}>
          <p>
            Share your resume and area of expertise with us to be considered for upcoming roles. Our team will reach
            out when a position aligns with your skills.
          </p>
          <h2>Roles we often hire for</h2>
          <ul>
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <p>
            Email your resume to <a href="mailto:careers@meceleon.com">careers@meceleon.com</a> and mention the position you are
            interested in.
          </p>
        </div>
      </Section>
    </>
  );
}
