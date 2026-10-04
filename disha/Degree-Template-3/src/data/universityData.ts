export interface CollegeInfo {
  name: string;
  shortName: string;
  tagline: string;
  established: number;
  type: string;
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    pincode: string;
    phone: string;
    email: string;
  };
  announcement: {
    text: string;
    linkText: string;
    linkTarget: string;
    active: boolean;
  };
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface Programme {
  id: string;
  name: string;
  degree: 'B.Sc.' | 'BCA' | 'B.Com.' | 'BBA' | 'B.A.' | 'B.Voc.';
  disciplineId: string;
  disciplineName: string;
  duration: string;
  mode: string;
  seats: number;
  eligibility: string;
  description: string;
  careerAreas: string[];
  curriculumHighlights: string[];
  annualFeeDemo: string;
  isPopular?: boolean;
}

export interface Discipline {
  id: string;
  name: string;
  shortCode: string;
  description: string;
  image: string;
  programmesCount: number;
  iconName: string;
  highlights: string[];
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  specialization: string;
  qualification: string;
  experienceYears: number;
  image: string;
  featured?: boolean;
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  messageQuote: string;
  image: string;
  qualification: string;
}

export interface CampusFacility {
  id: string;
  title: string;
  category: 'Academic' | 'Research' | 'Student Life' | 'Sports' | 'Infrastructure';
  description: string;
  image: string;
  features: string[];
  areaSize?: string;
}

export interface Scholarship {
  id: string;
  title: string;
  type: 'Merit' | 'Sports' | 'Innovation' | 'Need-Based';
  coverage: string;
  eligibilityDemo: string;
  description: string;
  icon: string;
}

export interface AdmissionStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Recruiter {
  id: string;
  name: string;
  industry: string;
  tier: 'Tier 1 Global' | 'Enterprise Tech' | 'Financial Leaders' | 'Innovation Hubs';
  hiresCountDemo: number;
  logoText: string;
}

export interface PlacementStat {
  recruitingPartners: string;
  internshipsOffered: string;
  placementAssistanceRate: string;
  avgPackageDemo: string;
  highestPackageDemo: string;
  medianPackageDemo: string;
}

export interface AlumniStory {
  id: string;
  name: string;
  degree: string;
  graduationYear: number;
  currentRole: string;
  company: string;
  quote: string;
  image: string;
  location: string;
}

export interface ResearchCenter {
  id: string;
  title: string;
  focus: string;
  director: string;
  activeProjects: number;
  studentFellows: number;
  image: string;
  description: string;
  partnerIndustries: string[];
}

export interface GlobalPartner {
  id: string;
  institution: string;
  country: string;
  collaborationType: string;
  flagCode: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  milestoneTag: string;
}

export interface DemoRecognition {
  id: string;
  year: number;
  title: string;
  category: string;
  awardingBody: string;
}

export interface StudentLifeCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

// CENTRALIZED DUMMY DATA FOR REBRANDING
export const collegeData: CollegeInfo = {
  name: "NORTHSTAR INSTITUTE OF HIGHER EDUCATION",
  shortName: "NIHE",
  tagline: "Shape Your Future",
  established: 2008,
  type: "Autonomous Multidisciplinary Degree College",
  location: {
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
    address: "Northstar Knowledge Campus, Beach Road, Rushikonda, Visakhapatnam",
    pincode: "530045",
    phone: "+91 891 284 9000",
    email: "admissions@northstar.edu.in"
  },
  announcement: {
    text: "Admissions 2027 are now open | Explore 32+ multidisciplinary degree programmes",
    linkText: "Apply Online",
    linkTarget: "#admissions",
    active: true
  }
};

export const statisticsData: Statistic[] = [
  { id: 'students', label: 'Students', value: 5.2, suffix: 'k+', description: 'Enrolled across undergraduate pathways' },
  { id: 'programmes', label: 'Programmes', value: 32, suffix: '+', description: 'Multidisciplinary degree programmes' },
  { id: 'faculty', label: 'Faculty', value: 220, suffix: '+', description: 'Experienced academic and research scholars' },
  { id: 'campus', label: 'Acre Campus', value: 18, suffix: '', description: 'State-of-the-art coastal academic campus' },
  { id: 'recruiters', label: 'Recruiters', value: 140, suffix: '+', description: 'Corporate & technology hiring partners' },
  { id: 'alumni', label: 'Alumni', value: 42, suffix: 'k+', description: 'Global network shaping top industries' }
];

export const disciplinesData: Discipline[] = [
  {
    id: 'computing',
    name: 'Computing & Tech',
    shortCode: 'COMP',
    description: 'Master software systems, artificial intelligence, data architecture, and cyber security with hands-on lab learning.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    programmesCount: 7,
    iconName: 'Code',
    highlights: ['AI & Cloud Labs', 'Hackathon Incubator', 'Industry Mentorship']
  },
  {
    id: 'science',
    name: 'Sciences & Applied Biotech',
    shortCode: 'SCI',
    description: 'Pioneering scientific discovery through modern experimentation, mathematical modeling, and molecular research.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    programmesCount: 6,
    iconName: 'Atom',
    highlights: ['Genomics Suite', 'Spectrometry Center', 'Pure & Applied Science']
  },
  {
    id: 'commerce',
    name: 'Commerce & Analytics',
    shortCode: 'COMM',
    description: 'Transforming traditional commerce with quantitative risk analysis, fintech tools, and digital accounting systems.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    programmesCount: 5,
    iconName: 'TrendingUp',
    highlights: ['Fintech Terminal', 'GST & Audit Labs', 'Analytics Certifications']
  },
  {
    id: 'management',
    name: 'Management & Leadership',
    shortCode: 'MGMT',
    description: 'Building agile business leaders equipped with strategy, digital marketing expertise, and entrepreneurial vision.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    programmesCount: 5,
    iconName: 'Briefcase',
    highlights: ['Live Case Competitions', 'E-Cell Incubator', 'CEO Lecture Series']
  },
  {
    id: 'arts',
    name: 'Arts & Behavioral Humanities',
    shortCode: 'ARTS',
    description: 'Cultivating critical thinking, economic policies, human psychology, and analytical discourse for society.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    programmesCount: 5,
    iconName: 'BookOpen',
    highlights: ['Psychology Observation Suite', 'Policy Roundtables', 'Literary Guild']
  },
  {
    id: 'media',
    name: 'Media & Digital Communication',
    shortCode: 'MEDIA',
    description: 'Empowering visual storytellers, investigative journalists, animators, and digital content architects.',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
    programmesCount: 4,
    iconName: 'Video',
    highlights: ['4K Broadcasting Studio', 'VFX & Animation Bay', 'Podcast Network']
  }
];

