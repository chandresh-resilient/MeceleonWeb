import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import styles from '../../styles/ListBlocks.module.css';

const partners = [
  'SPX FLOW Power Team',
  'Norbar Torque Tools',
  'Enerpac Bolting',
  'Leading EPC Contractors',
  'Industrial Maintenance Specialists'
];

export const metadata = {
  title: 'Partners – Engineering & Tool Collaborations',
  description: 'Collaborations with top engineering and tool brands in India.'
};

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        title="Partners"
        tagline="Collaboration"
        description="We team up with global leaders in engineering, hydraulics, and precision tooling to bring reliable solutions to India."
      />
      <Section>
        <div className={styles.blocks}>
          <article className={styles.block}>
            <h2>Brands We Represent</h2>
            <ul className={styles.items}>
              {partners.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>
    </>
  );
}
