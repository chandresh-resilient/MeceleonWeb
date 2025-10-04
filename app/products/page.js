import Link from 'next/link';
import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import { FeatureGrid } from '../../components/FeatureGrid';

const categories = [
  {
    title: 'Hydraulic Equipment Range',
    description: 'Explore 25+ product families covering hydraulic power, bolting, filtration, and maintenance tooling.',
    link: { href: '/products/range', label: 'View Range Overview' }
  },
  {
    title: 'Power Team (Hydraulics)',
    description: 'Pumps, cylinders, presses, and accessories engineered for demanding operations.',
    link: { href: '/products/power-team', label: 'Explore Power Team' }
  },
  {
    title: 'Bolting Systems',
    description: 'Torque wrenches, tensioners, and bolting accessories for precise and safe fastening.',
    link: { href: '/products/bolting-systems', label: 'Explore Bolting Systems' }
  },
  {
    title: 'Pullers',
    description: 'Mechanical, hydraulic, and custom puller kits designed for efficient maintenance.',
    link: { href: '/products/pullers', label: 'Explore Pullers' }
  }
];

export const metadata = {
  title: 'Industrial Products – Hydraulics, Bolting, Pullers',
  description: 'Browse Power Team hydraulics, precision bolting solutions, and pullers.'
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        title="Products"
        tagline="Hydraulics · Bolting · Pullers"
        description="Discover the work-saving equipment trusted across India’s manufacturing, power, and infrastructure sectors."
      >
        <Link href="/downloads" className="button">
          Download Catalogs
        </Link>
      </PageIntro>
      <Section>
        <FeatureGrid items={categories} />
      </Section>
    </>
  );
}