export const programmesData: Programme[] = [
  // SCIENCE
  {
    id: 'bsc-math',
    name: 'B.Sc. Mathematics',
    degree: 'B.Sc.',
    disciplineId: 'science',
    disciplineName: 'Science',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 with Mathematics & Physics (Min 55%) — DEMO',
    description: 'Rigorous foundational training in real analysis, abstract algebra, numerical methods, and mathematical modeling for modern computation.',
    careerAreas: ['Quantitative Analysis', 'Actuarial Science', 'Data Analytics', 'Research'],
    curriculumHighlights: ['Differential Equations', 'Linear Algebra', 'Python for Math Modeling', 'Cryptographic Mathematics'],
    annualFeeDemo: '₹65,000 / Year',
    isPopular: false
  },
  {
    id: 'bsc-physics',
    name: 'B.Sc. Physics',
    degree: 'B.Sc.',
    disciplineId: 'science',
    disciplineName: 'Science',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 with Physics & Mathematics — DEMO',
    description: 'Deep dive into quantum mechanics, electrodynamics, astrophysics, and solid-state instrumentation with advanced optical and electronic labs.',
    careerAreas: ['Applied Research', 'Nanotechnology', 'Optical Systems', 'Defense R&D'],
    curriculumHighlights: ['Quantum Mechanics', 'Thermal Physics', 'Semiconductor Electronics', 'Computational Physics'],
    annualFeeDemo: '₹68,000 / Year'
  },
  {
    id: 'bsc-chem',
    name: 'B.Sc. Chemistry',
    degree: 'B.Sc.',
    disciplineId: 'science',
    disciplineName: 'Science',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 with Chemistry & Physics / Biology — DEMO',
    description: 'Explores synthetic organic chemistry, physical chemistry dynamics, green chemistry, and analytical spectrometry for industrial applications.',
    careerAreas: ['Pharmaceuticals', 'Chemical Analysis', 'Quality Assurance', 'Environmental Tech'],
    curriculumHighlights: ['Organic Synthesis', 'NMR Spectroscopy', 'Industrial Chemistry', 'Polymer Science'],
    annualFeeDemo: '₹70,000 / Year'
  },
  {
    id: 'bsc-biotech',
    name: 'B.Sc. Biotechnology',
    degree: 'B.Sc.',
    disciplineId: 'science',
    disciplineName: 'Science',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 50,
    eligibility: '10+2 with Biology & Chemistry (Min 60%) — DEMO',
    description: 'Advanced curriculum bridging molecular biology, recombinant DNA technology, tissue culture, and bio-process engineering.',
    careerAreas: ['Biopharma Research', 'Genomics Labs', 'Agri-Tech', 'Clinical Research'],
    curriculumHighlights: ['Genetic Engineering', 'Immunology', 'Bioprocess Tech', 'Bioinformatics'],
    annualFeeDemo: '₹85,000 / Year',
    isPopular: true
  },
  {
    id: 'bsc-stats',
    name: 'B.Sc. Statistics',
    degree: 'B.Sc.',
    disciplineId: 'science',
    disciplineName: 'Science',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 50,
    eligibility: '10+2 with Mathematics / Statistics — DEMO',
    description: 'Focuses on probability theory, statistical inference, time-series forecasting, and R/SAS analytics for enterprise decision systems.',
    careerAreas: ['Statistical Analysis', 'Market Intelligence', 'Biostatistics', 'Risk Analytics'],
    curriculumHighlights: ['Probability Theory', 'Regression Analysis', 'R Programming', 'Survey Sampling'],
    annualFeeDemo: '₹72,000 / Year'
  },

  // COMPUTING
  {
    id: 'bsc-cs',
    name: 'B.Sc. Computer Science',
    degree: 'B.Sc.',
    disciplineId: 'computing',
    disciplineName: 'Computing',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 120,
    eligibility: '10+2 with Mathematics or Computer Science — DEMO',
    description: 'Core computer science degree covering data structures, object-oriented software engineering, databases, and full-stack web architectures.',
    careerAreas: ['Software Development', 'System Architecture', 'Database Management', 'Cloud Engineering'],
    curriculumHighlights: ['Data Structures & Algorithms', 'Operating Systems', 'Full Stack Web Dev', 'Database Management'],
    annualFeeDemo: '₹92,000 / Year',
    isPopular: true
  },
  {
    id: 'bsc-datascience',
    name: 'B.Sc. Data Science',
    degree: 'B.Sc.',
    disciplineId: 'computing',
    disciplineName: 'Computing',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 90,
    eligibility: '10+2 with Mathematics / Computer Science (Min 60%) — DEMO',
    description: 'Cutting-edge specialization in big data pipelines, machine learning algorithms, statistical computing, and predictive business intelligence.',
    careerAreas: ['Data Analytics', 'AI Engineering', 'Business Intelligence', 'Technology Strategy'],
    curriculumHighlights: ['Machine Learning', 'Big Data Frameworks', 'Deep Learning', 'Data Visualization with Tableau'],
    annualFeeDemo: '₹98,000 / Year',
    isPopular: true
  },
  {
    id: 'bca-gen',
    name: 'BCA (Bachelor of Computer Applications)',
    degree: 'BCA',
    disciplineId: 'computing',
    disciplineName: 'Computing',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 120,
    eligibility: '10+2 in any stream with Mathematics or CS background — DEMO',
    description: 'Application-focused IT degree emphasizing enterprise software build, mobile apps, network security, and UI/UX engineering.',
    careerAreas: ['Application Developer', 'Web Architect', 'IT Operations', 'Tech Support Leadership'],
    curriculumHighlights: ['Java Enterprise', 'Mobile App Development', 'Network Security', 'UI/UX Design Systems'],
    annualFeeDemo: '₹88,000 / Year'
  },
  {
    id: 'bca-ai',
    name: 'BCA Artificial Intelligence',
    degree: 'BCA',
    disciplineId: 'computing',
    disciplineName: 'Computing',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 with Mathematics / CS (Min 60%) — DEMO',
    description: 'Specialized BCA track focused on neural networks, computer vision, natural language processing, and autonomous systems.',
    careerAreas: ['AI Specialist', 'NLP Engineer', 'Computer Vision Dev', 'Robotics Software'],
    curriculumHighlights: ['Neural Networks', 'Python for AI', 'Natural Language Processing', 'Computer Vision Labs'],
    annualFeeDemo: '₹1,05,000 / Year',
    isPopular: true
  },
  {
    id: 'bsc-cyber',
    name: 'B.Sc. Cyber Security',
    degree: 'B.Sc.',
    disciplineId: 'computing',
    disciplineName: 'Computing',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 with Mathematics / Physics / CS — DEMO',
    description: 'Trains defense specialists in network forensics, ethical hacking, threat hunting, vulnerability assessment, and cloud security protocols.',
    careerAreas: ['Cyber Security Analyst', 'Penetration Tester', 'SOC Engineer', 'Digital Forensics'],
    curriculumHighlights: ['Ethical Hacking', 'Network Forensics', 'Cryptography & Security', 'Cloud Security Ops'],
    annualFeeDemo: '₹95,000 / Year'
  },

  // COMMERCE
  {
    id: 'bcom-gen',
    name: 'B.Com. General',
    degree: 'B.Com.',
    disciplineId: 'commerce',
    disciplineName: 'Commerce',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 120,
    eligibility: '10+2 Commerce or relevant stream — DEMO',
    description: 'Comprehensive commercial grounding in corporate accounting, taxation frameworks, business law, auditing, and corporate finance.',
    careerAreas: ['Corporate Accountant', 'Financial Auditor', 'Tax Consultant', 'Banking Associate'],
    curriculumHighlights: ['Financial Accounting', 'Corporate Law', 'Direct & Indirect Tax', 'Cost Management'],
    annualFeeDemo: '₹62,000 / Year'
  },
  {
    id: 'bcom-af',
    name: 'B.Com. Accounting & Finance',
    degree: 'B.Com.',
    disciplineId: 'commerce',
    disciplineName: 'Commerce',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 80,
    eligibility: '10+2 Commerce with Accountancy & Math — DEMO',
    description: 'Intensive pathway aligning with international accounting standards, SAP Financial Modules, risk management, and corporate valuation.',
    careerAreas: ['Financial Analyst', 'Investment Advisor', 'Risk Specialist', 'Treasury Executive'],
    curriculumHighlights: ['IFRS Accounting', 'SAP FICO Essentials', 'Financial Modeling', 'Securities Analysis'],
    annualFeeDemo: '₹75,000 / Year',
    isPopular: true
  },
  {
    id: 'bcom-analytics',
    name: 'B.Com. Business Analytics',
    degree: 'B.Com.',
    disciplineId: 'commerce',
    disciplineName: 'Commerce',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 Commerce / Science with Mathematics — DEMO',
    description: 'Blends financial principles with data analytics toolsets (PowerBI, Advanced Excel, SQL, Python for Finance) for modern corporate decision-making.',
    careerAreas: ['Financial Data Analyst', 'Credit Risk Analyst', 'Business Operations Analyst', 'Fintech Specialist'],
    curriculumHighlights: ['Financial Analytics', 'SQL & Databases', 'Power BI & Tableau', 'Predictive Financial Modeling'],
    annualFeeDemo: '₹82,000 / Year'
  },
  {
    id: 'bcom-ca',
    name: 'B.Com. Computer Applications',
    degree: 'B.Com.',
    disciplineId: 'commerce',
    disciplineName: 'Commerce',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 90,
    eligibility: '10+2 with Commerce / Mathematics — DEMO',
    description: 'Equips students with modern e-commerce systems, database accounting, ERP software, and web commerce platforms.',
    careerAreas: ['E-Commerce Operations', 'ERP Specialist', 'Financial Systems Admin', 'Digital Audit Associate'],
    curriculumHighlights: ['ERP & Tally Prime', 'Database Systems for Commerce', 'E-Commerce Security', 'Web Commerce Tech'],
    annualFeeDemo: '₹70,000 / Year'
  },

  // MANAGEMENT
  {
    id: 'bba-gen',
    name: 'BBA (Bachelor of Business Administration)',
    degree: 'BBA',
    disciplineId: 'management',
    disciplineName: 'Management',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 120,
    eligibility: '10+2 in any stream (Min 50%) — DEMO',
    description: 'Flagship management program instilling strategic planning, human resource management, operations, supply chain, and organizational leadership.',
    careerAreas: ['Business Management', 'Operations Executive', 'HR Specialist', 'Management Trainee'],
    curriculumHighlights: ['Principles of Management', 'Organizational Behavior', 'Supply Chain Management', 'Strategic Management'],
    annualFeeDemo: '₹90,000 / Year',
    isPopular: true
  },
  {
    id: 'bba-analytics',
    name: 'BBA Business Analytics',
    degree: 'BBA',
    disciplineId: 'management',
    disciplineName: 'Management',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 in any stream with Math/Statistics — DEMO',
    description: 'Prepares executives to translate complex corporate datasets into actionable market strategies and operational efficiencies.',
    careerAreas: ['Business Analyst', 'Strategy Consultant', 'Process Analytics Lead', 'Market Intelligence Specialist'],
    curriculumHighlights: ['Business Forecasting', 'Python for Business Analytics', 'Operations Research', 'Consumer Insight Analytics'],
    annualFeeDemo: '₹98,000 / Year'
  },
  {
    id: 'bba-marketing',
    name: 'BBA Digital Marketing',
    degree: 'BBA',
    disciplineId: 'management',
    disciplineName: 'Management',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 in any stream — DEMO',
    description: 'Master SEO, performance marketing, brand strategy, social media analytics, and digital growth hacking in a hands-on sandbox.',
    careerAreas: ['Digital Growth Lead', 'Brand Strategist', 'Performance Marketing Specialist', 'SEO/SEM Architect'],
    curriculumHighlights: ['Growth Hacking', 'SEO & Content Strategy', 'Paid Media Optimization', 'Marketing Analytics'],
    annualFeeDemo: '₹92,000 / Year'
  },
  {
    id: 'bba-finance',
    name: 'BBA Finance',
    degree: 'BBA',
    disciplineId: 'management',
    disciplineName: 'Management',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 in any stream with Math — DEMO',
    description: 'Focused on corporate finance, equity evaluation, portfolio management, banking operations, and venture capital frameworks.',
    careerAreas: ['Financial Analyst', 'Investment Banking Analyst', 'Portfolio Associate', 'Credit Analyst'],
    curriculumHighlights: ['Corporate Finance', 'Investment Analysis & Portfolio Management', 'Financial Markets', 'Mergers & Acquisitions'],
    annualFeeDemo: '₹94,000 / Year'
  },

  // ARTS & HUMANITIES
  {
    id: 'ba-psychology',
    name: 'B.A. Psychology',
    degree: 'B.A.',
    disciplineId: 'arts',
    disciplineName: 'Arts & Humanities',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 in any stream (Min 50%) — DEMO',
    description: 'Comprehensive study of cognitive processes, developmental psychology, clinical frameworks, psychometrics, and organizational behavior.',
    careerAreas: ['Counseling Associate', 'HR/People Operations', 'Behavioral Researcher', 'UX Researcher'],
    curriculumHighlights: ['Cognitive Psychology', 'Social Psychology', 'Psychometric Testing', 'Abnormal Psychology'],
    annualFeeDemo: '₹60,000 / Year',
    isPopular: true
  },
  {
    id: 'ba-english',
    name: 'B.A. English & Cultural Studies',
    degree: 'B.A.',
    disciplineId: 'arts',
    disciplineName: 'Arts & Humanities',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 in any stream — DEMO',
    description: 'Explores global literature, critical theory, linguistics, creative writing, and digital publishing architectures.',
    careerAreas: ['Publishing Editor', 'Content Strategist', 'Corporate Communications', 'Public Relations Specialist'],
    curriculumHighlights: ['British & World Literature', 'Linguistics & Phonetics', 'Creative Writing Workshop', 'Digital Content Architecture'],
    annualFeeDemo: '₹55,000 / Year'
  },
  {
    id: 'ba-economics',
    name: 'B.A. Economics',
    degree: 'B.A.',
    disciplineId: 'arts',
    disciplineName: 'Arts & Humanities',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 with Mathematics preferred — DEMO',
    description: 'Analyzes micro/macro economic systems, econometric models, public policy, monetary economics, and international trade.',
    careerAreas: ['Policy Analyst', 'Economic Researcher', 'Consulting Associate', 'Market Researcher'],
    curriculumHighlights: ['Econometrics', 'Micro & Macro Dynamics', 'Public Finance', 'Development Economics'],
    annualFeeDemo: '₹62,000 / Year'
  },
  {
    id: 'ba-journalism',
    name: 'B.A. Journalism & Mass Comm',
    degree: 'B.A.',
    disciplineId: 'arts',
    disciplineName: 'Arts & Humanities',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 in any stream — DEMO',
    description: 'Hands-on training in investigative reporting, broadcast journalism, podcast production, media law, and digital newsrooms.',
    careerAreas: ['News Journalist', 'Broadcast Anchor', 'PR Manager', 'Digital Media Producer'],
    curriculumHighlights: ['Investigative Reporting', 'Media Law & Ethics', 'Broadcast Production', 'Digital Newsroom Lab'],
    annualFeeDemo: '₹68,000 / Year'
  },

  // MEDIA
  {
    id: 'ba-viscom',
    name: 'B.A. Visual Communication',
    degree: 'B.A.',
    disciplineId: 'media',
    disciplineName: 'Media & Communication',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Regular',
    seats: 60,
    eligibility: '10+2 in any stream with creative aptitude portfolio — DEMO',
    description: 'Combines graphic design, photography, video production, brand aesthetics, and interactive media design.',
    careerAreas: ['Art Director', 'Visual Designer', 'Video Director', 'Creative Brand Specialist'],
    curriculumHighlights: ['Graphic Design & Typography', 'Commercial Photography', 'Cinematography', 'Brand Design'],
    annualFeeDemo: '₹85,000 / Year',
    isPopular: true
  },
  {
    id: 'bvoc-digitalmedia',
    name: 'B.Voc. Digital Media Production',
    degree: 'B.Voc.',
    disciplineId: 'media',
    disciplineName: 'Media & Communication',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Vocational',
    seats: 50,
    eligibility: '10+2 in any stream — DEMO',
    description: 'Vocational degree with 60% hands-on industry apprenticeships in live streaming, studio audio production, and video editing.',
    careerAreas: ['Media Technician', 'Video Editor', 'Sound Engineer', 'Live Broadcast Specialist'],
    curriculumHighlights: ['Non-Linear Video Editing', 'Studio Audio Engineering', 'Live Streaming Protocols', 'Post-Production FX'],
    annualFeeDemo: '₹75,000 / Year'
  },
  {
    id: 'bvoc-animation',
    name: 'B.Voc. Animation & Multimedia',
    degree: 'B.Voc.',
    disciplineId: 'media',
    disciplineName: 'Media & Communication',
    duration: '3 Years (6 Semesters)',
    mode: 'Full Time Vocational',
    seats: 50,
    eligibility: '10+2 in any stream — DEMO',
    description: 'Specialized skill track in 2D/3D animation, character rigging, game asset design, visual FX, and motion graphics.',
    careerAreas: ['3D Animator', 'Motion Graphics Artist', 'Game Asset Designer', 'VFX Artist'],
    curriculumHighlights: ['3D Modeling & Maya', 'Character Animation', 'Unreal Engine Asset Pipeline', 'Motion Graphics'],
    annualFeeDemo: '₹88,000 / Year'
  }
];

