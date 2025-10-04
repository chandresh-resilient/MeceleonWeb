import { PageIntro } from '../../../components/PageIntro';
import { Section } from '../../../components/Section';
import { ProductRangeGrid } from '../../../components/ProductRangeGrid';
import { productRangeCategories } from '../../../data/productRange';

export const metadata = {
  title: 'Hydraulic Equipments and Tools Range',
  description:
    'Browse hydraulic tools, pumps, filtration systems, and maintenance equipment across the full Meceleon range.'
};

export default function ProductRangePage() {
  return (
    <>
      <PageIntro
        title="Hydraulic Equipments and Tools"
        tagline="Comprehensive product range"
        description="Explore over two dozen specialised categories that cover hydraulic power, bolting, filtration, and material handling."
      />
      <Section
        eyebrow="Product Range"
        title="Engineered solutions for every maintenance challenge"
        description="Navigate the categories below to view detailed specifications and featured equipment drawn from the Meceleon catalogue."
      >
        <ProductRangeGrid categories={productRangeCategories} />
      </Section>
    </>
  );
}
