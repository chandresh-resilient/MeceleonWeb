import { PageIntro } from '../../../components/PageIntro';
import { Section } from '../../../components/Section';
import { FeatureGrid } from '../../../components/FeatureGrid';

const boltingSolutions = [
  {
    title: 'Torque Wrenches',
    description: 'Hydraulic and pneumatic torque wrenches for accurate, repeatable bolting.'
  },
  {
    title: 'Tensioners',
    description: 'Bolt tensioners that deliver even preload across critical joints and flanges.'
  },
  {
    title: 'Bolting Accessories',
    description: 'Sockets, reaction arms, hoses, and pumps to complete your bolting toolkit.'
  }
];

export const metadata = {
  title: 'Bolting Systems – Torque Wrenches & Tensioners',
  description: 'Precision bolting solutions for mission-critical applications.'
};

export default function BoltingSystemsPage() {
  return (
    <>
      <PageIntro
        title="Bolting Systems"
        tagline="Precision fastening and maintenance"
        description="Keep mission-critical connections secure with our full range of controlled bolting solutions."
      />
      <Section>
        <FeatureGrid items={boltingSolutions} />
      </Section>
    </>
  );
}