export const facultyData: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Arjun Rao',
    designation: 'Professor & Dean — Academics',
    department: 'Computer Science & AI',
    specialization: 'Artificial Intelligence & Neural Architectures',
    qualification: 'Ph.D. in CS (IIT Madras), M.Tech (IISc Bangalore)',
    experienceYears: 18,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    featured: true
  },
  {
    id: 'fac-2',
    name: 'Dr. Kavya Menon',
    designation: 'Principal & Professor',
    department: 'Higher Education Management',
    specialization: 'Institutional Policy & Educational Leadership',
    qualification: 'Ph.D. in Higher Ed Administration (Delhi Univ), M.Ed',
    experienceYears: 22,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    featured: true
  },
  {
    id: 'fac-3',
    name: 'Prof. Meera Iyer',
    designation: 'Dean — Student Experience',
    department: 'Media & Communication',
    specialization: 'Digital Broadcasting & Cultural Narrative',
    qualification: 'M.A. Journalism (Jamia Millia), Fellowship in Digital Media',
    experienceYears: 15,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    featured: true
  },
  {
    id: 'fac-4',
    name: 'Dr. Rohan Varma',
    designation: 'Director — Research & Innovation',
    department: 'Biotechnology & Life Sciences',
    specialization: 'Genomics & Bioprocess Engineering',
    qualification: 'Ph.D. Bioengineering (BITS Pilani), PostDoc (NUS Singapore)',
    experienceYears: 16,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    featured: true
  },
  {
    id: 'fac-5',
    name: 'Dr. Priya Nambiar',
    designation: 'Associate Professor',
    department: 'Commerce & Analytics',
    specialization: 'Fintech & Risk Modeling',
    qualification: 'Ph.D. Finance (IIM Bangalore), CFA Level 3',
    experienceYears: 12,
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-6',
    name: 'Prof. Rajesh Sharma',
    designation: 'Head of Department',
    department: 'Business Management',
    specialization: 'Strategic Supply Chain & Growth Analytics',
    qualification: 'MBA (XLRI Jamshedpur), B.Tech (NIT Warangal)',
    experienceYears: 14,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  }
];

