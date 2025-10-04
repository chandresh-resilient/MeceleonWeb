import styles from '../styles/ContactCard.module.css';

const contactInfo = [
  { label: 'Address', value: 'Apex Athena, Sector 75, Noida, UP, 201304' },
  { label: 'Phone', value: '+91 88820 08583', href: 'tel:+918882008583' },
  { label: 'Email', value: 'sales@meceleon.com', href: 'mailto:sales@meceleon.com' },
  { label: 'Hours', value: 'Mon–Fri 09:00–17:00 | Sat–Sun Closed' }
];

export function ContactCard() {
  return (
    <div className={styles.card}>
      <h3>Reach Us</h3>
      <ul>
        {contactInfo.map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
          </li>
        ))}
      </ul>
      <a className={styles.whatsapp} href="https://wa.me/918882008583" target="_blank" rel="noreferrer">
        WhatsApp our team
      </a>
    </div>
  );
}
