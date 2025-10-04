'use client';

import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const inquiryTypes = ['Product Guidance', 'Quotation', 'Service Request', 'Other'];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className={styles.grid}>
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="name@company.com" required />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="+91" required />
        </label>
        <label>
          <span>Inquiry Type</span>
          <select name="inquiry" required>
            <option value="">Select</option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className={styles.full}>
        <span>Message</span>
        <textarea name="message" rows={5} placeholder="How can we help?" required />
      </label>
      <button type="submit">Send Message</button>
      {submitted && <p className={styles.notice}>Thanks! Our team will get in touch shortly.</p>}
    </form>
  );
}
