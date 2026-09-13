/* Single source of truth — used by the homepage Brand coverage section
   and the /brands page, so the two can never drift apart.

   `image` is the card background on the homepage; the /brands page ignores it
   and renders the same rows as a table. Files live in /public/car and are
   named after the marque used as the visual for that region. A row with no
   image renders on the plain navy card, so a missing photo never breaks the
   grid. */
export const coverage: {
  number: string;
  region: string;
  brands: string[];
  image?: string;
}[] = [
  {
    number: '01',
    region: 'Korean',
    brands: ['Hyundai', 'Kia', 'Genesis'],
    image: '/car/Korean-card.webp',
  },
  {
    number: '02',
    region: 'Japanese',
    brands: ['Toyota', 'Nissan', 'Mazda', 'Mitsubishi', 'Subaru'],
    image: '/car/Japanese-card.webp',
  },
  {
    number: '03',
    region: 'American',
    brands: ['Ford', 'Chevrolet', 'Jeep'],
    image: '/car/jeep.webp',
  },
  {
    number: '04',
    region: 'European',
    brands: ['Renault', 'Peugeot'],
    image: '/car/European.webp',
  },
  {
    number: '05',
    region: 'Chinese',
    brands: ['BYD', 'MG', 'Chery'],
    image: '/car/Chinese-card.webp',
  },
];

/* Homepage "Brands we supply" panel — core lines shown large, the rest
   listed as available on request. */
export const coreBrands = [
  { number: '01', name: 'Mazda' },
  { number: '02', name: 'Kia' },
  { number: '03', name: 'Hyundai' },
  { number: '04', name: 'Mitsubishi' },
  { number: '05', name: 'Mopar' },
];

export const otherBrands = ['Toyota', 'Nissan', 'MG', 'BYD', 'Geely', 'GWM'];