export const leadershipData: LeadershipMember[] = [
  {
    id: 'lead-1',
    name: 'Dr. Kavya Menon',
    title: 'Principal',
    role: 'Executive Academic Leadership',
    bio: 'Dr. Kavya Menon brings over two decades of transformative leadership in higher education, focusing on interdisciplinary curriculum design, industry integration, and holistic student development.',
    messageQuote: 'Higher education must do more than transfer knowledge — it should inspire independent thinking, moral courage, and the agility to thrive in an ever-evolving world.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    qualification: 'Ph.D., M.Ed — Educational Policy'
  },
  {
    id: 'lead-2',
    name: 'Dr. Arjun Rao',
    title: 'Dean — Academics',
    role: 'Academic Standards & Curriculum',
    bio: 'Pioneer in computer science pedagogy and neural computing, Dr. Rao oversees academic quality, continuous curriculum modernization, and research integration.',
    messageQuote: 'Our academic architecture empowers students to cross traditional boundaries — combining technology with ethics, and science with business leadership.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    qualification: 'Ph.D. (IIT Madras), M.Tech (IISc)'
  },
  {
    id: 'lead-3',
    name: 'Prof. Meera Iyer',
    title: 'Dean — Student Experience',
    role: 'Campus Culture & Student Life',
    bio: 'Champion for vibrant student mentorship, clubs, international exchanges, and wellness systems that ensure every student discovers their voice.',
    messageQuote: 'A great campus is a crucible of ideas, artistic expression, athletic vitality, and lifelong friendships.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    qualification: 'M.A. Journalism, Media Fellow'
  },
  {
    id: 'lead-4',
    name: 'Dr. Rohan Varma',
    title: 'Director — Research & Innovation',
    role: 'Research Incubator & Tech Transfer',
    bio: 'Leading 12 multidisciplinary research centers, Dr. Varma connects student researchers with global research grants and industry innovation projects.',
    messageQuote: 'Curiosity is our highest priority. We nurture undergraduate research from year one, encouraging students to build patentable solutions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    qualification: 'Ph.D. Bioengineering (BITS Pilani)'
  }
];

