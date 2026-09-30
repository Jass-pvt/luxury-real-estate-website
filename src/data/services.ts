import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'service-1',
    number: '01',
    title: 'Property Buying Assistance',
    shortDesc: 'End-to-end buyer representation, title verification, market valuation, and strategic price negotiation.',
    fullDesc: 'Acquiring high-value real estate requires structured market intelligence. We identify off-market opportunities, vet legal titles, evaluate developer track records, and negotiate the strongest terms on your behalf.',
    features: [
      'Tailored property matching based on your criteria',
      'Comprehensive title & legal verification oversight',
      'Comparative market analysis & price negotiation',
      'Seamless closing & registration support'
    ],
    iconName: 'Home'
  },
  {
    id: 'service-2',
    number: '02',
    title: 'Property Selling Assistance',
    shortDesc: 'Discreet marketing, vetted buyer targeting, valuation optimization, and swift closing execution.',
    fullDesc: 'Positioning your premium asset to attract qualified buyers without market erosion. We create high-end editorial presentations, curate private walkthroughs, and manage buyer negotiations discreetly.',
    features: [
      'Editorial property profiling & asset presentation',
      'Private outreach to qualified buyer network',
      'Transaction structure & tax efficiency guidance',
      'Confidential escrow & legal documentation management'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'service-3',
    number: '03',
    title: 'Land & Plot Deals',
    shortDesc: 'Strategic land parcel acquisition, zoning due diligence, layout approval verification, and joint ventures.',
    fullDesc: 'Navigating land acquisitions demands deep understanding of local town planning, zoning regulations, title histories, and growth corridors. We guide developers, HNIs, and institutions through land transactions.',
    features: [
      'Zoning & master plan land compliance audits',
      'Patta, FSI, and layout approval verification',
      'Joint-venture structuring for land owners',
      'Industrial, commercial & residential land sourcing'
    ],
    iconName: 'Compass'
  },
  {
    id: 'service-4',
    number: '04',
    title: 'Residential Property Deals',
    shortDesc: 'Luxury villas, penthouse residences, independent bungalows, and premium gated community homes.',
    fullDesc: 'Focusing on primary residences and luxury vacation homes that combine architectural distinction with long-term capital stability in prime urban pockets.',
    features: [
      'Access to prime residential neighborhoods',
      'Architectural & structural assessment review',
      'Gated community & condominium governance review',
      'Personalized site visits & private viewings'
    ],
    iconName: 'Building2'
  },
  {
    id: 'service-5',
    number: '05',
    title: 'Commercial Property Deals',
    shortDesc: 'Office spaces, retail storefronts, logistics parks, and income-generating pre-leased assets.',
    fullDesc: 'Maximizing rental yields and capital appreciation through institutional-grade commercial real estate advice. Facilitating acquisitions, leasing strategy, and asset disposition.',
    features: [
      'Pre-leased asset acquisition with high ROI',
      'IT Park & Grade-A office space leasing',
      'High-street retail location scouting',
      'Lease agreement structuring & escalation terms'
    ],
    iconName: 'Briefcase'
  },
  {
    id: 'service-6',
    number: '06',
    title: 'Rental Assistance',
    shortDesc: 'Luxury residential leasing, corporate executive relocation, and long-term tenant placement.',
    fullDesc: 'Connecting discerning landlords with verified corporate tenants and expatriates while establishing transparent lease terms and maintenance standards.',
    features: [
      'Expat & corporate executive tenant screening',
      'Custom lease agreements & security deposit escrow',
      'Property handover inspections & inventory logging',
      'Renewal management & rental indexation'
    ],
    iconName: 'Key'
  },
  {
    id: 'service-7',
    number: '07',
    title: 'Property Consultation',
    shortDesc: 'Strategic portfolio advisory, inheritance property partition guidance, and asset valuation.',
    fullDesc: 'Unbiased advisory sessions for property owners facing complex real estate decisions. Ideal for estate planning, asset restructuring, or resolving multi-party property holdings.',
    features: [
      'Independent 1-on-1 strategic advisory',
      'Family estate & inheritance partition guidance',
      'Portfolio diversification analysis',
      'Market timing & exit strategy reports'
    ],
    iconName: 'FileText'
  },
  {
    id: 'service-8',
    number: '08',
    title: 'Finance Assistance',
    shortDesc: 'Guidance and assistance through property financing, home loan documentation, and mortgage advisory.',
    fullDesc: 'Streamlining the property financing journey by connecting you with top-tier banking partners and navigating loan approvals, eligibility calculations, and documentation without friction.',
    features: [
      'Home loan eligibility analysis & guidance',
      'Loan against property (LAP) process assistance',
      'Banking partner coordination & rate comparisons',
      'Legal paperwork & collateral verification support'
    ],
    iconName: 'Banknote'
  }
];

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    desc: 'Deep-dive consultation to understand your financial goals, lifestyle requirements, risk tolerance, and timeline.'
  },
  {
    number: '02',
    title: 'Explore',
    desc: 'Rigorously filter verified off-market and market opportunities, conducting legal title and structural due diligence.'
  },
  {
    number: '03',
    title: 'Guide',
    desc: 'Provide clear valuation insights, strategic price negotiations, transaction structuring, and tax advisory coordination.'
  },
  {
    number: '04',
    title: 'Complete',
    desc: 'Assist through document execution, stamp duty, government registration, and seamless property possession handover.'
  }
];
