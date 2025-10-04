import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import styles from '../../styles/Legal.module.css';

export const metadata = {
  title: 'Terms of Use',
  description: 'Guidelines for using the Meceleon website and resources.'
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        title="Terms of Use"
        tagline="Utility"
        description="Understand the rules that govern access to our website, resources, and downloadable assets."
      />
      <Section>
        <div className={styles.copy}>
          <p>
            By accessing this site you agree to use the information for legitimate business purposes, and acknowledge
            that product specifications may change without notice. We strive to keep information accurate and will
            update content as new releases become available.
          </p>
          <h2>Usage guidelines</h2>
          <ul>
            <li>Do not redistribute downloadable assets without permission.</li>
            <li>Contact our team for the latest technical specifications and certifications.</li>
            <li>Submit enquiries with accurate contact information to ensure timely follow-up.</li>
          </ul>
          <p>
            For clarification on these terms, reach us at <a href="mailto:sales@meceleon.com">sales@meceleon.com</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
