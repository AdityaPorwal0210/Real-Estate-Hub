export type FlatDimension = '1500' | '2000';
export type FlatBhk = '2bhk' | '3bhk';
export type FlatVariantId = '1500_2bhk' | '1500_3bhk' | '2000_2bhk' | '2000_3bhk';

export interface RoomInfo {
  id: string;
  name: string;
  shortName: string;
  category: 'living' | 'bedroom' | 'kitchen' | 'bathroom' | 'outdoor' | 'entrance';
  areaSqM: number;
  areaSqFt: number;
  dimensions: string;
  description: string;
  features: string[];
  color: string;
  position: [number, number, number];
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  bounds: {
    minX: number;
    maxX: number;
    minZ: number;
    maxZ: number;
  };
}

export interface InteractiveObject {
  id: string;
  roomId: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
  dimensions: string;
  position: [number, number, number];
  hotspotPosition: [number, number, number];
}

export interface FinancialBreakdown {
  basePrice: string;
  parkingCharges: string;
  clubhouseCharges: string;
  maintenanceCharges: string;
  stampDutyEstimate: string;
  totalAllInclusive: string;
  estimatedEmi: string;
  emiTenure: string;
  emiInterestRate: string;
}

export interface FlatConfigData {
  id: FlatVariantId;
  dimension: FlatDimension;
  bhk: FlatBhk;
  name: string;
  subtitle: string;
  tagline: string;
  badge: string;
  price: string;
  rawPrice: number;
  pricePerSqFt: string;
  totalAreaSqFt: number;
  carpetAreaSqFt: number;
  totalAreaSqM: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  parking: string;
  possession: string;
  facing: string;
  flooring: string;
  location: string;
  address: string;
  highlights: string[];
  amenities: string[];
  financials: FinancialBreakdown;
  disclaimer: string;
  rooms: RoomInfo[];
  interactiveObjects: InteractiveObject[];
  guidedTourSequence: string[];
}

