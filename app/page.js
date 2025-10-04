import Link from 'next/link';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { FeatureGrid } from '../components/FeatureGrid';
import { ResourceList } from '../components/ResourceList';

const productHighlights = [
  {
    title: 'Power Team (Hydraulics)',
    description: 'Pumps, cylinders, presses, and accessories for heavy-duty applications.',
    link: { href: '/products/power-team', label: 'View Power Team' }
  },
  {
    title: 'Bolting Systems',
    description: 'Torque wrenches, tensioners, and accessories for precision fastening.',
    link: { href: '/products/bolting-systems', label: 'View Bolting Systems' }
  },
  {
    title: 'Pullers',
    description: 'Mechanical, hydraulic, and custom puller kits for safe maintenance.',
    link: { href: '/products/pullers', label: 'View Pullers' }
  }
];

const downloads = [
  {
    title: 'Company Brochure',
    description: 'Overview of Meceleon capabilities and services (PDF, 4 MB).',
    action: { href: '/downloads', label: 'Download' }
  },
  {
    title: 'Power Team Catalog',
    description: 'Complete range of hydraulic tools and equipment (PDF, 12 MB).',
    action: { href: '/downloads', label: 'Download' }
  },
  {
    title: 'Bolting Systems Catalog',
    description: 'Precision bolting solutions for industrial projects (PDF, 9 MB).',
    action: { href: '/downloads', label: 'Download' }
  }
];

const quickLinks = [
  { href: '/partners', label: 'Meet our partners' },
  { href: '/customers', label: 'Customers we serve' },
  { href: '/videos', label: 'Watch product demos' }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        eyebrow="Why Meceleon"
        title="Trusted partners and clients across industries"
        description="Hydraulic Systems · Precision Bolting · Industrial Pullers · Dedicated After-Sales"
      >
        <FeatureGrid items={productHighlights} />
      </Section>
      <Section
        eyebrow="About"
        title="We enhance performance and ensure precision, safety, and durability."
        description="Founded in 2018, Meceleon delivers innovative, work-saving tools while building lasting partnerships based on trust."
        background="muted"
        actions={
          <>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="button">
                {link.label}
              </Link>
            ))}
          </>
        }
      />
      <Section
        eyebrow="Downloads"
        title="Latest brochures and catalogs"
        description="Access our most popular resources and get the details you need to plan your next project."
      >
        <ResourceList resources={downloads} />
      </Section>
      <Section
        eyebrow="Stay Updated"
        title="Videos and contact options"
        description="Explore our latest demos or start a conversation with our experts."
        background="accent"
        actions={
          <>
            <Link href="/videos" className="button">
              Watch Videos
            </Link>
            <Link href="/contact" className="button">
              Contact Us
            </Link>
          </>
        }
      />
    </>
  );
}