export const campusFacilitiesData: CampusFacility[] = [
  {
    id: 'lib-1',
    title: 'Central Knowledge Library',
    category: 'Academic',
    description: 'Four-story architectural marvel housing over 65,000 physical volumes, IEEE digital subscriptions, silent study bays, and collaborative research pods.',
    image: '/images/library_lab.jpg',
    features: ['24/7 Digital Portal', 'Individual Study Pods', 'RFID Auto-Borrowing', '65,000+ Books & Journals'],
    areaSize: '24,000 Sq. Ft.'
  },
  {
    id: 'lab-1',
    title: 'Innovation & AI Research Hub',
    category: 'Research',
    description: 'High-performance computing cluster equipped with GPU servers, robotics workstations, IoT testing benches, and rapid prototyping 3D printers.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    features: ['NVIDIA GPU Racks', 'Robotics Testing Sandbox', '3D Rapid Prototyping', 'IoT Sensor Array'],
    areaSize: '15,000 Sq. Ft.'
  },
  {
    id: 'sci-1',
    title: 'Advanced Science & Biotech Labs',
    category: 'Academic',
    description: 'Cleanroom-certified molecular biology laboratories, NMR spectrometry units, tissue culture suites, and organic synthesis stations.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    features: ['Laminar Flow Cabinets', 'UV-Vis Spectrophotometers', 'Cell Culture Unit', 'Safety Level 2 Certified'],
    areaSize: '18,000 Sq. Ft.'
  },
  {
    id: 'cls-1',
    title: 'Smart Interactive Classrooms',
    category: 'Academic',
    description: 'Tiered acoustic amphitheater lecture halls equipped with 4K interactive smart boards, hybrid streaming cameras, and ergonomic seating.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    features: ['Dual 4K Interactive Panels', 'Acoustic Soundproofing', 'Hybrid Recording Systems', 'Climate Control'],
    areaSize: '36 Amphitheaters'
  },
  {
    id: 'spt-1',
    title: 'Multipurpose Sports Complex',
    category: 'Sports',
    description: 'Includes a floodlit football turf, FIBA-spec basketball court, indoor badminton courts, Olympic-size swimming pool, and wellness gym.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    features: ['Floodlit Turf Ground', 'Indoor Badminton Courts', 'Fitness & Gym Suite', 'Physiotherapy Room'],
    areaSize: '4.5 Acres'
  },
  {
    id: 'aud-1',
    title: 'Grand University Auditorium',
    category: 'Infrastructure',
    description: '1,200-seat state-of-the-art auditorium featuring line-array sound systems, theatrical lighting, and green rooms for global symposia and cultural festivals.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    features: ['1,200 Seating Capacity', 'DMX Stage Lighting', 'Dolby Digital Sound', 'VVIP Lounge'],
    areaSize: '20,000 Sq. Ft.'
  },
  {
    id: 'caf-1',
    title: 'Coastal Student Commons & Food Court',
    category: 'Student Life',
    description: 'Multi-cuisine dining hall serving nutritious, fresh meals with sea-breeze seating plazas, coffee shops, and healthy snack bars.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    features: ['Multi-Cuisine Outlets', 'Open-Air Seating Deck', 'Hygiene Certified Kitchen', 'Espresso Lounge'],
    areaSize: '16,000 Sq. Ft.'
  }
];