// =========================================================================
// 1. CONFIG 1: 1,500 SQ FT — 2 BHK (SPACIOUS LUXURY • ₹98.50 LAKH)
// =========================================================================
export const CONFIG_1500_2BHK: FlatConfigData = {
  id: '1500_2bhk',
  dimension: '1500',
  bhk: '2bhk',
  name: 'Skyline Residence (2 BHK • 1,500 sq ft)',
  subtitle: '2 BHK Premium Spacious Smart Home',
  tagline: 'Generous Room Proportions • 1,500 sq ft',
  badge: '2 BHK | 1,500 sq ft',
  price: '₹98.50 Lakh',
  rawPrice: 9850000,
  pricePerSqFt: '₹6,566 / sq ft',
  totalAreaSqFt: 1500,
  carpetAreaSqFt: 1180,
  totalAreaSqM: 139,
  type: '2 BHK Luxury Apartment',
  bedrooms: 2,
  bathrooms: 2,
  balconies: 1,
  parking: '1 Dedicated Covered Space',
  possession: 'Ready to Move In',
  facing: 'North-East (Vastu Compliant)',
  flooring: 'Italian Glazed Vitrified Tiles & Hardwood Master Bedroom',
  location: 'Skyline Heights, Sector 42',
  address: 'Unit 702, Skyline Heights, Sector 42, Prime Avenue',
  highlights: [
    'Spacious 24 m² Living Lounge with Sliding Glass Balcony',
    'Grand Master Bedroom with 4.0m Almirah & En-Suite Bath',
    'Open-Concept Solid Oak 6-Seater Dining Space',
    'Full L-Shaped Modular Kitchen with Calacatta Quartz Counter',
    'External Hallway Washbasin with 100% Clear Entryway',
    '1 Dedicated Covered Basement Parking Bay'
  ],
  amenities: [
    '24/7 Multi-Tier CCTV & Biometric Security',
    'Clubhouse & Rooftop Swimming Pool',
    'Equipped Fitness Center & Yoga Zone',
    'Dedicated EV Charging Bay in Basement',
    'High-Speed OTIS Elevators',
    '100% DG Power Backup for All Points'
  ],
  financials: {
    basePrice: '₹90,00,000',
    parkingCharges: '₹5,00,000 (1 Covered)',
    clubhouseCharges: '₹3,50,000 (Lifetime Access)',
    maintenanceCharges: '₹4,500 / month',
    stampDutyEstimate: '₹5,91,000 (6% State Registration)',
    totalAllInclusive: '₹98.50 Lakh (+ Gov. Levies)',
    estimatedEmi: '₹78,400 / month',
    emiTenure: '20 Years',
    emiInterestRate: '8.5% p.a.'
  },
  disclaimer: 'Academic Demonstration Project: All dimensions, floor areas, pricing metrics, and architectural specifications are realistic sample demo data for project evaluation.',
  rooms: [
    {
      id: 'entrance',
      name: 'Entrance & Foyer',
      shortName: 'Foyer',
      category: 'entrance',
      areaSqM: 7.5,
      areaSqFt: 81,
      dimensions: '2.8m × 2.7m',
      description: 'Inviting entrance foyer equipped with a smart biometric access door gate, sleek console credenza, shoe cabinet, and accent wall sconce lighting.',
      features: [
        'Smart biometric digital door lock',
        'Built-in shoe cabinet with cushioned seating',
        'Warm ambient entry sconce lighting',
        'Video intercom display screen'
      ],
      color: '#6366f1',
      position: [-1.5, 0, 5.2],
      cameraPosition: [-1.5, 2.5, 7.5],
      cameraTarget: [-1.5, 0.9, 4.0],
      bounds: { minX: -3, maxX: 0, minZ: 3.8, maxZ: 6.6 }
    },
    {
      id: 'living',
      name: 'Spacious Living Lounge',
      shortName: 'Living',
      category: 'living',
      areaSqM: 24.0,
      areaSqFt: 258,
      dimensions: '5.2m × 4.6m',
      description: 'Bright and airy living lounge featuring a 5-seater L-shaped sectional sofa, designer timber slat media wall with 65" 4K OLED display, and floor-to-ceiling balcony glass sliders.',
      features: [
        'Sliding panoramic glass doors to balcony',
        'L-shaped charcoal linen sectional sofa',
        'Dark oak wood slat media console with LED backlighting',
        'Polished porcelain marble-pattern floor'
      ],
      color: '#3b82f6',
      position: [-5.8, 0, 3.8],
      cameraPosition: [-5.8, 2.8, 7.2],
      cameraTarget: [-5.8, 0.8, 3.2],
      bounds: { minX: -8.6, maxX: -3, minZ: 1, maxZ: 6.6 }
    },
    {
      id: 'balcony',
      name: 'Skyline Balcony Deck',
      shortName: 'Balcony',
      category: 'outdoor',
      areaSqM: 9.0,
      areaSqFt: 97,
      dimensions: '5.2m × 1.7m',
      description: 'Private outdoor sundeck finished in weather-resistant teak wood tiles, toughened glass safety railing, and cozy patio seating overlooking the cityscape.',
      features: [
        'Toughened laminated glass safety railing',
        'Weatherproof teak wood deck tiles',
        'Outdoor 2-seater coffee lounge set',
        'Potted planters & vertical herb wall'
      ],
      color: '#10b981',
      position: [-5.8, 0, 7.5],
      cameraPosition: [-5.8, 2.2, 5.6],
      cameraTarget: [-5.8, 0.8, 7.8],
      bounds: { minX: -8.6, maxX: -3, minZ: 6.6, maxZ: 8.4 }
    },
    {
      id: 'dining',
      name: 'Dining Area',
      shortName: 'Dining',
      category: 'living',
      areaSqM: 12.0,
      areaSqFt: 129,
      dimensions: '3.8m × 3.2m',
      description: 'Contemporary open dining space adjoining the kitchen and living room, fitted with a 6-seater natural oak dining table, designer pendant cluster, and dinnerware.',
      features: [
        'Solid oak 6-seater dining table & cushioned chairs',
        'Scandinavian cluster pendant chandelier',
        'Full tableware set with glassware & fruit centerpiece',
        'Sideboard credenza buffet console'
      ],
      color: '#8b5cf6',
      position: [0.0, 0, 1.8],
      cameraPosition: [0.0, 2.7, 5.0],
      cameraTarget: [0.0, 0.8, 1.6],
      bounds: { minX: -3, maxX: 3, minZ: 0, maxZ: 3.8 }
    },
    {
      id: 'kitchen',
      name: 'Modular Kitchen',
      shortName: 'Kitchen',
      category: 'kitchen',
      areaSqM: 11.0,
      areaSqFt: 118,
      dimensions: '3.8m × 2.9m',
      description: 'L-shaped contemporary modular kitchen featuring Calacatta quartz countertops, soft-close acrylic cabinetry, dual stainless sink, induction hob, range hood, and double-door refrigerator.',
      features: [
        'Stain-resistant antibacterial quartz countertop',
        'Dual-tone soft-close drawers & modular wall shelves',
        'Under-mount stainless steel sink with swivel mixer',
        'Built-in 4-burner induction hob & chimney hood',
        'Double-door stainless steel refrigerator'
      ],
      color: '#f59e0b',
      position: [5.8, 0, 3.8],
      cameraPosition: [5.8, 3.0, 1.6],
      cameraTarget: [5.8, 0.8, 4.2],
      bounds: { minX: 3, maxX: 8.6, minZ: 1, maxZ: 6.6 }
    },
    {
      id: 'master_bedroom',
      name: 'Master Bedroom Suite',
      shortName: 'Master Bed',
      category: 'bedroom',
      areaSqM: 18.0,
      areaSqFt: 194,
      dimensions: '4.5m × 4.0m',
      description: 'Plush master bedroom sanctuary featuring rich walnut parquet flooring, King size bed with upholstered navy headboard, grand 4.0m sliding Almirah wardrobe along the west wall, and en-suite entry.',
      features: [
        'King-size platform bed with hybrid mattress',
        'Grand 4.0m Almirah wardrobe along left (west) wall',
        'Enclosed partition wall with residential door to en-suite bath',
        'Twin bedside nightstands with warm reading lamps'
      ],
      color: '#ec4899',
      position: [-5.4, 0, -3.8],
      cameraPosition: [-3.6, 2.5, 0.2],
      cameraTarget: [-4.6, 0.9, -4.0],
      bounds: { minX: -8.6, maxX: -2, minZ: -6.6, maxZ: -1 }
    },
    {
      id: 'bathroom_1',
      name: 'Master Bathroom (En-Suite)',
      shortName: 'Master Bath',
      category: 'bathroom',
      areaSqM: 5.5,
      areaSqFt: 59,
      dimensions: '2.6m × 2.1m',
      description: 'Private master en-suite fully enclosed with full-height walls and door. Features a glass rain shower cubicle, vanity mirror cabinet, wall-hung WC, and matte black hardware.',
      features: [
        'Enclosed with full solid partition wall & door gate',
        'Walk-in glass thermostatic rain shower cubicle',
        'Vanity storage unit with ceramic undermount sink',
        'Wall-hung concealed cistern WC'
      ],
      color: '#06b6d4',
      position: [-7.2, 0, -5.2],
      cameraPosition: [-7.2, 2.5, -2.4],
      cameraTarget: [-7.2, 0.8, -5.2],
      bounds: { minX: -8.6, maxX: -5.8, minZ: -6.6, maxZ: -3.8 }
    },
    {
      id: 'bedroom_2',
      name: 'Guest Bedroom',
      shortName: 'Bedroom 2',
      category: 'bedroom',
      areaSqM: 13.5,
      areaSqFt: 145,
      dimensions: '3.8m × 3.5m',
      description: 'Cozy second bedroom furnished with a queen-size platform bed, 50" wall-mounted smart TV console, built-in study desk with ergonomic chair, and double-door storage wardrobe.',
      features: [
        'Queen-size platform bed with upholstered frame',
        '50" Smart TV & media wall console',
        'Study workstation desk & ergonomic office chair',
        'Dual-door wardrobe storage cabinet'
      ],
      color: '#14b8a6',
      position: [5.8, 0, -3.8],
      cameraPosition: [5.8, 2.9, -0.1],
      cameraTarget: [5.8, 0.8, -4.0],
      bounds: { minX: 3, maxX: 8.6, minZ: -6.6, maxZ: -1 }
    },
    {
      id: 'bathroom_2',
      name: 'Common Bathroom & Vanity',
      shortName: 'Common Bath',
      category: 'bathroom',
      areaSqM: 5.0,
      areaSqFt: 54,
      dimensions: '2.5m × 2.0m',
      description: 'Guest and family common bathroom with enclosed shower cubicle and an illuminated external vanity washbasin on the hallway side wall with 100% clear entry path.',
      features: [
        'Full bathroom partition wall with residential door gate',
        'External vanity washbasin flush on hallway side wall',
        'Enclosed glass shower cubicle inside',
        'Ceramic toilet seat with dual-flush tank'
      ],
      color: '#0284c7',
      position: [0.5, 0, -4.8],
      cameraPosition: [0.5, 2.5, -0.9],
      cameraTarget: [0.5, 0.8, -4.8],
      bounds: { minX: -2, maxX: 3, minZ: -6.6, maxZ: -3 }
    }
  ],
  interactiveObjects: [
    {
      id: 'sofa_1500_2bhk',
      roomId: 'living',
      name: 'Modern Sectional Sofa',
      category: 'Furniture',
      description: 'Custom 5-seater L-shaped fabric sectional sofa upholstered in stain-resistant charcoal linen with high-density foam cushions.',
      specs: ['Dimensions: 3.0m W x 2.0m D', 'Fabric: Performance Charcoal Linen', 'Frame: Kiln-dried hardwood'],
      dimensions: '3.0m × 2.0m × 0.85m',
      position: [-6.4, 0.45, 4.6],
      hotspotPosition: [-6.4, 1.1, 4.6]
    },
    {
      id: 'tv_1500_2bhk',
      roomId: 'living',
      name: '65" 4K Smart OLED TV & Wall Unit',
      category: 'Electronics',
      description: 'Ultra-slim 65-inch 4K OLED display mounted on a custom dark oak slat media panel with concealed cable management and soundbar.',
      specs: ['Display: 65" 4K OLED HDR', 'Audio: Dolby Atmos Soundbar', 'Console: Floating oak shelf'],
      dimensions: '1.8m × 0.2m × 1.2m',
      position: [-3.25, 1.3, 3.8],
      hotspotPosition: [-3.25, 1.7, 3.8]
    },
    {
      id: 'dining_1500_2bhk',
      roomId: 'dining',
      name: 'Solid Oak 6-Seater Dining Set & Tableware',
      category: 'Furniture',
      description: 'Contemporary solid Scandinavian oak dining table paired with 6 ergonomic chairs, ceramic dinner plates, wine goblets, and fruit centerpiece.',
      specs: ['Table Top: Natural Oak', 'Seats: 6 Upholstered Chairs', 'Decor: Dinner plates, glasses & fruit bowl'],
      dimensions: '1.8m × 1.0m × 0.76m',
      position: [0.0, 0.4, 1.8],
      hotspotPosition: [0.0, 1.2, 1.8]
    },
    {
      id: 'kitchen_1500_2bhk',
      roomId: 'kitchen',
      name: 'Quartz Countertop & Modular Shelves',
      category: 'Kitchen Fixture',
      description: 'Stain-resistant Calacatta white quartz countertop with seamless undermount double-bowl sink, induction hob, range hood, and upper modular shelves.',
      specs: ['Material: Engineered Quartz', 'Sink: 304 Stainless Dual Basin with Tap', 'Shelves: Dual-tone modular wall shelves'],
      dimensions: '3.6m × 0.9m × 0.9m',
      position: [5.8, 0.5, 4.0],
      hotspotPosition: [5.8, 1.2, 4.0]
    },
    {
      id: 'fridge_1500_2bhk',
      roomId: 'kitchen',
      name: 'French Door Stainless Steel Refrigerator',
      category: 'Appliance',
      description: '650L Capacity Smart French Door Stainless Steel Refrigerator with dual cooling technology and external dispenser.',
      specs: ['Capacity: 650 Liters', 'Energy Rating: 5-Star Smart Inverter', 'Finish: Stainless Steel'],
      dimensions: '0.9m × 0.85m × 1.85m',
      position: [7.8, 0.92, 2.0],
      hotspotPosition: [7.8, 1.6, 2.0]
    },
    {
      id: 'bed_1500_2bhk',
      roomId: 'master_bedroom',
      name: 'King Size Velvet Platform Bed',
      category: 'Bedroom',
      description: 'Plush King Size platform bed featuring an extended winged velvet headboard, built-in USB charging ports, and ortho hybrid mattress.',
      specs: ['Size: King (1.98m x 2.03m)', 'Mattress: 12-inch Pocket Spring Hybrid', 'Headboard: Navy Tufted Velvet'],
      dimensions: '2.0m × 2.1m × 1.2m',
      position: [-3.8, 0.5, -4.8],
      hotspotPosition: [-3.8, 1.2, -4.8]
    },
    {
      id: 'wardrobe_1500_2bhk',
      roomId: 'master_bedroom',
      name: 'Grand 4.0m Left-Wall Almirah Wardrobe',
      category: 'Furniture',
      description: 'Expansive 4.0m wide Almirah wardrobe along the left (west) wall facing the room, featuring 4 sliding doors, chrome handles, and modular storage.',
      specs: ['Width: 4.0m Left Wall Almirah', 'Placement: West Wall (Left Side)', 'Finish: Dark Walnut & Off-White Doors'],
      dimensions: '4.0m × 0.55m × 2.5m',
      position: [-8.2, 1.25, -3.6],
      hotspotPosition: [-8.2, 1.8, -3.6]
    }
  ],
  guidedTourSequence: [
    'entrance',
    'living',
    'balcony',
    'dining',
    'kitchen',
    'master_bedroom',
    'bathroom_1',
    'bedroom_2',
    'bathroom_2'
  ]
};

