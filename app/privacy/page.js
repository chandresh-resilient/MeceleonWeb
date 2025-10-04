import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import styles from '../../styles/Legal.module.css';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Meceleon collects, uses, and protects your information.'
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        title="Privacy Policy"
        tagline="Utility"
        description="Learn how we protect your personal information and respect your privacy across our services."
      />
      <Section>
        <div className={styles.copy}>
          <p>
            Meceleon collects contact details submitted through our forms to respond to enquiries, provide quotes,
            and deliver product information. We do not sell or share your information with third parties beyond what’s
            required to fulfil your request.
          </p>
          <h2>How we use your information</h2>
          <ul>
            <li>Respond to product and service enquiries.</li>
            <li>Prepare quotations and proposals.</li>
            <li>Share relevant updates about our offerings when requested.</li>
          </ul>
          <p>
            You can request updates or deletion of your data by emailing <a href="mailto:sales@meceleon.com">sales@meceleon.com</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
