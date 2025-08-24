import { 
  Settings, 
  Target, 
  Shield, 
  Zap, 
  Package, 
  Ban, 
  Merge, 
  Clock, 
  DollarSign, 
  Sparkles,
  BarChart3,
  FileText,
  Search,
  TrendingUp,
  Users,
  Star,
  MessageSquare,
  ShoppingCart,
  Globe,
  Truck,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Eye,
  Database,
  CreditCard,
  Briefcase,
  Award,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  advantage?: string;
  price: string;
  priceRange?: string;
  timeframe: string;
  icon: any;
  color: string;
  category: 'amazon-internal' | 'amazon-reviews' | 'amazon-reports' | 'ebay' | 'general';
  featured?: boolean;
  guarantee?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  services: ServiceItem[];
}

// 🔥🔥 AMZ Insiders Services For Amazon Seller 🔥🔥
export const amazonInternalServices: ServiceItem[] = [
  {
    id: 'internal-screenshots',
    title: 'Internal Screenshots of Suspended Account',
    description: 'Get detailed internal screenshots of your suspended Amazon account to understand the suspension reasons and plan your reinstatement strategy.',
    price: '$180',
    timeframe: '1-2 days',
    icon: Eye,
    color: 'from-blue-500 to-blue-600',
    category: 'amazon-internal'
  },
  {
    id: 'customer-data-negative-review',
    title: 'Customer Data by Negative Review',
    description: 'Obtain detailed customer information and data related to negative reviews to help you understand and address customer concerns.',
    price: 'Contact for pricing',
    timeframe: '2-3 days',
    icon: Database,
    color: 'from-red-500 to-red-600',
    category: 'amazon-internal'
  },
  {
    id: 'brand-name-change',
    title: 'Brand Name Change',
    description: 'Professional brand name change service for your Amazon listings and account to rebrand your business effectively.',
    price: '$400',
    timeframe: '3-5 days',
    icon: RefreshCw,
    color: 'from-purple-500 to-purple-600',
    category: 'amazon-internal'
  },
  {
    id: 'remap-asin',
    title: 'REMAPs of Activated and Non-activated Listing',
    description: 'Remap your SKU to a completely new ASIN for both activated and non-activated listings to resolve various listing issues.',
    price: '$200',
    timeframe: '1 day',
    icon: Target,
    color: 'from-green-500 to-green-600',
    category: 'amazon-internal'
  },
  {
    id: 'advertising-cpc',
    title: 'Advertising CPC Management',
    description: 'Professional CPC advertising management and optimization to maximize your ad spend efficiency and ROI.',
    price: 'Contact for pricing',
    timeframe: 'Ongoing',
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-600',
    category: 'amazon-internal'
  }
];

// 🤝🤝 Internal Service 🤝🤝
export const amazonInternalAdvancedServices: ServiceItem[] = [
  {
    id: 'remove-hijacker',
    title: 'Remove Hijacker',
    description: 'Remove hijackers from your listings to maintain exclusive buy box control and protect your brand.',
    advantage: 'Own buy box exclusive',
    price: '$180',
    timeframe: '2 days',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    category: 'amazon-internal',
    guarantee: '30 days guarantee for FBA/FBM'
  },
  {
    id: 'remap-asin-advanced',
    title: 'Remap ASIN',
    description: 'Advanced ASIN remapping service to transfer your product to a new ASIN with better performance metrics.',
    advantage: 'Remap SKU to a full new ASIN',
    price: '$200',
    timeframe: '1 day',
    icon: Target,
    color: 'from-blue-500 to-blue-600',
    category: 'amazon-internal'
  },
  {
    id: 'block-asin',
    title: 'Block ASIN',
    description: 'Block competitor ASINs when you receive attacks or need to protect your market position.',
    advantage: 'Block competitors listing when you received attack',
    price: '$250',
    timeframe: '1-4 days',
    icon: Ban,
    color: 'from-gray-500 to-gray-600',
    category: 'amazon-internal'
  },
  {
    id: 'merge-review',
    title: 'Merge Review',
    description: 'Merge reviews from different ASINs to increase your review count and improve product credibility.',
    advantage: 'Increase review number',
    price: '$4/per review',
    timeframe: '1 day',
    icon: Merge,
    color: 'from-green-500 to-green-600',
    category: 'amazon-internal'
  },
  {
    id: 'amazon-insurance',
    title: 'Amazon Insurance',
    description: 'Comprehensive insurance coverage for your Amazon business to protect against various risks and losses.',
    price: 'Contact for pricing',
    timeframe: '5-7 days',
    icon: Shield,
    color: 'from-blue-500 to-blue-600',
    category: 'amazon-internal'
  },
  {
    id: 'ppc-report',
    title: 'PPC Report',
    description: 'Detailed PPC performance reports including clicks, spend, keywords, orders and comprehensive analysis.',
    price: '$200',
    timeframe: '1-2 days',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
    category: 'amazon-reports'
  }
];