// =========================================================================
// 2. CONFIG 2: 1,500 SQ FT — 3 BHK (SMART COMPACT 3 BEDROOM • ₹1.08 CRORE)
// =========================================================================
export const CONFIG_1500_3BHK: FlatConfigData = {
  id: '1500_3bhk',
  dimension: '1500',
  bhk: '3bhk',
  name: 'Skyline Residence (3 BHK Smart • 1,500 sq ft)',
  subtitle: '3 BHK Smart Compact Efficient Living',
  tagline: 'Smart 3-Bedroom Layout • 1,500 sq ft',
  badge: '3 BHK | 1,500 sq ft',
  price: '₹1.08 Crore',
  rawPrice: 10800000,
  pricePerSqFt: '₹7,200 / sq ft',
  totalAreaSqFt: 1500,
  carpetAreaSqFt: 1210,
  totalAreaSqM: 139,
  type: '3 BHK Smart Apartment',
  bedrooms: 3,
  bathrooms: 2,
  balconies: 1,
  parking: '1 Dedicated Covered Space',
  possession: 'Ready to Move In',
  facing: 'North-East (Vastu Compliant)',
  flooring: 'Vitrified High-Gloss Floor & Wooden Laminate in Bedrooms',
  location: 'Skyline Heights, Sector 42',
  address: 'Unit 704, Skyline Heights, Sector 42, Prime Avenue',
  highlights: [
    'Smart Space-Optimized 3 Bedroom Architectural Planning',
    'Master Bedroom with En-Suite Bath + Bedroom 2 + Bedroom 3 / Study',
    'Integrated Living & Dining Lounge with Balcony Sliders',
    'Efficient Parallel Modular Kitchen with Quartz Counter',
    'Modular Wall-Bed / Daybed Setup in 3rd Bedroom for Versatility',
    '1 Dedicated Covered Parking Space'
  ],
  amenities: [
    '24/7 Multi-Tier CCTV & Biometric Security',
    'Clubhouse & Rooftop Swimming Pool',
    'Equipped Fitness Center & Yoga Zone',
    'Dedicated EV Charging Bay in Basement',
    'High-Speed OTIS Elevators',
    '100% DG Power Backup for All Points'
  ],
  financials: {
    basePrice: '₹99,00,000',
    parkingCharges: '₹5,50,000 (1 Covered)',
    clubhouseCharges: '₹3,50,000 (Lifetime Access)',
    maintenanceCharges: '₹4,800 / month',
    stampDutyEstimate: '₹6,48,000 (6% State Registration)',
    totalAllInclusive: '₹1.08 Crore (+ Gov. Levies)',
    estimatedEmi: '₹85,900 / month',
    emiTenure: '20 Years',
    emiInterestRate: '8.5% p.a.'
  },
  disclaimer: 'Academic Demonstration Project: All dimensions, floor areas, pricing metrics, and architectural specifications are realistic sample demo data for project evaluation.',
  rooms: [
    {
      id: 'entrance',
      name: 'Entrance Foyer',
      shortName: 'Foyer',
      category: 'entrance',
      areaSqM: 6.5,
      areaSqFt: 70,
      dimensions: '2.6m × 2.5m',
      description: 'Compact and elegant entrance foyer with smart electronic access lock, coat rack, key organizer, and shoe cabinet.',
      features: [
        'Smart digital access door lock',
        'Wall console and vanity mirror',
        'Shoe cabinet with seating top'
      ],
      color: '#6366f1',
      position: [-1.5, 0, 5.2],
      cameraPosition: [-1.5, 2.5, 7.4],
      cameraTarget: [-1.5, 0.9, 4.0],
      bounds: { minX: -3, maxX: 0, minZ: 3.8, maxZ: 6.6 }
    },
    {
      id: 'living',
      name: 'Smart Living & Dining Lounge',
      shortName: 'Living-Dining',
      category: 'living',
      areaSqM: 22.0,
      areaSqFt: 237,
      dimensions: '5.0m × 4.4m',
      description: 'Smart combined living and dining lounge designed for optimum utility with a 4-seater modular sofa, dining nook with extendable table, and sliding glass balcony access.',
      features: [
        'Sliding panoramic balcony doors',
        'Modular 4-seater fabric sofa with ottoman',
        'Extendable 4-to-6 seater dining table',
        '55" 4K Smart TV mounted on accent timber panel'
      ],
      color: '#3b82f6',
      position: [-5.6, 0, 3.8],
      cameraPosition: [-5.6, 2.8, 7.2],
      cameraTarget: [-5.6, 0.8, 3.2],
      bounds: { minX: -8.6, maxX: -2.8, minZ: 1, maxZ: 6.6 }
    },
    {
      id: 'balcony',
      name: 'Living Balcony Deck',
      shortName: 'Balcony',
      category: 'outdoor',
      areaSqM: 8.5,
      areaSqFt: 91,
      dimensions: '5.0m × 1.7m',
      description: 'Fresh-air outdoor balcony deck with toughened glass safety railing, teak deck tiles, and vertical garden planters.',
      features: [
        'Toughened glass railing',
        'Composite teak wood decking',
        '2-chair patio bistro set'
      ],
      color: '#10b981',
      position: [-5.6, 0, 7.5],
      cameraPosition: [-5.6, 2.2, 5.6],
      cameraTarget: [-5.6, 0.8, 7.8],
      bounds: { minX: -8.6, maxX: -2.8, minZ: 6.6, maxZ: 8.4 }
    },
    {
      id: 'kitchen',
      name: 'Compact Modular Kitchen',
      shortName: 'Kitchen',
      category: 'kitchen',
      areaSqM: 9.5,
      areaSqFt: 102,
      dimensions: '3.4m × 2.8m',
      description: 'Streamlined parallel modular kitchen with white quartz countertop, stainless sink, 3-burner gas/induction hob, chimney, and refrigerator niche.',
      features: [
        'Quartz countertop with built-in hob',
        'Overhead hydraulic lift soft-close cabinets',
        'Single-bowl undermount sink with chrome mixer',
        'Refrigerator & microwave enclosure'
      ],
      color: '#f59e0b',
      position: [5.8, 0, 4.2],
      cameraPosition: [5.8, 2.9, 1.8],
      cameraTarget: [5.8, 0.8, 4.4],
      bounds: { minX: 3.2, maxX: 8.6, minZ: 1.8, maxZ: 6.6 }
    },
    {
      id: 'master_bedroom',
      name: 'Master Bedroom Suite',
      shortName: 'Master Bed',
      category: 'bedroom',
      areaSqM: 16.0,
      areaSqFt: 172,
      dimensions: '4.2m × 3.8m',
      description: 'Comfortable master bedroom sanctuary with queen-size platform bed, 3.2m sliding wardrobe along the west wall, and attached private en-suite bathroom.',
      features: [
        'Queen-size platform bed with storage',
        '3.2m sliding door wardrobe',
        'Partition wall with door leading to En-Suite Bathroom',
        'Bedside reading lamps & floating side tables'
      ],
      color: '#ec4899',
      position: [-5.4, 0, -3.8],
      cameraPosition: [-3.6, 2.5, 0.2],
      cameraTarget: [-4.6, 0.9, -4.0],
      bounds: { minX: -8.6, maxX: -2.2, minZ: -6.6, maxZ: -1 }
    },
    {
      id: 'bathroom_1',
      name: 'Master En-Suite Bathroom',
      shortName: 'Master Bath',
      category: 'bathroom',
      areaSqM: 5.0,
      areaSqFt: 54,
      dimensions: '2.5m × 2.0m',
      description: 'Private enclosed master en-suite bathroom with glass partition rain shower, ceramic vanity basin, and wall-hung toilet.',
      features: [
        'Glass shower cubicle with chrome rain head',
        'Floating vanity storage unit with mirror',
        'Concealed cistern wall-hung WC'
      ],
      color: '#06b6d4',
      position: [-7.2, 0, -5.2],
      cameraPosition: [-7.2, 2.5, -2.4],
      cameraTarget: [-7.2, 0.8, -5.2],
      bounds: { minX: -8.6, maxX: -5.8, minZ: -6.6, maxZ: -3.8 }
    },
    {
      id: 'bedroom_2',
      name: 'Bedroom 2 (Guest / Kids)',
      shortName: 'Bedroom 2',
      category: 'bedroom',
      areaSqM: 12.0,
      areaSqFt: 129,
      dimensions: '3.6m × 3.3m',
      description: 'Secondary bedroom furnished with a comfortable bed, 2-door wardrobe, study desk, and large window for daylight.',
      features: [
        'Comfortable platform bed with headboard',
        'Dual-door wardrobe cabinet',
        'Integrated study desk & chair'
      ],
      color: '#14b8a6',
      position: [5.8, 0, -3.8],
      cameraPosition: [5.8, 2.8, -0.2],
      cameraTarget: [5.8, 0.8, -4.0],
      bounds: { minX: 3.2, maxX: 8.6, minZ: -6.6, maxZ: -1 }
    },
    {
      id: 'bedroom_3',
      name: 'Bedroom 3 (Smart Room / Study)',
      shortName: 'Bed 3 / Study',
      category: 'bedroom',
      areaSqM: 10.0,
      areaSqFt: 108,
      dimensions: '3.2m × 3.1m',
      description: 'Versatile 3rd bedroom in 1,500 sq ft smart footprint, serving as a dedicated kids room or work-from-home office with daybed and executive workstation.',
      features: [
        'Space-saving daybed / single platform bed',
        'Workstation desk with laptop dock & storage drawers',
        'Modular wall shelves & compact wardrobe'
      ],
      color: '#84cc16',
      position: [1.5, 0, 1.8],
      cameraPosition: [0.0, 2.6, 4.2],
      cameraTarget: [1.5, 0.8, 1.8],
      bounds: { minX: -0.2, maxX: 3.2, minZ: 0, maxZ: 3.6 }
    },
    {
      id: 'bathroom_2',
      name: 'Common Bathroom',
      shortName: 'Common Bath',
      category: 'bathroom',
      areaSqM: 4.8,
      areaSqFt: 52,
      dimensions: '2.4m × 2.0m',
      description: 'Centrally located guest & family bathroom with shower area, washbasin, and toilet.',
      features: [
        'Enclosed bathroom with residential door',
        'Glass shower partition',
        'Ceramic vanity washbasin & LED mirror'
      ],
      color: '#0284c7',
      position: [0.5, 0, -4.8],
      cameraPosition: [0.5, 2.5, -0.9],
      cameraTarget: [0.5, 0.8, -4.8],
      bounds: { minX: -2.2, maxX: 3.2, minZ: -6.6, maxZ: -3 }
    }
  ],
  interactiveObjects: [
    {
      id: 'sofa_1500_3bhk',
      roomId: 'living',
      name: 'Modular 4-Seater Living Sofa',
      category: 'Furniture',
      description: 'Space-efficient 4-seater fabric sectional couch with storage ottoman in stain-resistant charcoal linen.',
      specs: ['Dimensions: 2.6m W x 1.8m D', 'Feature: Integrated storage ottoman', 'Upholstery: Charcoal performance fabric'],
      dimensions: '2.6m × 1.8m × 0.85m',
      position: [-6.2, 0.45, 4.6],
      hotspotPosition: [-6.2, 1.1, 4.6]
    },
    {
      id: 'tv_1500_3bhk',
      roomId: 'living',
      name: '55" 4K Smart TV & Wall Slat Unit',
      category: 'Electronics',
      description: '55-inch 4K Smart HDR TV mounted on a vertical dark oak slat panel with floating soundbar shelf.',
      specs: ['Display: 55" 4K HDR', 'Audio: Integrated Soundbar', 'Panel: Dark oak slat design'],
      dimensions: '1.5m × 0.2m × 1.1m',
      position: [-3.0, 1.3, 3.8],
      hotspotPosition: [-3.0, 1.7, 3.8]
    },
    {
      id: 'kitchen_1500_3bhk',
      roomId: 'kitchen',
      name: 'Compact Quartz Kitchen Counter',
      category: 'Kitchen Fixture',
      description: 'Streamlined quartz kitchen counter with induction hob, overhead dual-tone modular cabinets, and stainless sink.',
      specs: ['Counter: Calacatta Quartz', 'Hob: 3-Burner Induction', 'Storage: Soft-close overheads'],
      dimensions: '3.2m × 0.85m × 0.9m',
      position: [5.8, 0.5, 4.2],
      hotspotPosition: [5.8, 1.2, 4.2]
    },
    {
      id: 'bed3_workstation_1500_3bhk',
      roomId: 'bedroom_3',
      name: 'Smart Study Desk & Single Daybed',
      category: 'Furniture',
      description: 'Integrated dual-purpose study workstation with monitor setup and convertible daybed in 3rd bedroom.',
      specs: ['Desk: Oak finish work desk (1.2m x 0.6m)', 'Bed: Daybed with underbed drawers', 'Feature: Space-saving 3rd room layout'],
      dimensions: '1.4m × 0.8m × 0.75m',
      position: [1.5, 0.4, 1.8],
      hotspotPosition: [1.5, 1.1, 1.8]
    },
    {
      id: 'master_bed_1500_3bhk',
      roomId: 'master_bedroom',
      name: 'Queen Size Platform Bed with Storage',
      category: 'Bedroom',
      description: 'Modern queen-size platform bed with padded headboard and hydraulic lift mattress base.',
      specs: ['Size: Queen (1.6m x 2.0m)', 'Storage: Hydraulic underbed storage', 'Headboard: Upholstered linen'],
      dimensions: '1.8m × 2.1m × 1.1m',
      position: [-3.8, 0.5, -4.8],
      hotspotPosition: [-3.8, 1.2, -4.8]
    }
  ],
  guidedTourSequence: [
    'entrance',
    'living',
    'balcony',
    'kitchen',
    'master_bedroom',
    'bathroom_1',
    'bedroom_2',
    'bedroom_3',
    'bathroom_2'
  ]
};