export const scholarshipsData: Scholarship[] = [
  {
    id: 'sch-1',
    title: 'Northstar Merit Presidential Scholarship',
    type: 'Merit',
    coverage: 'Up to 100% Tuition Fee Waiver',
    eligibilityDemo: 'Students scoring 95%+ in 10+2 qualifying examinations — DEMO',
    description: 'Recognizes exceptional academic performance in qualifying 12th board exams. Renewable annually based on maintaining 8.5+ CGPA.',
    icon: 'Award'
  },
  {
    id: 'sch-2',
    title: 'National & State Sports Excellence Grant',
    type: 'Sports',
    coverage: '50% to 100% Tuition Concession',
    eligibilityDemo: 'Represented state or national level in SGFI / Recognized Sports — DEMO',
    description: 'Empowers talented athletes with customized academic schedules, free sports complex access, and dedicated training stipends.',
    icon: 'Trophy'
  },
  {
    id: 'sch-3',
    title: 'Young Innovators Tech & Research Grant',
    type: 'Innovation',
    coverage: '₹50,000 / Year Project Grant + Fee Concession',
    eligibilityDemo: 'Top performance in NIHE National Innovation Challenge or Hackathon — DEMO',
    description: 'Supports student founders and researchers building working hardware/software prototypes in our campus incubator.',
    icon: 'Lightbulb'
  },
  {
    id: 'sch-4',
    title: 'Northstar Community Need-Based Financial Aid',
    type: 'Need-Based',
    coverage: '30% to 75% Tuition Fee Subsidy',
    eligibilityDemo: 'Annual family income below ₹4.0 Lakhs — DEMO',
    description: 'Ensures that economic constraints never prevent deserving, ambitious students from pursuing quality higher education.',
    icon: 'HeartHandshake'
  }
];

export const admissionStepsData: AdmissionStep[] = [
  {
    step: '01',
    title: 'Explore & Choose Pathway',
    description: 'Review our 32+ degree programmes across Science, Computing, Commerce, Management, Arts, and Media.',
    details: 'Browse curriculum modules, talk with department counselors, or attend campus open days.'
  },
  {
    step: '02',
    title: 'Check Eligibility & Requirements',
    description: 'Verify your 10+2 subject combinations and minimum percentage criteria for your chosen programme.',
    details: 'Each programme displays clear merit guidelines and optional entrance exam waivers.'
  },
  {
    step: '03',
    title: 'Submit Online Application',
    description: 'Complete the online application form with basic personal, academic, and discipline choices.',
    details: 'Fast digital application process with instant application ID generation.'
  },
  {
    step: '04',
    title: 'Document Verification & Interaction',
    description: 'Upload digital copies of marksheets, ID proof, and certificates for counselor verification.',
    details: 'Interactive counseling session (online or campus visit) to answer student & parent questions.'
  },
  {
    step: '05',
    title: 'Provisional Admission & Fee Confirmation',
    description: 'Receive your provisional admission offer letter and confirm seat booking.',
    details: 'Flexible payment options with early-bird scholarship evaluations.'
  },
  {
    step: '06',
    title: 'Orientation & Begin Your Journey',
    description: 'Join the campus orientation week, meet faculty mentors, and start your college life.',
    details: 'Campus tour, club enrollments, library card issuance, and peer icebreakers.'
  }
];

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is Northstar Institute of Higher Education an autonomous institution?',
    answer: 'Yes, NIHE is an autonomous multidisciplinary degree college established in 2008. It offers industry-aligned credit-based degree programmes designed by academic experts and approved by governing academic councils.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'What are the eligibility criteria for undergraduate degree admission?',
    answer: 'Eligibility varies by programme. Generally, completion of 10+2 from a recognized board (CBSE/ICSE/State Board) with a minimum of 50-60% aggregate is required. Science and Computing tracks require Mathematics/Physics/Biology in 12th.',
    category: 'Admissions'
  },
  {
    id: 'faq-3',
    question: 'Does the institute offer hostel accommodation for outstation students?',
    answer: 'Yes, NIHE provides separate secure residential dormitories for male and female students with 24/7 security, high-speed Wi-Fi, dining halls, recreation centers, and resident wardens.',
    category: 'Campus'
  },
  {
    id: 'faq-4',
    question: 'How are campus placements and internships facilitated?',
    answer: 'Our dedicated Career Development Center conducts pre-placement training from 3rd semester, including resume workshops, aptitude prep, mock interviews, and technical bootcamps. Over 140+ recruiting partners visit campus annually.',
    category: 'Placements'
  },
  {
    id: 'faq-5',
    question: 'Are scholarship applications separate from the regular application?',
    answer: 'Merit scholarships based on 12th Board marks are evaluated automatically upon application submission. Sports and Need-Based scholarships require uploading relevant certificates during step 04.',
    category: 'Scholarships'
  }
];

