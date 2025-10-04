import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageIntro } from '../../../../components/PageIntro';
import { Section } from '../../../../components/Section';
import { productRangeCategories } from '../../../../data/productRange';
import styles from '../../../../styles/ProductRangeDetail.module.css';

function getCategory(slug) {
  return productRangeCategories.find((category) => category.slug === slug);
}

export function generateMetadata({ params }) {
  const category = getCategory(params.slug);
  if (!category) {
    return {
      title: 'Product Category Not Found',
      description: 'The requested product category could not be located.'
    };
  }

  return {
    title: `${category.title} – Hydraulic Equipments and Tools`,
    description: `Discover featured equipment, highlights, and use cases for ${category.title.toLowerCase()}.`
  };
}

export default function ProductRangeDetailPage({ params }) {
  const category = getCategory(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageIntro
        title={category.title}
        tagline="Featured equipment"
        description={category.description}
      >
        <Link href="/products/range" className="button">
          Back to range overview
        </Link>
      </PageIntro>
      <Section
        eyebrow="Highlighted Products"
        title={`Explore ${category.items.length} featured solution${category.items.length === 1 ? '' : 's'}`}
        description="Each item below showcases how Meceleon supports maintenance, assembly, and process reliability across industries."
      >
        <div className={styles.grid}>
          {category.items.map((item) => (
            <article key={item.name} className={styles.card}>
              <h3>{item.name}</h3>
              {item.summary && <p>{item.summary}</p>}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