// =========================================================================
// 3. CONFIG 3: 2,000 SQ FT — 2 BHK (GRAND PRESIDENTIAL SUITE • ₹1.35 CRORE)
// =========================================================================
export const CONFIG_2000_2BHK: FlatConfigData = {
  id: '2000_2bhk',
  dimension: '2000',
  bhk: '2bhk',
  name: 'Skyline Grand Presidential 2 BHK (2,000 sq ft)',
  subtitle: '2 BHK Ultra-Luxury Palatial Suite',
  tagline: 'Palatial Open Living • 2,000 sq ft',
  badge: '2 BHK | 2,000 sq ft',
  price: '₹1.35 Crore',
  rawPrice: 13500000,
  pricePerSqFt: '₹6,750 / sq ft',
  totalAreaSqFt: 2000,
  carpetAreaSqFt: 1550,
  totalAreaSqM: 186,
  type: '2 BHK Presidential Suite',
  bedrooms: 2,
  bathrooms: 3,
  balconies: 2,
  parking: '2 Dedicated Covered Spaces (Side-by-Side)',
  possession: 'Ready to Move In',
  facing: 'North-East & East (Corner Unit)',
  flooring: 'Imported Statuario Italian Marble & Herringbone Engineered Wood',
  location: 'Skyline Heights, Sector 42',
  address: 'Unit 1202, Skyline Heights, Sector 42, Prime Avenue',
  highlights: [
    'Massive 32 m² Palatial Living Lounge with Statuario Marble',
    'Dual Private Balconies: Living Sundeck + Master Private Balcony',
    'Grand Master Bedroom with Walk-in Wardrobe & Spa En-Suite',
    'Island Modular Kitchen with Breakfast Bar & Wine Cellar Niche',
    'Guest Powder Room + 2 Full Luxury En-Suite Bathrooms',
    '2 Dedicated Covered Basement Parking Bays'
  ],
  amenities: [
    'Concierge Reception & 24/7 Multi-Tier Biometric Security',
    'Infinity Edge Rooftop Pool & Jacuzzi',
    'World-Class Health Club, Spa & Sauna',
    '2 Dedicated Covered Basement Parking Bays + EV Supercharger',
    'Private High-Speed Keycard-Activated Elevators',
    '100% Uninterrupted DG Power Backup with Auto-Phase Sync'
  ],
  financials: {
    basePrice: '₹1,24,00,000',
    parkingCharges: '₹7,00,000 (2 Covered Spaces)',
    clubhouseCharges: '₹4,00,000 (Presidential Tier)',
    maintenanceCharges: '₹5,900 / month',
    stampDutyEstimate: '₹8,10,000 (6% State Registration)',
    totalAllInclusive: '₹1.35 Crore (+ Gov. Levies)',
    estimatedEmi: '₹1,07,400 / month',
    emiTenure: '20 Years',
    emiInterestRate: '8.5% p.a.'
  },
  disclaimer: 'Academic Demonstration Project: All dimensions, floor areas, pricing metrics, and architectural specifications are realistic sample demo data for project evaluation.',
  rooms: [
    {
      id: 'entrance',
      name: 'Grand Foyer & Gallery',
      shortName: 'Foyer',
      category: 'entrance',
      areaSqM: 9.5,
      areaSqFt: 102,
      dimensions: '3.2m × 3.0m',
      description: 'Expansive entrance gallery featuring double residential doors, Italian marble inlay flooring, full-height display niche with accent lighting, and digital smart intercom.',
      features: [
        'Double-leaf smart biometric security door gate',
        'Designer marble inlay floor accent',
        'Concealed coat & shoe wardrobe wall',
        'Video smart intercom hub'
      ],
      color: '#6366f1',
      position: [-1.5, 0, 5.8],
      cameraPosition: [-1.5, 2.7, 8.2],
      cameraTarget: [-1.5, 0.9, 4.4],
      bounds: { minX: -3.2, maxX: 0, minZ: 4.2, maxZ: 7.2 }
    },
    {
      id: 'living',
      name: 'Palatial Living Lounge',
      shortName: 'Living',
      category: 'living',
      areaSqM: 32.0,
      areaSqFt: 344,
      dimensions: '6.4m × 5.0m',
      description: 'Spectacular palatial living lounge adorned with Statuario marble floors, custom 7-seater sectional couch, 75" 4K theater media wall with floating fire console, and glass slider to main balcony.',
      features: [
        'Floor-to-ceiling panoramic glass slider to Main Balcony',
        '7-seater luxury velvet sectional couch with chaise',
        '75" Home Theater 4K display & floating sound console',
        'Recessed dimmable cove ceiling with LED warm strips'
      ],
      color: '#3b82f6',
      position: [-6.8, 0, 4.2],
      cameraPosition: [-6.8, 3.2, 8.2],
      cameraTarget: [-6.8, 0.8, 3.5],
      bounds: { minX: -10.4, maxX: -3.2, minZ: 1.2, maxZ: 7.2 }
    },
    {
      id: 'balcony',
      name: 'Main Panoramic Skyline Balcony',
      shortName: 'Main Balcony',
      category: 'outdoor',
      areaSqM: 12.0,
      areaSqFt: 129,
      dimensions: '6.4m × 1.9m',
      description: 'Expansive private outdoor terrace deck with teak wood planking, frameless glass safety balustrade, outdoor coffee table lounge, and hanging planter vertical garden.',
      features: [
        'Frameless toughened glass safety balustrade',
        'Composite teak wood weather-proof decking',
        '4-piece outdoor wicker coffee lounge set',
        'Vertical green garden wall with drip irrigation'
      ],
      color: '#10b981',
      position: [-6.8, 0, 8.3],
      cameraPosition: [-6.8, 2.4, 6.2],
      cameraTarget: [-6.8, 0.8, 8.6],
      bounds: { minX: -10.4, maxX: -3.2, minZ: 7.2, maxZ: 9.2 }
    },
    {
      id: 'dining',
      name: 'Formal Dining Hall',
      shortName: 'Dining',
      category: 'living',
      areaSqM: 16.0,
      areaSqFt: 172,
      dimensions: '4.4m × 3.6m',
      description: 'Formal dining hall adjoining the kitchen breakfast island, complete with an 8-seater smoked oak dining table, gold-trimmed modern chandelier, and fine tableware.',
      features: [
        '8-seater smoked oak designer dining table & armchairs',
        'Designer gold-brass ring pendant chandelier',
        'Porcelain dinnerware, crystal goblets & floral centerpiece',
        'Floating bar credenza with wine glass rack'
      ],
      color: '#8b5cf6',
      position: [0.0, 0, 2.0],
      cameraPosition: [0.0, 2.9, 5.5],
      cameraTarget: [0.0, 0.8, 1.8],
      bounds: { minX: -3.2, maxX: 3.2, minZ: 0, maxZ: 4.2 }
    },
    {
      id: 'kitchen',
      name: 'Island Kitchen & Breakfast Bar',
      shortName: 'Kitchen',
      category: 'kitchen',
      areaSqM: 16.0,
      areaSqFt: 172,
      dimensions: '4.8m × 3.3m',
      description: 'Gourmet island kitchen featuring a central quartz breakfast counter with bar stools, touch-control induction cooking station, concealed dishwasher, wine cooler, and double refrigerator.',
      features: [
        'Central quartz island with breakfast bar stools',
        'German soft-close hardware & modular acrylic upper cabinets',
        'Dual under-mount stainless sink with pull-out spray faucet',
        'Built-in smart induction hob, touch chimney & double-door fridge'
      ],
      color: '#f59e0b',
      position: [6.8, 0, 4.2],
      cameraPosition: [6.8, 3.3, 1.8],
      cameraTarget: [6.8, 0.8, 4.6],
      bounds: { minX: 3.2, maxX: 10.4, minZ: 1.2, maxZ: 7.2 }
    },
    {
      id: 'master_bedroom',
      name: 'Grand Master Suite Sanctuary',
      shortName: 'Master Suite',
      category: 'bedroom',
      areaSqM: 24.0,
      areaSqFt: 258,
      dimensions: '5.2m × 4.6m',
      description: 'Lavish master retreat with herringbone wood flooring, King platform bed with tufted headboard, 4.5m west-wall wardrobe, access to private Master Balcony, and en-suite master bath.',
      features: [
        'King platform bed with orthopaedic memory foam mattress',
        'Grand 4.5m sliding Almirah wardrobe along the left wall',
        'Direct sliding glass door to private Master Balcony Sundeck',
        'Full partition wall with residential door to Master En-Suite'
      ],
      color: '#ec4899',
      position: [-6.4, 0, -4.2],
      cameraPosition: [-4.2, 2.8, 0.0],
      cameraTarget: [-5.6, 0.9, -4.4],
      bounds: { minX: -10.4, maxX: -2.4, minZ: -7.4, maxZ: -1.0 }
    },
    {
      id: 'master_balcony',
      name: 'Master Suite Private Sundeck',
      shortName: 'Master Balcony',
      category: 'outdoor',
      areaSqM: 7.0,
      areaSqFt: 75,
      dimensions: '4.0m × 1.7m',
      description: 'Exclusive private balcony attached to the master suite for morning coffee and sunset relaxation, featuring glass railings and comfortable sun loungers.',
      features: [
        'Private sunbed & coffee table',
        'Glass safety balustrade with unhindered views',
        'Rich teak composite floor decking',
        'Warm ambient sconce lighting'
      ],
      color: '#059669',
      position: [-10.8, 0, -4.2],
      cameraPosition: [-9.0, 2.4, -2.0],
      cameraTarget: [-11.0, 0.8, -4.2],
      bounds: { minX: -12.4, maxX: -10.4, minZ: -6.4, maxZ: -2.0 }
    },
    {
      id: 'bathroom_1',
      name: 'Master Luxury Spa Bath',
      shortName: 'Master Bath',
      category: 'bathroom',
      areaSqM: 7.5,
      areaSqFt: 81,
      dimensions: '3.0m × 2.5m',
      description: 'Spa-inspired master bathroom enclosed with solid partition walls and door. Features a walk-in thermostatic rain shower, twin vanity mirrors, soaking tub, and concealed fixtures.',
      features: [
        'Enclosed solid wall construction with private door gate',
        'Thermostatic rainfall walk-in shower with frameless glass',
        'Double vanity cabinet with twin illuminated LED mirrors',
        'Concealed cistern wall-hung toilet with bidet spray'
      ],
      color: '#06b6d4',
      position: [-8.4, 0, -5.8],
      cameraPosition: [-8.4, 2.6, -2.6],
      cameraTarget: [-8.4, 0.8, -5.8],
      bounds: { minX: -10.4, maxX: -6.8, minZ: -7.4, maxZ: -4.2 }
    },
    {
      id: 'bedroom_2',
      name: 'Executive Guest Suite',
      shortName: 'Bedroom 2',
      category: 'bedroom',
      areaSqM: 18.0,
      areaSqFt: 194,
      dimensions: '4.8m × 3.8m',
      description: 'Expansive second bedroom suite complete with a Queen platform bed, bedside sconces, built-in lounge nook, smart TV media console, and dual wardrobe.',
      features: [
        'Queen-size platform bed with upholstered fabric headboard',
        '55" 4K Smart TV & media wall console',
        'Built-in study desk with storage drawers',
        'Full-height wardrobe with mirrored sliding doors'
      ],
      color: '#14b8a6',
      position: [6.8, 0, -4.2],
      cameraPosition: [6.8, 3.0, -0.2],
      cameraTarget: [6.8, 0.8, -4.4],
      bounds: { minX: 3.2, maxX: 10.4, minZ: -7.4, maxZ: -1.0 }
    },
    {
      id: 'bathroom_2',
      name: 'Guest Bathroom 2 (En-Suite)',
      shortName: 'Bath 2',
      category: 'bathroom',
      areaSqM: 5.5,
      areaSqFt: 59,
      dimensions: '2.6m × 2.1m',
      description: 'Enclosed second bathroom with glass shower cubicle, ceramic vanity basin, anti-fog mirror, and porcelain wall tiles.',
      features: [
        'Full partition wall with door gate',
        'Glass shower cubicle with chrome rain head',
        'Floating vanity cabinet with ceramic basin',
        'Concealed cistern wall-hung WC'
      ],
      color: '#0284c7',
      position: [0.8, 0, -5.2],
      cameraPosition: [0.8, 2.6, -1.2],
      cameraTarget: [0.8, 0.8, -5.2],
      bounds: { minX: -1.2, maxX: 3.2, minZ: -7.4, maxZ: -3.2 }
    },
    {
      id: 'bathroom_3',
      name: 'Guest Powder Room',
      shortName: 'Powder Room',
      category: 'bathroom',
      areaSqM: 4.0,
      areaSqFt: 43,
      dimensions: '2.2m × 1.8m',
      description: 'Chic designer guest powder room located off the main hallway with backlit circular LED mirror, terrazzo stone basin, and designer matte-black fixtures.',
      features: [
        'Backlit circular designer mirror',
        'Terrazzo stone pedestal washbasin',
        'Private enclosed toilet cubicle with exhaust fan'
      ],
      color: '#f97316',
      position: [-1.8, 0, -2.5],
      cameraPosition: [-1.8, 2.4, 0.2],
      cameraTarget: [-1.8, 0.8, -2.8],
      bounds: { minX: -3.2, maxX: -0.4, minZ: -3.8, maxZ: -1.2 }
    }
  ],
  interactiveObjects: [
    {
      id: 'sofa_2000_2bhk',
      roomId: 'living',
      name: 'Grand 7-Seater Sectional Lounge Couch',
      category: 'Furniture',
      description: 'Palatial 7-seater sectional sofa in stain-resistant charcoal velvet with feather down cushions and chaise lounge.',
      specs: ['Dimensions: 3.8m W x 2.4m D', 'Fabric: Premium Charcoal Velvet', 'Frame: Solid Scandinavian Oak'],
      dimensions: '3.8m × 2.4m × 0.88m',
      position: [-7.6, 0.45, 5.0],
      hotspotPosition: [-7.6, 1.15, 5.0]
    },
    {
      id: 'tv_2000_2bhk',
      roomId: 'living',
      name: '75" 4K OLED Home Theater & Fire Console',
      category: 'Electronics',
      description: 'Massive 75-inch 4K OLED display mounted on an acoustic dark walnut slat wall with an integrated electric ambient flame fireplace.',
      specs: ['Display: 75" 4K OLED 120Hz', 'Audio: Integrated 7.1.2 Dolby Atmos Soundbar', 'Feature: Electric ambient fireplace'],
      dimensions: '2.4m × 0.25m × 1.4m',
      position: [-3.4, 1.4, 4.2],
      hotspotPosition: [-3.4, 1.8, 4.2]
    },
    {
      id: 'island_2000_2bhk',
      roomId: 'kitchen',
      name: 'Central Quartz Island & Breakfast Stools',
      category: 'Kitchen Fixture',
      description: 'Freestanding Calacatta quartz island counter with integrated induction hob, prep sink, storage wine rack, and 3 modern bar stools.',
      specs: ['Countertop: Engineered Calacatta Quartz', 'Stools: 3 Upholstered High Chairs', 'Feature: Built-in Wine Rack & Prep Sink'],
      dimensions: '2.4m × 1.0m × 0.92m',
      position: [6.8, 0.5, 3.4],
      hotspotPosition: [6.8, 1.25, 3.4]
    },
    {
      id: 'bed_2000_2bhk',
      roomId: 'master_bedroom',
      name: 'Presidential King Bed with Tufted Wing Headboard',
      category: 'Bedroom',
      description: 'Opulent King Size bed featuring a floor-to-ceiling tufted royal navy velvet headboard, built-in wireless nightstands, and premium memory foam.',
      specs: ['Size: Grand King (2.05m x 2.15m)', 'Headboard: Floor-to-Ceiling Winged Velvet', 'Tech: Wireless Qi charging pads on both nightstands'],
      dimensions: '2.2m × 2.25m × 1.35m',
      position: [-4.4, 0.5, -5.2],
      hotspotPosition: [-4.4, 1.2, -5.2]
    }
  ],
  guidedTourSequence: [
    'entrance',
    'living',
    'balcony',
    'dining',
    'kitchen',
    'master_bedroom',
    'master_balcony',
    'bathroom_1',
    'bedroom_2',
    'bathroom_2',
    'bathroom_3'
  ]
};