// 🤝🤝 Review Service 🤝🤝
export const amazonReviewServices: ServiceItem[] = [
  {
    id: 'verified-reviews',
    title: 'Amazon Verified Reviews',
    description: 'Get genuine Amazon verified reviews from real customers to boost your product credibility and rankings.',
    price: 'Part of $200 package',
    timeframe: '3-7 days',
    icon: Star,
    color: 'from-yellow-500 to-yellow-600',
    category: 'amazon-reviews',
    featured: true
  },
  {
    id: 'seller-feedback',
    title: 'Amazon Seller Feedback',
    description: 'Improve your seller feedback score with genuine feedback from verified Amazon customers.',
    price: 'Part of $200 package',
    timeframe: '3-7 days',
    icon: MessageSquare,
    color: 'from-blue-500 to-blue-600',
    category: 'amazon-reviews'
  },
  {
    id: 'keyword-search-purchase-review',
    title: 'Amazon Keyword Search & Purchase + Verified Review',
    description: 'Complete service including keyword search, purchase, and verified review to boost organic rankings.',
    price: '$200',
    timeframe: '5-10 days',
    icon: Search,
    color: 'from-green-500 to-green-600',
    category: 'amazon-reviews',
    featured: true
  },
  {
    id: 'amazon-votes',
    title: 'Amazon Votes (Helpful/Unhelpful)',
    description: 'Get helpful or unhelpful votes on reviews to influence review rankings and visibility.',
    price: 'Part of $200 package',
    timeframe: '2-5 days',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600',
    category: 'amazon-reviews'
  },
  {
    id: 'qa-posting-votes',
    title: 'Amazon Q&A Posting and Q/A Votes',
    description: 'Professional Q&A posting service with votes to improve product information and customer engagement.',
    price: 'Contact for pricing',
    timeframe: '3-5 days',
    icon: MessageSquare,
    color: 'from-indigo-500 to-indigo-600',
    category: 'amazon-reviews'
  },
  {
    id: 'top-reviewer-vine',
    title: 'Review From Amazon Top 1000 Ranking Buyer Profile/Vine Buyer',
    description: 'Get reviews from top-ranked Amazon reviewers and Vine members for maximum credibility.',
    price: 'Premium pricing - Contact us',
    timeframe: '7-14 days',
    icon: Award,
    color: 'from-gold-500 to-gold-600',
    category: 'amazon-reviews',
    featured: true
  },
  {
    id: 'negative-feedback-remove',
    title: 'Negative Feedback Remove',
    description: 'Professional service to remove negative feedback and reviews that violate Amazon policies.',
    price: '$200',
    timeframe: '3-7 days',
    icon: RefreshCw,
    color: 'from-red-500 to-red-600',
    category: 'amazon-reviews'
  },
  {
    id: 'flipkart-review',
    title: 'Flipkart Review',
    description: 'Professional review services for Flipkart marketplace to boost your product visibility.',
    price: 'Contact for pricing',
    timeframe: '5-7 days',
    icon: Star,
    color: 'from-orange-500 to-orange-600',
    category: 'amazon-reviews'
  },
  {
    id: 'walmart-review',
    title: 'Walmart Review',
    description: 'Professional review services for Walmart marketplace to improve your product rankings.',
    price: 'Contact for pricing',
    timeframe: '5-7 days',
    icon: Star,
    color: 'from-blue-500 to-blue-600',
    category: 'amazon-reviews'
  }
];

