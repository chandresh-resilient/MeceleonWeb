import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import styles from '../../styles/About.module.css';

const pillars = [
  {
    title: 'Mission',
    description:
      'Deliver innovative, work-saving tools while building lasting partnerships based on trust.'
  },
  {
    title: 'Vision',
    description: 'Be India’s premier partner for hydraulic, electrical, and mechanical solutions.'
  },
  {
    title: 'History',
    description:
      'Founded in 2018, Meceleon has grown by focusing on honest advice, quick service, and dependable maintenance.'
  }
];

export const metadata = {
  title: 'About Meceleon – Mission, Vision, History',
  description: 'Precision, safety, and durable tools—serving India since 2018.'
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="About Meceleon"
        tagline="Mission · Vision · History"
        description="We are a team of specialists committed to elevating industrial safety and productivity with hydraulic, bolting, and pulling expertise."
      />
      <Section>
        <div className={styles.pillars}>
          {pillars.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
