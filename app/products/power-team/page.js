import { PageIntro } from '../../../components/PageIntro';
import { Section } from '../../../components/Section';
import { FeatureGrid } from '../../../components/FeatureGrid';

const productLines = [
  {
    title: 'Hydraulic Pumps',
    description: 'Electric, air, and manual pumps engineered for high-force industrial applications.'
  },
  {
    title: 'Cylinders & Rams',
    description: 'Single- and double-acting cylinders with precision control and rugged durability.'
  },
  {
    title: 'Presses',
    description: 'Shop presses and H-frame systems for assembly, maintenance, and production tasks.'
  },
  {
    title: 'Accessories',
    description: 'Hoses, gauges, valves, manifolds, and couplers to build a dependable hydraulic system.'
  }
];

export const metadata = {
  title: 'Power Team Hydraulics – Pumps, Cylinders, Presses',
  description: 'Explore Power Team hydraulic pumps, cylinders, presses, and accessories.'
};

export default function PowerTeamPage() {
  return (
    <>
      <PageIntro
        title="Power Team (Hydraulics)"
        tagline="High-force hydraulic solutions"
        description="From precision lifting to critical maintenance, Power Team delivers the hydraulic performance you need."
      />
      <Section>
        <FeatureGrid items={productLines} />
      </Section>
    </>
  );
}
