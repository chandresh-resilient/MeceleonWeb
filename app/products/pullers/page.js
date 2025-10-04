import { PageIntro } from '../../../components/PageIntro';
import { Section } from '../../../components/Section';
import { FeatureGrid } from '../../../components/FeatureGrid';

const pullerSolutions = [
  {
    title: 'Mechanical Pullers',
    description: 'Compact, versatile pullers designed for routine maintenance and repair tasks.'
  },
  {
    title: 'Hydraulic Pullers',
    description: 'High-force pullers that remove stubborn components with minimal effort.'
  },
  {
    title: 'Custom Kits',
    description: 'Tailored puller kits configured to match unique shaft, gear, and bearing challenges.'
  }
];

export const metadata = {
  title: 'Industrial Pullers – Mechanical, Hydraulic, Custom Kits',
  description: 'Mechanical, hydraulic, and custom puller kits for safe maintenance.'
};

export default function PullersPage() {
  return (
    <>
      <PageIntro
        title="Pullers"
        tagline="Safe component removal"
        description="Reduce downtime and protect your assets with pullers engineered for reliability and safety."
      />
      <Section>
        <FeatureGrid items={pullerSolutions} />
      </Section>
    </>
  );
}