// Additional Services
export const additionalServices: ServiceItem[] = [
  {
    id: 'ecommerce-website',
    title: 'Make E-commerce Website with Your Own Brand',
    description: 'Complete e-commerce website development with your own branding and custom features.',
    price: '$400 - $5,000',
    priceRange: 'Based on complexity',
    timeframe: '2-4 weeks',
    icon: Globe,
    color: 'from-cyan-500 to-cyan-600',
    category: 'general',
    featured: true
  },
  {
    id: 'withdraw-funds-blocked',
    title: 'Withdraw Funds from Blocked Account',
    description: 'Professional service to help withdraw detained funds from blocked Amazon accounts.',
    price: '25% of funds',
    timeframe: '1-2 weeks',
    icon: DollarSign,
    color: 'from-green-500 to-green-600',
    category: 'amazon-internal',
    featured: true
  },
  {
    id: 'back-down-competitors',
    title: 'Back Down Competitors',
    description: 'Strategic service to handle competitor attacks and protect your market position.',
    price: '$350',
    timeframe: '3-7 days',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    category: 'amazon-internal'
  },
  {
    id: 'usps-tracking',
    title: 'USPS/UPS Tracking Service',
    description: 'Professional tracking service for safe delivery and product protection.',
    price: '$200 - $800',
    priceRange: 'Based on service level',
    timeframe: 'Ongoing',
    icon: Truck,
    color: 'from-blue-500 to-blue-600',
    category: 'general'
  }
];

// Amazon Reports Services
export const amazonReportsServices: ServiceItem[] = [
  {
    id: 'asin-reports',
    title: 'ASIN Reports (Sales, Volume, Ads)',
    description: 'Comprehensive ASIN performance reports including sales data, sales volume, and advertising metrics.',
    price: '$100',
    timeframe: '1-2 days',
    icon: BarChart3,
    color: 'from-blue-500 to-blue-600',
    category: 'amazon-reports'
  },
  {
    id: 'ppc-detailed-report',
    title: 'PPC Detailed Report',
    description: 'In-depth PPC analysis including clicks, spend, keywords, orders, and performance metrics.',
    price: '$200',
    timeframe: '1-2 days',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600',
    category: 'amazon-reports'
  },
  {
    id: 'payment-reports',
    title: 'Payment Reports (City, State, Post)',
    description: 'Detailed payment analysis by geographic location including city, state, and postal data.',
    price: '$200',
    timeframe: '2-3 days',
    icon: MapPin,
    color: 'from-green-500 to-green-600',
    category: 'amazon-reports'
  },
  {
    id: 'business-report-account',
    title: 'Business Report by Whole Account',
    description: 'Comprehensive business performance report covering your entire Amazon account metrics.',
    price: '$200',
    timeframe: '2-3 days',
    icon: Briefcase,
    color: 'from-indigo-500 to-indigo-600',
    category: 'amazon-reports'
  },
  {
    id: 'internal-account-notes',
    title: 'Amazon Internal Account Notes',
    description: 'Access to internal Amazon account notes and communications for better account understanding.',
    price: 'Contact for pricing',
    timeframe: '1-2 days',
    icon: FileText,
    color: 'from-gray-500 to-gray-600',
    category: 'amazon-internal'
  },
  {
    id: 'real-email-order-id',
    title: 'Real Email with Order ID (Exact Buyer Information)',
    description: 'Get exact buyer information including real email addresses and order IDs for customer outreach.',
    price: 'Contact for pricing',
    timeframe: '1-2 days',
    icon: Mail,
    color: 'from-orange-500 to-orange-600',
    category: 'amazon-internal'
  }
];

