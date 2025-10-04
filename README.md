# MeceleonWeb
# Meceleon Website Structure &amp; Content built in react
# Meceleon Website Structure & Content Guide

## 1. Information Architecture (Sitemap)

- Home (`/`)
- About (`/about`)
- Products (`/products`)
  - Power Team (Hydraulics) (`/products/power-team`)
  - Bolting Systems (`/products/bolting-systems`)
  - Pullers (`/products/pullers`)
- Partners (`/partners`)
- Customers (`/customers`)
- Downloads (`/downloads`)
- Videos (`/videos`)
- Contact (`/contact`)
- Utility
  - Privacy Policy (`/privacy`)
  - Terms of Use (`/terms`)
  - Careers (optional) (`/careers`)

---

## 2. Global Elements

**Top Bar (Announcement):**
“Welcome to Meceleon — check our latest brochure in Downloads.”  
Left: `+91 88820 08583` | Right: CTA link to `/downloads`.

**Header Nav:** About · Products · Partners · Customers · Downloads · Videos · Contact  
Primary CTA (button): “Get in touch”

**Footer:**  
- About (1–2 lines)  
- Quick Links (same as header + Privacy/Terms)  
- Contact (Address, Phone, Email, Hours)  
- WhatsApp link  
- Copyright line

---

## 3. Page-by-Page Content

### Home (`/`)
#### Hero
- **H1:** Welcome to Meceleon — The Solution City!
- **Sub:** World-class work-saving and safety tools with unmatched after-sales support.
- **CTAs:** Explore Products | Talk to an Expert

#### Trust Points
Hydraulic Systems · Precision Bolting · Industrial Pullers · Dedicated After-Sales

#### About Snapshot
> We enhance performance and ensure precision, safety, and durability across industrial applications.

#### Product Highlights
Power Team (Hydraulics) · Bolting Systems · Pullers

#### Partners & Customers
Trusted partners and clients served across industries.

#### Downloads
Company Brochure · Power Team Catalog · Bolting Systems Catalog

#### Videos
Product demos, maintenance tips, and explainers.

#### Contact
Reach us via email, phone, or WhatsApp.

---

### About (`/about`)
#### Mission | Vision | History
- **Mission:** Deliver innovative, work-saving tools while building lasting partnerships based on trust.
- **Vision:** Be India’s premier partner for hydraulic, electrical, and mechanical solutions.
- **History:** Founded in 2018, Meceleon has grown by focusing on honest advice and quick service.

---

### Products (`/products`)
#### Categories
1. Power Team (Hydraulics)
2. Bolting Systems
3. Pullers

#### Product Pages
**Power Team:** Pumps, Cylinders, Presses, Accessories  
**Bolting Systems:** Torque Wrenches, Tensioners, Accessories  
**Pullers:** Mechanical, Hydraulic, Custom Kits

---

### Partners (`/partners`)
Collaborations with top engineering and tool brands in India.

---

### Customers (`/customers`)
Serving manufacturing, EPC, power, and infrastructure companies.

---

### Downloads (`/downloads`)
Brochures and catalogs for quick access. Example PDFs:  
- Company Brochure (4 MB)  
- Power Team Catalog (12 MB)  
- Bolting Systems Catalog (9 MB)

---

### Videos (`/videos`)
Embedded demos from YouTube showcasing product setup, usage, and safety.

---

### Contact (`/contact`)
**Address:** Apex Athena, Sector 75, Noida, UP, 201304  
**Phone:** +91 88820 08583  
**Email:** sales@meceleon.com  
**Hours:** Mon–Fri 09:00–17:00 | Sat–Sun Closed

Form Fields: Name, Email, Phone, Message, Inquiry Type

---

## 4. Schema.org (Recommended)

Add this inside `<head>` of `index.html` or `_document.js` in Next.js:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Meceleon Solutions Private Limited",
  "url": "https://meceleon.com",
  "logo": "https://meceleon.com/logo.png",
  "telephone": "+918882008583",
  "email": "sales@meceleon.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Apex Athena, Sector 75",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201304",
    "addressCountry": "IN"
  }
}
```

**Why:** Enhances SEO, improves Google search appearance, connects to local business results, and supports voice search accuracy.

---

## 5. SEO Starters

| Page | Title | Meta Description |
|------|--------|------------------|
| Home | Meceleon – Hydraulic Tools, Bolting Systems & Pullers in India | World-class industrial tools with safety and after-sales support. |
| Products | Industrial Products – Hydraulics, Bolting, Pullers | Browse Power Team hydraulics, precision bolting solutions, and pullers. |
| About | About Meceleon – Mission, Vision, History | Precision, safety, and durable tools—serving India since 2018. |
| Downloads | Downloads – Brochures & Catalogs | PDF catalogs and brochures for quick reference. |
| Contact | Contact Meceleon – Enquiries & Support | Talk to our team for product guidance, quotes, and support. |

---

## 6. Assets Needed

- Logo (SVG/PNG) and brand colors
- Product and partner images
- Customer logos/testimonials
- Downloadable PDFs
- Final contact form endpoint or email integration

---

© 2025 Meceleon Solutions Private Limited. All Rights Reserved.