export const recruitersData: Recruiter[] = [
  { id: 'rec-1', name: 'Nexa Systems', industry: 'Software & Cloud Tech', tier: 'Enterprise Tech', hiresCountDemo: 42, logoText: 'NEXA' },
  { id: 'rec-2', name: 'Orbit Technologies', industry: 'AI & Data Platforms', tier: 'Innovation Hubs', hiresCountDemo: 35, logoText: 'ORBIT' },
  { id: 'rec-3', name: 'BluePeak Analytics', industry: 'Financial Risk & Consulting', tier: 'Financial Leaders', hiresCountDemo: 28, logoText: 'BLUEPEAK' },
  { id: 'rec-4', name: 'FinEdge Global', industry: 'Fintech & Investment Banking', tier: 'Financial Leaders', hiresCountDemo: 31, logoText: 'FINEDGE' },
  { id: 'rec-5', name: 'Vertex Labs', industry: 'Biotechnology & Health Tech', tier: 'Innovation Hubs', hiresCountDemo: 19, logoText: 'VERTEX' },
  { id: 'rec-6', name: 'NovaWorks Media', industry: 'Digital Content & VFX', tier: 'Enterprise Tech', hiresCountDemo: 24, logoText: 'NOVAWORKS' },
  { id: 'rec-7', name: 'Aether Capital', industry: 'Wealth & Asset Management', tier: 'Financial Leaders', hiresCountDemo: 18, logoText: 'AETHER' },
  { id: 'rec-8', name: 'CogniTech India', industry: 'Enterprise IT Services', tier: 'Tier 1 Global', hiresCountDemo: 54, logoText: 'COGNITECH' },
  { id: 'rec-9', name: 'Quantum AI Systems', industry: 'Quantum & Neural Computing', tier: 'Innovation Hubs', hiresCountDemo: 22, logoText: 'QUANTUM' },
  { id: 'rec-10', name: 'Solaris Energy', industry: 'CleanTech & Renewable Grids', tier: 'Enterprise Tech', hiresCountDemo: 29, logoText: 'SOLARIS' },
  { id: 'rec-11', name: 'Strata Cloud Services', industry: 'Infrastructure & Cybersecurity', tier: 'Enterprise Tech', hiresCountDemo: 37, logoText: 'STRATA' },
  { id: 'rec-12', name: 'Synergy Pharma', industry: 'Biomedical & Clinical Labs', tier: 'Innovation Hubs', hiresCountDemo: 16, logoText: 'SYNERGY' },
  { id: 'rec-13', name: 'Apex Global Logistics', industry: 'Supply Chain & Operations', tier: 'Tier 1 Global', hiresCountDemo: 40, logoText: 'APEX' },
  { id: 'rec-14', name: 'Valence Media', industry: 'Interactive & Immersive Tech', tier: 'Enterprise Tech', hiresCountDemo: 21, logoText: 'VALENCE' },
  { id: 'rec-15', name: 'Helios Research', industry: 'Deep Tech & Robotics', tier: 'Innovation Hubs', hiresCountDemo: 15, logoText: 'HELIOS' },
  { id: 'rec-16', name: 'Vortex Capital', industry: 'Venture & Global Markets', tier: 'Financial Leaders', hiresCountDemo: 27, logoText: 'VORTEX' }
];

export const placementStatData: PlacementStat = {
  recruitingPartners: '140+',
  internshipsOffered: '680+',
  placementAssistanceRate: '91%',
  avgPackageDemo: '8.2 LPA',
  highestPackageDemo: '28 LPA',
  medianPackageDemo: '6.5 LPA'
};

export const alumniStoriesData: AlumniStory[] = [
  {
    id: 'alum-1',
    name: 'Ananya Rao',
    degree: 'B.Sc. Data Science',
    graduationYear: 2024,
    currentRole: 'Product Analyst',
    company: 'NovaWorks',
    quote: 'The hands-on data modeling labs at Northstar gave me the exact skills needed to transition smoothly into enterprise product analytics right after graduation.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    location: 'Bengaluru'
  },
  {
    id: 'alum-2',
    name: 'Rahul Mehta',
    degree: 'BBA Business Analytics',
    graduationYear: 2023,
    currentRole: 'Business Analyst',
    company: 'FinEdge',
    quote: 'NIHE’s focus on case studies and financial analytics toolsets made me confident in client presentations from day one at FinEdge.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    location: 'Hyderabad'
  },
  {
    id: 'alum-3',
    name: 'Sneha Iyer',
    degree: 'BCA (Artificial Intelligence)',
    graduationYear: 2024,
    currentRole: 'Software Engineer',
    company: 'Nexa Systems',
    quote: 'Building real computer vision prototypes in our AI Research Hub gave my resume a huge edge during campus placement rounds.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    location: 'Visakhapatnam'
  },
  {
    id: 'alum-4',
    name: 'Karan Verma',
    degree: 'B.Com. Accounting & Finance',
    graduationYear: 2022,
    currentRole: 'Senior Risk Consultant',
    company: 'BluePeak Analytics',
    quote: 'Faculty mentorship at Northstar went beyond textbooks — professors guided my financial certifications and internship placement.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    location: 'Mumbai'
  }
];