// eBay Services
export const ebayServices: ServiceItem[] = [
  {
    id: 'ebay-mc011',
    title: 'eBay MC011 Suspension Reinstatement',
    description: 'Professional reinstatement service for eBay MC011 suspensions with high success rate.',
    price: '$400 - $600',
    priceRange: 'Based on complexity',
    timeframe: '5-10 days',
    icon: RefreshCw,
    color: 'from-blue-500 to-blue-600',
    category: 'ebay'
  },
  {
    id: 'ebay-mc999',
    title: 'eBay MC999 Suspension Reinstatement',
    description: 'Expert handling of eBay MC999 suspensions with comprehensive appeal process.',
    price: '$400 - $600',
    priceRange: 'Based on complexity',
    timeframe: '7-14 days',
    icon: AlertTriangle,
    color: 'from-red-500 to-red-600',
    category: 'ebay'
  },
  {
    id: 'ebay-indefinite',
    title: 'eBay Indefinite Suspension',
    description: 'Specialized service for indefinite eBay suspensions requiring extensive documentation.',
    price: '$400 - $600',
    priceRange: 'Based on complexity',
    timeframe: '10-21 days',
    icon: Ban,
    color: 'from-gray-500 to-gray-600',
    category: 'ebay'
  },
  {
    id: 'ebay-first-time',
    title: 'First-time Suspension',
    description: 'Quick resolution service for first-time eBay account suspensions.',
    price: '$400 - $600',
    priceRange: 'Based on complexity',
    timeframe: '3-7 days',
    icon: CheckCircle,
    color: 'from-green-500 to-green-600',
    category: 'ebay'
  },
  {
    id: 'ebay-vero',
    title: 'eBay VERO Suspension',
    description: 'Professional handling of eBay VERO (Verified Rights Owner) program suspensions.',
    price: '$400 - $600',
    priceRange: 'Based on complexity',
    timeframe: '5-10 days',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
    category: 'ebay'
  },
  {
    id: 'ebay-172-high-risk',
    title: 'eBay 172 High Risk & Fraud Suspension',
    description: 'Expert resolution of eBay 172 high risk and fraud-related account suspensions.',
    price: '$400 - $600',
    priceRange: 'Based on complexity',
    timeframe: '7-14 days',
    icon: AlertTriangle,
    color: 'from-red-500 to-red-600',
    category: 'ebay'
  },
  {
    id: 'ebay-limit-increase',
    title: 'eBay Account Limit Increase',
    description: 'Professional service to increase your eBay selling limits and account capacity.',
    price: 'Contact for pricing',
    timeframe: '3-7 days',
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-600',
    category: 'ebay'
  },
  {
    id: 'ebay-negative-feedback',
    title: 'eBay Negative Feedback Removal',
    description: 'Remove negative feedback from your eBay account to improve seller metrics.',
    price: '$100 - $150',
    priceRange: 'Per feedback',
    timeframe: '3-5 days',
    icon: RefreshCw,
    color: 'from-orange-500 to-orange-600',
    category: 'ebay'
  },
  {
    id: 'ebay-defects-removal',
    title: 'eBay Defects Removal',
    description: 'Professional removal of defects from your eBay seller account to improve performance.',
    price: '$200',
    timeframe: '5-7 days',
    icon: CheckCircle,
    color: 'from-green-500 to-green-600',
    category: 'ebay'
  }
];

// Service Categories
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'amazon-internal',
    title: 'Amazon Internal Services',
    description: 'Advanced internal Amazon services for account management and optimization',
    icon: Settings,
    services: [...amazonInternalServices, ...amazonInternalAdvancedServices, ...amazonReportsServices.filter(s => s.category === 'amazon-internal'), ...additionalServices.filter(s => s.category === 'amazon-internal')]
  },
  {
    id: 'amazon-reviews',
    title: 'Amazon Review Services',
    description: 'Comprehensive review and feedback management services',
    icon: Star,
    services: amazonReviewServices
  },
  {
    id: 'amazon-reports',
    title: 'Amazon Reports & Analytics',
    description: 'Detailed reporting and analytics services for data-driven decisions',
    icon: BarChart3,
    services: amazonReportsServices.filter(s => s.category === 'amazon-reports')
  },
  {
    id: 'ebay',
    title: 'eBay Services',
    description: 'Complete eBay account management and reinstatement services',
    icon: RefreshCw,
    services: ebayServices
  },
  {
    id: 'general',
    title: 'General Services',
    description: 'Additional services for e-commerce business growth',
    icon: Globe,
    services: additionalServices.filter(s => s.category === 'general')
  }
];

// All services combined
export const allServices: ServiceItem[] = [
  ...amazonInternalServices,
  ...amazonInternalAdvancedServices,
  ...amazonReviewServices,
  ...amazonReportsServices,
  ...additionalServices,
  ...ebayServices
];

// Featured services
export const featuredServices: ServiceItem[] = allServices.filter(service => service.featured);

// Payment support information
export const paymentSupport = {
  title: 'Payment Support Station',
  description: 'We provide 2D/3D/5D payment supported. All types payment system available.',
  methods: ['2D Payment', '3D Payment', '5D Payment', 'All Payment Systems'],
  availability: '24/7 Support Available'
};

// Contact information
export const contactInfo = {
  support: '24/7 Online Chat',
  availability: 'Round the clock support',
  response: 'Quick response time',
  channels: ['Chat', 'Email', 'Phone']
};

export default {
  serviceCategories,
  allServices,
  featuredServices,
  amazonInternalServices,
  amazonInternalAdvancedServices,
  amazonReviewServices,
  amazonReportsServices,
  additionalServices,
  ebayServices,
  paymentSupport,
  contactInfo
};
