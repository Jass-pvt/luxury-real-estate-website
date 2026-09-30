import type { ConsultantProfile, StatItem, ValueItem } from '../types';

export const consultantProfile: ConsultantProfile = {
  businessName: 'S P Real Estate',
  tagline: 'REAL ESTATE CONSULTANT',
  ownerName: 'Shreepal Panwar',
  role: 'Principal Real Estate Consultant & Wealth Advisory Specialist',
  experienceYears: '10+',
  bioHeadline: 'Strategic guidance for high-stakes property decisions with discretion, clarity, and market wisdom.',
  shortBio: 'Trusted advisor to private buyers, landowners, corporate entities, and family offices. Combining sharp market intelligence with transparent guidance and an uncompromising dedication to client interests.',
  fullBio: [
    'With over a decade of high-level transaction expertise, Shreepal Panwar established S P Real Estate to redefine real estate consultancy away from transactional brokerages and toward strategic advisory.',
    'Specializing in prime residential estates, high-yield commercial assets, strategic land acquisitions, and property portfolio restructuring, S P Real Estate serves as a confidential partner throughout every phase of the acquisition or liquidation journey.',
    'Our philosophy is built on absolute transparency, rigorous due diligence, long-term fiduciary alignment, and an editorial approach to high-value property wealth management.'
  ],
  philosophy: 'Real estate is not just about property. It is about people, decisions and the future.',
  closingQuote: 'Real estate is not just about property. It is about people, decisions and the future.',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  whatsappMessage: 'Hello Shreepal Panwar, I would like to schedule a private real estate consultation regarding property buying/selling.',
  email: 'ShreepalPanwar@gmail.com',
  locationAddress: 'Suite 402, Vanguard Towers, Anna Salai, Chennai, TN 600002',
  officeHours: 'Mon - Sat: 9:00 AM - 7:00 PM (By Appointment Only)',
  ownerImageUrl: '\mamu.png',
  heroImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
  aboutHeroImageUrl: '\mamu.png',
};

export const trustStats: StatItem[] = [
  {
    id: 'stat-1',
    value: '15+',
    label: 'Years Experience',
    description: 'Advising HNIs, private investors, and family offices.'
  },
  {
    id: 'stat-2',
    value: '50+',
    label: 'Deals Completed',
    description: 'Successfully facilitated prime residential, land, and commercial transactions.'
  },
  {
    id: 'stat-3',
    value: '100+',
    label: 'Happy Clients',
    description: 'Long-term client relationships built on trust and discretion.'
  },
  {
    id: 'stat-4',
    value: '5+',
    label: 'Areas Served',
    description: 'Deep market intelligence across key high-growth corridors.'
  }
];

export const coreValues: ValueItem[] = [
  {
    id: 'val-1',
    title: 'TRUST',
    description: 'Fiduciary integrity and absolute client confidentiality at every transaction stage.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'val-2',
    title: 'TRANSPARENCY',
    description: 'Zero hidden clauses, clear documentation audits, and unbiased market valuations.',
    iconName: 'Eye'
  },
  {
    id: 'val-3',
    title: 'EXPERIENCE',
    description: 'Decade of localized expertise and deep regulatory knowledge navigating complex deals.',
    iconName: 'Award'
  },
  {
    id: 'val-4',
    title: 'LONG-TERM RELATIONSHIPS',
    description: 'Advising across generations, focusing on long-term capital preservation over quick commissions.',
    iconName: 'Users'
  }
];