export const researchCentersData: ResearchCenter[] = [
  {
    id: 'res-1',
    title: 'AI & Data Intelligence Lab',
    focus: 'Neural vision systems, predictive algorithms, & large model fine-tuning',
    director: 'Dr. Arjun Rao',
    activeProjects: 14,
    studentFellows: 35,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    description: 'Focuses on applying deep learning to computer vision, medical diagnostic signals, and natural language analytics for local industry applications.',
    partnerIndustries: ['Nexa Systems', 'Orbit Technologies', 'Vizag Tech Park']
  },
  {
    id: 'res-2',
    title: 'BioScience & Genomics Centre',
    focus: 'Recombinant enzymes, marine biotechnology, & bio-remediation',
    director: 'Dr. Rohan Varma',
    activeProjects: 9,
    studentFellows: 24,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    description: 'Utilizes coastal marine biodiversity for enzyme discovery and environmental bioremediation protocols.',
    partnerIndustries: ['Vertex Labs', 'Apex BioPharma']
  },
  {
    id: 'res-3',
    title: 'Fintech & Business Innovation Hub',
    focus: 'Algorithmic trading systems, micro-finance models, & blockchain audit',
    director: 'Dr. Priya Nambiar',
    activeProjects: 11,
    studentFellows: 28,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Incubates student fintech prototypes and researches inclusive banking models for emerging markets.',
    partnerIndustries: ['FinEdge Global', 'Aether Capital']
  },
  {
    id: 'res-4',
    title: 'Sustainable Technology Centre',
    focus: 'Solar harvesting efficiency, clean water filtration, & smart campus IoT',
    director: 'Prof. Rajesh Sharma',
    activeProjects: 8,
    studentFellows: 20,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    description: 'Devoted to renewable energy microgrids and smart IoT environmental monitoring systems across our 18-acre campus.',
    partnerIndustries: ['GreenGrid Solutions', 'Coastal EcoTech']
  },
  {
    id: 'res-5',
    title: 'Media & Digital Communication Studio',
    focus: 'Immersive storytelling, AR/VR asset pipelines, & digital journalism ethics',
    director: 'Prof. Meera Iyer',
    activeProjects: 10,
    studentFellows: 30,
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
    description: 'Explores synthetic media detection, spatial computing narratives, and modern visual journalism workflows.',
    partnerIndustries: ['NovaWorks Media', 'Coastal Broadcast Guild']
  }
];

export const globalPartnersData: GlobalPartner[] = [
  { id: 'gp-1', institution: 'University of Westminster', country: 'United Kingdom', collaborationType: 'Semester Exchange & Dual Certification', flagCode: '🇬🇧' },
  { id: 'gp-2', institution: 'Monash University Network', country: 'Australia', collaborationType: 'Joint Research & Faculty Exchange', flagCode: '🇦🇺' },
  { id: 'gp-3', institution: 'National University of Singapore (NUS) Labs', country: 'Singapore', collaborationType: 'Summer Innovation Immersion', flagCode: '🇸🇬' },
  { id: 'gp-4', institution: 'Technical University of Munich', country: 'Germany', collaborationType: 'Biotech & Computing Collaborative R&D', flagCode: '🇩🇪' },
  { id: 'gp-5', institution: 'University of California Extension', country: 'United States', collaborationType: 'Global Leadership Bootcamps', flagCode: '🇺🇸' },
  { id: 'gp-6', institution: 'Keio University Tech Hub', country: 'Japan', collaborationType: 'Robotics & AI Student Fellowships', flagCode: '🇯🇵' }
];

export const timelineEventsData: TimelineEvent[] = [
  { year: 2008, title: 'Institute Founded', description: 'Established as an autonomous degree college in Visakhapatnam with 4 foundational degree tracks.', milestoneTag: 'Inception' },
  { year: 2012, title: 'New Academic Wing Expansion', description: 'Constructed state-of-the-art science complexes and 1,200-seat university auditorium.', milestoneTag: 'Campus Growth' },
  { year: 2016, title: 'Innovation & Research Centre Launched', description: 'Inaugurated 12 specialized research labs and university incubator for student startups.', milestoneTag: 'Research Excellence' },
  { year: 2020, title: 'Digital Learning & Smart Campus Initiative', description: 'Implemented hybrid smart classrooms and 24/7 digital knowledge repository.', milestoneTag: 'Digital Era' },
  { year: 2024, title: 'Global Academic Partnerships Network', description: 'Crossed 85+ global university partners and international exchange programs.', milestoneTag: 'Global Reach' },
  { year: 2027, title: '32+ Programmes Across 6 Disciplines', description: 'Offering comprehensive multidisciplinary degree education to 5,200+ active students.', milestoneTag: 'Current Horizon' }
];

export const demoRecognitionsData: DemoRecognition[] = [
  { id: 'recog-1', year: 2026, title: 'Institutional Excellence Award', category: 'Multidisciplinary Pedagogy', awardingBody: 'National Higher Ed Forum (Demo)' },
  { id: 'recog-2', year: 2025, title: 'Innovation in Education Award', category: 'Undergraduate Research', awardingBody: 'Academic Future Summit (Demo)' },
  { id: 'recog-3', year: 2025, title: 'Sustainable Campus Recognition', category: 'Green & Eco Architecture', awardingBody: 'Coastal Clean Energy Guild (Demo)' }
];

export const studentLifeCategoriesData: StudentLifeCategory[] = [
  { id: 'sl-1', title: 'Student Clubs & Guilds', description: 'Over 28 student-run clubs spanning coding, robotics, literature, photography, theater, and debate.', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80', tag: 'Community' },
  { id: 'sl-2', title: 'Sports & Athletics', description: 'Inter-college tournaments in football, basketball, cricket, badminton, and swimming.', image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80', tag: 'Athletics' },
  { id: 'sl-3', title: 'Cultural Festivals', description: 'Annual cultural extravaganza "NORTHSTAR AURA" showcasing music, dance, fashion, and visual arts.', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80', tag: 'Culture' },
  { id: 'sl-4', title: 'Hackathons & Competitions', description: '48-hour continuous software and hardware hackathons with industry sponsors.', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80', tag: 'Innovation' },
  { id: 'sl-5', title: 'Workshops & Industry Masterclasses', description: 'Weekly guest lectures and hands-on coding/finance masterclasses by industry leaders.', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80', tag: 'Learning' },
  { id: 'sl-6', title: 'Industrial Visits & Expos', description: 'Guided visits to technology parks, pharmaceutical hubs, and port facilities in Visakhapatnam.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80', tag: 'Exposure' }
];
