export const navLinks = [
  { href: '/about', label: 'About' },
  {
    href: '/products',
    label: 'Products',
    children: [
      { href: '/products/power-team', label: 'Power Team' },
      { href: '/products/bolting-systems', label: 'Bolting Systems' },
      { href: '/products/pullers', label: 'Pullers' }
    ]
  },
  { href: '/partners', label: 'Partners' },
  { href: '/customers', label: 'Customers' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/videos', label: 'Videos' },
  { href: '/contact', label: 'Contact' }
];

export const utilityLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/careers', label: 'Careers' }
];
