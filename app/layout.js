import './globals.css';
import { TopBar } from '../components/TopBar';
import { HeaderNav } from '../components/HeaderNav';
import { Footer } from '../components/Footer';

export const metadata = {
  title: {
    default: 'Meceleon – Hydraulic Tools, Bolting Systems & Pullers in India',
    template: '%s | Meceleon'
  },
  description:
    'World-class industrial tools with safety and after-sales support from Meceleon Solutions Private Limited.',
  metadataBase: new URL('https://meceleon.com')
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Meceleon Solutions Private Limited',
  url: 'https://meceleon.com',
  logo: 'https://meceleon.com/logo.png',
  telephone: '+918882008583',
  email: 'sales@meceleon.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Apex Athena, Sector 75',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201304',
    addressCountry: 'IN'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <TopBar />
        <HeaderNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
