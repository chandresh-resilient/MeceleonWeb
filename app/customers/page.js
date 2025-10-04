import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import styles from '../../styles/ListBlocks.module.css';

const industries = [
  'Manufacturing',
  'Engineering, Procurement & Construction',
  'Power Generation',
  'Oil & Gas',
  'Infrastructure'
];

export const metadata = {
  title: 'Customers – Industries We Serve',
  description: 'Serving manufacturing, EPC, power, and infrastructure companies.'
};

export default function CustomersPage() {
  return (
    <>
      <PageIntro
        title="Customers"
        tagline="Industries"
        description="We partner with maintenance teams, EPC contractors, and industrial operators who demand reliable tooling."
      />
      <Section>
        <div className={styles.blocks}>
          <article className={styles.block}>
            <h2>Industries Served</h2>
            <ul className={styles.items}>
              {industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>
    </>
  );
}
