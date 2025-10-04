import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import { ResourceList } from '../../components/ResourceList';

const resources = [
  {
    title: 'Company Brochure',
    description: 'Quick overview of Meceleon’s solutions and after-sales services (PDF, 4 MB).',
    action: { href: '#', label: 'Download' }
  },
  {
    title: 'Power Team Catalog',
    description: 'Hydraulic pumps, cylinders, presses, and system components (PDF, 12 MB).',
    action: { href: '#', label: 'Download' }
  },
  {
    title: 'Bolting Systems Catalog',
    description: 'Torque wrenches, tensioners, and bolting accessories (PDF, 9 MB).',
    action: { href: '#', label: 'Download' }
  }
];

export const metadata = {
  title: 'Downloads – Brochures & Catalogs',
  description: 'PDF catalogs and brochures for quick reference.'
};

export default function DownloadsPage() {
  return (
    <>
      <PageIntro
        title="Downloads"
        tagline="Resource Center"
        description="Grab our brochures and catalogs for offline reference and project planning."
      />
      <Section>
        <ResourceList resources={resources} />
      </Section>
    </>
  );
}
