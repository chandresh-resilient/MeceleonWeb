import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import { ContactCard } from '../../components/ContactCard';
import { ContactForm } from '../../components/ContactForm';
import styles from '../../styles/ContactPage.module.css';

export const metadata = {
  title: 'Contact Meceleon – Enquiries & Support',
  description: 'Talk to our team for product guidance, quotes, and support.'
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact"
        tagline="Talk to our team"
        description="Reach us via email, phone, or WhatsApp, or share your inquiry and we’ll respond within one business day."
      />
      <Section>
        <div className={styles.layout}>
          <ContactCard />
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
