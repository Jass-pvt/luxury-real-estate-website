import type { Deal } from '../types';

export const dealsData: Deal[] = [
  {
    id: 'deal-1',
    title: 'The Grand Crest Residence',
    category: 'RESIDENTIAL',
    categoryLabel: 'Residential Deal',
    location: 'Boat Club, Chennai',
    status: 'Completed',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop',
    description: 'Facilitated the confidential acquisition of an ultra-prime luxury residential villa featuring modern minimalist architecture and private landscape gardens.',
    isFeatured: true,
    highlights: [
      'Prime waterfront neighborhood parcel',
      'Confidential off-market transaction',
      'Complete title audit & expedited registration'
    ]
  },
  {
    id: 'deal-2',
    title: 'Tambaram Commercial Estate Parcel',
    category: 'LAND & PLOT',
    categoryLabel: 'Land Deal',
    location: 'Tambaram, Chennai Corridor',
    status: 'Completed',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop',
    description: 'Strategic acquisition of a multi-acre prime commercial growth plot positioned along the high-density transit corridor.',
    isFeatured: false,
    highlights: [
      'Clear FSI zoning & highway access',
      'Joint venture structuring',
      'Zero-encumbrance legal clearance'
    ]
  },
  {
    id: 'deal-3',
    title: 'Tech Matrix Grade-A Office Floor',
    category: 'COMMERCIAL',
    categoryLabel: 'Commercial Deal',
    location: 'OMR Tech Corridor, Chennai',
    status: 'Completed',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    description: 'Structure and execution of a long-term corporate office acquisition for a multinational software tenant.',
    isFeatured: false,
    highlights: [
      'Grade-A IT park specification',
      'Pre-leased asset yield structure',
      'Institutional lease agreement'
    ]
  },
  {
    id: 'deal-4',
    title: 'The Seaside Heritage Villa',
    category: 'RESIDENTIAL',
    categoryLabel: 'Residential Deal',
    location: 'East Coast Road (ECR), Chennai',
    status: 'Completed',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
    description: 'Facilitated the sale of a coastal luxury vacation compound to a private family office.',
    isFeatured: false,
    highlights: [
      'Coastal Regulation Zone (CRZ) clearance',
      'Architectural valuation assessment',
      'Private escrow settlement'
    ]
  },
  {
    id: 'deal-5',
    title: 'Velachery Retail Flagship Hub',
    category: 'COMMERCIAL',
    categoryLabel: 'Commercial Deal',
    location: 'Velachery, Chennai',
    status: 'Completed',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
    description: 'High-street commercial retail asset acquisition for an international fashion brand expansion.',
    isFeatured: false,
    highlights: [
      'High footfall frontage corner plot',
      'Long-term escalation framework',
      'Commercial conversion approvals'
    ]
  },
  {
    id: 'deal-6',
    title: 'Porur Institutional Land Assembly',
    category: 'LAND & PLOT',
    categoryLabel: 'Land Deal',
    location: 'Porur West, Chennai',
    status: 'Completed',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    description: 'Assembled contiguous land parcels for a private educational healthcare trust campus expansion.',
    isFeatured: false,
    highlights: [
      'Multi-owner title consolidation',
      'CMDA layout clearance',
      'Seamless environmental compliance'
    ]
  }
];