// =========================================================================
// 4. CONFIG 4: 2,000 SQ FT — 3 BHK (IMPERIAL LUXURY + STUDY • ₹1.48 CRORE)
// =========================================================================
export const CONFIG_2000_3BHK: FlatConfigData = {
  id: '2000_3bhk',
  dimension: '2000',
  bhk: '3bhk',
  name: 'Skyline Imperial Luxury 3 BHK (2,000 sq ft)',
  subtitle: '3 BHK Presidential Luxury Suite + Executive Study',
  tagline: 'Expansive Executive Living • 2,000 sq ft',
  badge: '3 BHK | 2,000 sq ft',
  price: '₹1.48 Crore',
  rawPrice: 14800000,
  pricePerSqFt: '₹7,400 / sq ft',
  totalAreaSqFt: 2000,
  carpetAreaSqFt: 1580,
  totalAreaSqM: 186,
  type: '3 BHK Presidential Apartment',
  bedrooms: 3,
  bathrooms: 3,
  balconies: 2,
  parking: '2 Dedicated Covered Spaces (Side-by-Side)',
  possession: 'Ready to Move In',
  facing: 'North-East & East (Corner Unit with Dual Sun-Exposure)',
  flooring: 'Imported Statuario Italian Marble & Herringbone Engineered Wood',
  location: 'Skyline Heights, Sector 42',
  address: 'Unit 1401 (Penthouse Tier), Skyline Heights, Sector 42',
  highlights: [
    'Exclusive Corner Layout with 270° Panoramic Cityscape Views',
    '3 Large Bedrooms + Dedicated Executive Workstation Suite',
    '3 Luxury Bathrooms (2 En-Suites + 1 Powder Room)',
    'Dual Private Balconies: Living Sundeck + Master Suite Balcony',
    'Island Modular Kitchen with Breakfast Bar & Utility Zone',
    'Smart Home Automation: Voice & App Lighting, AC, and Curtains'
  ],
  amenities: [
    'Concierge Reception & 24/7 Multi-Tier Biometric Security',
    'Infinity Edge Rooftop Pool & Jacuzzi',
    'World-Class Health Club, Spa & Sauna',
    '2 Dedicated Covered Basement Parking Bays + EV Supercharger',
    'Private High-Speed Keycard-Activated Elevators',
    '100% Uninterrupted DG Power Backup with Auto-Phase Sync'
  ],
  financials: {
    basePrice: '₹1,36,00,000',
    parkingCharges: '₹8,00,000 (2 Covered Spaces)',
    clubhouseCharges: '₹4,00,000 (Presidential Club Tier)',
    maintenanceCharges: '₹6,200 / month',
    stampDutyEstimate: '₹8,88,000 (6% State Registration)',
    totalAllInclusive: '₹1.48 Crore (+ Gov. Levies)',
    estimatedEmi: '₹1,17,800 / month',
    emiTenure: '20 Years',
    emiInterestRate: '8.5% p.a.'
  },
  disclaimer: 'Academic Demonstration Project: All dimensions, floor areas, pricing metrics, and architectural specifications are realistic sample demo data for project evaluation.',
  rooms: [
    {
      id: 'entrance',
      name: 'Grand Foyer & Gallery',
      shortName: 'Foyer',
      category: 'entrance',
      areaSqM: 9.5,
      areaSqFt: 102,
      dimensions: '3.2m × 3.0m',
      description: 'Expansive entrance gallery featuring double residential doors, Italian marble inlay flooring, full-height display niche with accent lighting, and digital smart intercom.',
      features: [
        'Double-leaf smart biometric security door gate',
        'Designer marble inlay floor accent',
        'Concealed coat & shoe wardrobe wall',
        'Video smart intercom hub'
      ],
      color: '#6366f1',
      position: [-1.5, 0, 5.8],
      cameraPosition: [-1.5, 2.7, 8.2],
      cameraTarget: [-1.5, 0.9, 4.4],
      bounds: { minX: -3.2, maxX: 0, minZ: 4.2, maxZ: 7.2 }
    },
    {
      id: 'living',
      name: 'Presidential Living Lounge',
      shortName: 'Living',
      category: 'living',
      areaSqM: 32.0,
      areaSqFt: 344,
      dimensions: '6.4m × 5.0m',
      description: 'Spectacular palatial living lounge adorned with Statuario marble floors, custom 7-seater sectional couch, 75" 4K theater media wall with floating fire console, and glass slider to main balcony.',
      features: [
        'Floor-to-ceiling panoramic glass slider to Main Balcony',
        '7-seater luxury velvet sectional couch with chaise',
        '75" Home Theater 4K display & floating sound console',
        'Recessed dimmable cove ceiling with LED warm strips'
      ],
      color: '#3b82f6',
      position: [-6.8, 0, 4.2],
      cameraPosition: [-6.8, 3.2, 8.2],
      cameraTarget: [-6.8, 0.8, 3.5],
      bounds: { minX: -10.4, maxX: -3.2, minZ: 1.2, maxZ: 7.2 }
    },
    {
      id: 'balcony',
      name: 'Main Panoramic Skyline Balcony',
      shortName: 'Main Balcony',
      category: 'outdoor',
      areaSqM: 12.0,
      areaSqFt: 129,
      dimensions: '6.4m × 1.9m',
      description: 'Expansive private outdoor terrace deck with teak wood planking, frameless glass safety balustrade, outdoor coffee table lounge, and hanging planter vertical garden.',
      features: [
        'Frameless toughened glass safety balustrade',
        'Composite teak wood weather-proof decking',
        '4-piece outdoor wicker coffee lounge set',
        'Vertical green garden wall with drip irrigation'
      ],
      color: '#10b981',
      position: [-6.8, 0, 8.3],
      cameraPosition: [-6.8, 2.4, 6.2],
      cameraTarget: [-6.8, 0.8, 8.6],
      bounds: { minX: -10.4, maxX: -3.2, minZ: 7.2, maxZ: 9.2 }
    },
    {
      id: 'dining',
      name: 'Executive Dining Lounge',
      shortName: 'Dining',
      category: 'living',
      areaSqM: 16.0,
      areaSqFt: 172,
      dimensions: '4.4m × 3.6m',
      description: 'Formal dining hall adjoining the kitchen breakfast island, complete with an 8-seater smoked oak dining table, gold-trimmed modern chandelier, and fine tableware.',
      features: [
        '8-seater smoked oak designer dining table & armchairs',
        'Designer gold-brass ring pendant chandelier',
        'Porcelain dinnerware, crystal goblets & floral centerpiece',
        'Floating bar credenza with wine glass rack'
      ],
      color: '#8b5cf6',
      position: [0.0, 0, 2.0],
      cameraPosition: [0.0, 2.9, 5.5],
      cameraTarget: [0.0, 0.8, 1.8],
      bounds: { minX: -3.2, maxX: 3.2, minZ: 0, maxZ: 4.2 }
    },
    {
      id: 'kitchen',
      name: 'Island Kitchen & Breakfast Bar',
      shortName: 'Kitchen',
      category: 'kitchen',
      areaSqM: 16.0,
      areaSqFt: 172,
      dimensions: '4.8m × 3.3m',
      description: 'Gourmet island kitchen featuring a central quartz breakfast counter with bar stools, touch-control induction cooking station, concealed dishwasher, wine cooler, and double refrigerator.',
      features: [
        'Central quartz island with breakfast bar stools',
        'German soft-close hardware & modular acrylic upper cabinets',
        'Dual under-mount stainless sink with pull-out spray faucet',
        'Built-in smart induction hob, touch chimney & double-door fridge'
      ],
      color: '#f59e0b',
      position: [6.8, 0, 4.2],
      cameraPosition: [6.8, 3.3, 1.8],
      cameraTarget: [6.8, 0.8, 4.6],
      bounds: { minX: 3.2, maxX: 10.4, minZ: 1.2, maxZ: 7.2 }
    },
    {
      id: 'master_bedroom',
      name: 'Master Bedroom Sanctuary',
      shortName: 'Master Suite',
      category: 'bedroom',
      areaSqM: 24.0,
      areaSqFt: 258,
      dimensions: '5.2m × 4.6m',
      description: 'Lavish master retreat with herringbone wood flooring, King platform bed with tufted headboard, 4.5m west-wall wardrobe, access to private Master Balcony, and en-suite master bath.',
      features: [
        'King platform bed with orthopaedic memory foam mattress',
        'Grand 4.5m sliding Almirah wardrobe along the left wall',
        'Direct sliding glass door to private Master Balcony Sundeck',
        'Full partition wall with residential door to Master En-Suite'
      ],
      color: '#ec4899',
      position: [-6.4, 0, -4.2],
      cameraPosition: [-4.2, 2.8, 0.0],
      cameraTarget: [-5.6, 0.9, -4.4],
      bounds: { minX: -10.4, maxX: -2.4, minZ: -7.4, maxZ: -1.0 }
    },
    {
      id: 'master_balcony',
      name: 'Master Suite Private Sundeck',
      shortName: 'Master Balcony',
      category: 'outdoor',
      areaSqM: 7.0,
      areaSqFt: 75,
      dimensions: '4.0m × 1.7m',
      description: 'Exclusive private balcony attached to the master suite for morning coffee and sunset relaxation, featuring glass railings and comfortable sun loungers.',
      features: [
        'Private sunbed & coffee table',
        'Glass safety balustrade with unhindered views',
        'Rich teak composite floor decking',
        'Warm ambient sconce lighting'
      ],
      color: '#059669',
      position: [-10.8, 0, -4.2],
      cameraPosition: [-9.0, 2.4, -2.0],
      cameraTarget: [-11.0, 0.8, -4.2],
      bounds: { minX: -12.4, maxX: -10.4, minZ: -6.4, maxZ: -2.0 }
    },
    {
      id: 'bathroom_1',
      name: 'Master Luxury En-Suite Bath',
      shortName: 'Master Bath',
      category: 'bathroom',
      areaSqM: 7.5,
      areaSqFt: 81,
      dimensions: '3.0m × 2.5m',
      description: 'Spa-inspired master bathroom enclosed with solid partition walls and door. Features a walk-in thermostatic rain shower, twin vanity mirrors, soaking tub, and concealed fixtures.',
      features: [
        'Enclosed solid wall construction with private door gate',
        'Thermostatic rainfall walk-in shower with frameless glass',
        'Double vanity cabinet with twin illuminated LED mirrors',
        'Concealed cistern wall-hung toilet with bidet spray'
      ],
      color: '#06b6d4',
      position: [-8.4, 0, -5.8],
      cameraPosition: [-8.4, 2.6, -2.6],
      cameraTarget: [-8.4, 0.8, -5.8],
      bounds: { minX: -10.4, maxX: -6.8, minZ: -7.4, maxZ: -4.2 }
    },
    {
      id: 'bedroom_2',
      name: 'Guest Bedroom Suite',
      shortName: 'Bedroom 2',
      category: 'bedroom',
      areaSqM: 16.0,
      areaSqFt: 172,
      dimensions: '4.4m × 3.6m',
      description: 'Elegant second bedroom suite complete with a Queen platform bed, bedside sconces, built-in study nook, smart TV media console, and dual wardrobe.',
      features: [
        'Queen-size platform bed with upholstered fabric headboard',
        '55" 4K Smart TV & media wall console',
        'Built-in study desk with storage drawers',
        'Full-height wardrobe with mirrored sliding doors'
      ],
      color: '#14b8a6',
      position: [6.8, 0, -4.2],
      cameraPosition: [6.8, 3.0, -0.2],
      cameraTarget: [6.8, 0.8, -4.4],
      bounds: { minX: 3.2, maxX: 10.4, minZ: -7.4, maxZ: -1.0 }
    },
    {
      id: 'bedroom_3',
      name: 'Bedroom 3 / Executive Study Suite',
      shortName: 'Bed 3 / Study',
      category: 'bedroom',
      areaSqM: 14.5,
      areaSqFt: 156,
      dimensions: '4.0m × 3.6m',
      description: 'Versatile 3rd bedroom configured as a dual-purpose modern study and guest room, featuring a corner executive work desk, ergonomic chair, laptop setup, cozy single/queen bed, and full bookshelf wall.',
      features: [
        'Executive work desk with dual monitors & ergonomic mesh chair',
        'Full-height bookshelf & library display wall',
        'Queen daybed with luxury linen & underbed storage',
        'Large bay window with city skyline views'
      ],
      color: '#84cc16',
      position: [11.2, 0, 0.0],
      cameraPosition: [9.2, 2.8, 0.0],
      cameraTarget: [11.5, 0.8, 0.0],
      bounds: { minX: 8.6, maxX: 13.8, minZ: -3.0, maxZ: 3.0 }
    },
    {
      id: 'bathroom_2',
      name: 'Bathroom 2 (Guest En-Suite)',
      shortName: 'Bath 2',
      category: 'bathroom',
      areaSqM: 5.5,
      areaSqFt: 59,
      dimensions: '2.6m × 2.1m',
      description: 'Enclosed second bathroom with glass shower cubicle, ceramic vanity basin, anti-fog mirror, and porcelain wall tiles.',
      features: [
        'Full partition wall with door gate',
        'Glass shower cubicle with chrome rain head',
        'Floating vanity cabinet with ceramic basin',
        'Concealed cistern wall-hung WC'
      ],
      color: '#0284c7',
      position: [0.8, 0, -5.2],
      cameraPosition: [0.8, 2.6, -1.2],
      cameraTarget: [0.8, 0.8, -5.2],
      bounds: { minX: -1.2, maxX: 3.2, minZ: -7.4, maxZ: -3.2 }
    },
    {
      id: 'bathroom_3',
      name: 'Powder Room / Common Bath',
      shortName: 'Powder Room',
      category: 'bathroom',
      areaSqM: 4.0,
      areaSqFt: 43,
      dimensions: '2.2m × 1.8m',
      description: 'Chic designer guest powder room located off the main hallway with backlit circular LED mirror, terrazzo stone basin, and designer matte-black fixtures.',
      features: [
        'Backlit circular designer mirror',
        'Terrazzo stone pedestal washbasin',
        'Private enclosed toilet cubicle with exhaust fan'
      ],
      color: '#f97316',
      position: [-1.8, 0, -2.5],
      cameraPosition: [-1.8, 2.4, 0.2],
      cameraTarget: [-1.8, 0.8, -2.8],
      bounds: { minX: -3.2, maxX: -0.4, minZ: -3.8, maxZ: -1.2 }
    }
  ],
  interactiveObjects: [
    {
      id: 'sofa_2000_3bhk',
      roomId: 'living',
      name: 'Grand 7-Seater Sectional Lounge Couch',
      category: 'Furniture',
      description: 'Palatial 7-seater sectional sofa in stain-resistant charcoal velvet with feather down cushions and chaise lounge.',
      specs: ['Dimensions: 3.8m W x 2.4m D', 'Fabric: Premium Charcoal Velvet', 'Frame: Solid Scandinavian Oak'],
      dimensions: '3.8m × 2.4m × 0.88m',
      position: [-7.6, 0.45, 5.0],
      hotspotPosition: [-7.6, 1.15, 5.0]
    },
    {
      id: 'tv_2000_3bhk',
      roomId: 'living',
      name: '75" 4K OLED Home Theater & Fire Console',
      category: 'Electronics',
      description: 'Massive 75-inch 4K OLED display mounted on an acoustic dark walnut slat wall with an integrated electric ambient flame fireplace.',
      specs: ['Display: 75" 4K OLED 120Hz', 'Audio: Integrated 7.1.2 Dolby Atmos Soundbar', 'Feature: Electric ambient fireplace'],
      dimensions: '2.4m × 0.25m × 1.4m',
      position: [-3.4, 1.4, 4.2],
      hotspotPosition: [-3.4, 1.8, 4.2]
    },
    {
      id: 'dining_2000_3bhk',
      roomId: 'dining',
      name: 'Smoked Oak 8-Seater Dining Set & Chandelier',
      category: 'Furniture',
      description: 'Grand 8-seater smoked oak dining suite with gold ring chandelier, fine bone china dinner plates, and crystal wine glasses.',
      specs: ['Table: 2.4m Natural Smoked Oak', 'Seats: 8 Velvet Armchairs', 'Chandelier: Brushed Gold LED Rings'],
      dimensions: '2.4m × 1.1m × 0.76m',
      position: [0.0, 0.4, 2.0],
      hotspotPosition: [0.0, 1.2, 2.0]
    },
    {
      id: 'island_2000_3bhk',
      roomId: 'kitchen',
      name: 'Central Quartz Island & Breakfast Stools',
      category: 'Kitchen Fixture',
      description: 'Freestanding Calacatta quartz island counter with integrated induction hob, prep sink, storage wine rack, and 3 modern bar stools.',
      specs: ['Countertop: Engineered Calacatta Quartz', 'Stools: 3 Upholstered High Chairs', 'Feature: Built-in Wine Rack & Prep Sink'],
      dimensions: '2.4m × 1.0m × 0.92m',
      position: [6.8, 0.5, 3.4],
      hotspotPosition: [6.8, 1.25, 3.4]
    },
    {
      id: 'bed_2000_3bhk',
      roomId: 'master_bedroom',
      name: 'Presidential King Bed with Tufted Wing Headboard',
      category: 'Bedroom',
      description: 'Opulent King Size bed featuring a floor-to-ceiling tufted royal navy velvet headboard, built-in wireless nightstands, and premium memory foam.',
      specs: ['Size: Grand King (2.05m x 2.15m)', 'Headboard: Floor-to-Ceiling Winged Velvet', 'Tech: Wireless Qi charging pads on both nightstands'],
      dimensions: '2.2m × 2.25m × 1.35m',
      position: [-4.4, 0.5, -5.2],
      hotspotPosition: [-4.4, 1.2, -5.2]
    },
    {
      id: 'sundeck_2000_3bhk',
      roomId: 'master_balcony',
      name: 'Master Suite Outdoor Daybed Lounge',
      category: 'Outdoor Furniture',
      description: 'Weatherproof private outdoor daybed with plush outdoor pillows, teak side table, and ambient glass-balustrade lighting.',
      specs: ['Structure: Marine-grade teak wood', 'Cushion: Quick-dry UV resistant foam', 'View: 270° Skyline View'],
      dimensions: '1.8m × 1.0m × 0.7m',
      position: [-11.2, 0.4, -4.2],
      hotspotPosition: [-11.2, 1.0, -4.2]
    },
    {
      id: 'study_2000_3bhk',
      roomId: 'bedroom_3',
      name: 'Executive Corner Workstation & Setup',
      category: 'Office / Study',
      description: 'Professional L-shaped executive workstation with dual monitor arms, mechanical keyboard, ergonomic mesh chair, and ambient backlighting.',
      specs: ['Desk: Solid Walnut L-Shaped Top (1.8m x 1.4m)', 'Chair: Ergonomic High-Back Lumbar Support', 'Peripherals: Dual 27" 4K Displays & Laptop Dock'],
      dimensions: '1.8m × 1.4m × 0.75m',
      position: [12.0, 0.45, 0.8],
      hotspotPosition: [12.0, 1.2, 0.8]
    }
  ],
  guidedTourSequence: [
    'entrance',
    'living',
    'balcony',
    'dining',
    'kitchen',
    'master_bedroom',
    'master_balcony',
    'bathroom_1',
    'bedroom_2',
    'bedroom_3',
    'bathroom_2',
    'bathroom_3'
  ]
};

// Map of all 4 configs
export const FLAT_CONFIGS: Record<FlatVariantId, FlatConfigData> = {
  '1500_2bhk': CONFIG_1500_2BHK,
  '1500_3bhk': CONFIG_1500_3BHK,
  '2000_2bhk': CONFIG_2000_2BHK,
  '2000_3bhk': CONFIG_2000_3BHK
};

export const getFlatConfig = (variantId: FlatVariantId = '1500_2bhk'): FlatConfigData => {
  return FLAT_CONFIGS[variantId] || CONFIG_1500_2BHK;
};

export const getFlatVariantId = (dimension: FlatDimension, bhk: FlatBhk): FlatVariantId => {
  return `${dimension}_${bhk}` as FlatVariantId;
};

// Fallback legacy constants
export const PROPERTY_DETAILS = CONFIG_1500_2BHK;
export const ROOMS = CONFIG_1500_2BHK.rooms;
export const INTERACTIVE_OBJECTS = CONFIG_1500_2BHK.interactiveObjects;
export const GUIDED_TOUR_SEQUENCE = CONFIG_1500_2BHK.guidedTourSequence;
