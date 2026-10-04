export interface CollegeInfo {
  name: string;
  shortName: string;
  badge: string;
  location: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  accreditations: string[];
}

export interface Statistic {
  label: string;
  value: string;
  subtext: string;
  size: 'huge' | 'xl' | 'lg' | 'md';
}

export interface Discipline {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  programmes: string[];
}

export interface Programme {
  id: string;
  number: string;
  title: string;
  category: 'Technology' | 'Science' | 'Business' | 'People' | 'Creativity';
  disciplineId: string;
  duration: string;
  eligibility: string;
  careerPath: string;
  highlights: string[];
  image: string;
  description: string;
}

export interface Leader {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  isPrincipal?: boolean;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface FacultyMember {
  name: string;
  department: string;
  expertise: string;
  qualifications: string;
  image: string;
}

export interface ResearchCard {
  title: string;
  focus: string;
  leadProject: string;
  grantAmount: string;
  image: string;
}

export interface AdmissionStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface CampusStoryItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface StudentLifeActivity {
  category: string;
  title: string;
  count: string;
  description: string;
  image: string;
}

export interface PlacementStat {
  label: string;
  value: string;
  isDemo?: boolean;
}

export interface AlumniStory {
  name: string;
  programme: string;
  batch: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  isFeatured?: boolean;
}

export const collegeData: CollegeInfo = {
  name: "NORTHSTAR INSTITUTE OF HIGHER EDUCATION",
  shortName: "Northstar Institute",
  badge: "NS",
  location: "Visakhapatnam, Andhra Pradesh, India",
  tagline: "Find Your Direction.",
  address: "Beach Road, MVP Colony, Visakhapatnam, Andhra Pradesh 530017",
  phone: "+91 891 285 4000",
  email: "admissions@northstar.edu.in",
  accreditations: ["NAAC A++ Grade", "UGC Autonomous College", "Affiliated to Andhra University"]
};

export const statisticsData: Statistic[] = [
  { label: "STUDENTS", value: "5,200+", subtext: "Vibrant learning community from across 22 states", size: "huge" },
  { label: "PROGRAMMES", value: "32+", subtext: "Interdisciplinary undergraduate & research pathways", size: "xl" },
  { label: "FACULTY", value: "220+", subtext: "Ph.D. holders, researchers & industry mentors", size: "lg" },
  { label: "ACRES", value: "18", subtext: "State-of-the-art coastal campus overlooking the ocean", size: "md" },
  { label: "RECRUITERS", value: "140+", subtext: "Top domestic & international industry leaders", size: "xl" }
];

export const disciplinesData: Discipline[] = [
  {
    id: "science",
    title: "SCIENCE",
    subtitle: "Discovery, experiment & real-world impact",
    description: "Hands-on laboratory research, biotechnology innovations, data physics and environmental sustainability.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    programmes: ["B.Sc. Biotechnology", "B.Sc. Physics & Electronics", "B.Sc. Food Technology", "B.Sc. Chemistry & Analytical Science"]
  },
  {
    id: "computing",
    title: "COMPUTING",
    subtitle: "Software architecture, AI & digital intelligence",
    description: "Engineering modern algorithms, cloud computing, intelligent systems and cybersecurity.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    programmes: ["B.Sc. Computer Science", "B.Sc. Data Science", "BCA", "BCA Artificial Intelligence"]
  },
  {
    id: "commerce",
    title: "COMMERCE",
    subtitle: "Financial acumen, global markets & audit",
    description: "Comprehensive financial modeling, corporate law, fintech integrations and chartered accounting preparation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    programmes: ["B.Com. Accounting & Finance", "B.Com. International Business", "B.Com. Financial Markets", "B.Com. E-Commerce"]
  },
  {
    id: "management",
    title: "MANAGEMENT",
    subtitle: "Leadership, strategy & venture creation",
    description: "Nurturing tomorrow's entrepreneurs, brand managers, operations leads and organizational strategists.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    programmes: ["BBA", "BBA Aviation & Logistics", "BBA Digital Marketing", "BBA Entrepreneurship"]
  },
  {
    id: "arts",
    title: "ARTS",
    subtitle: "Human behavior, economics & societal insights",
    description: "Deep dive into human minds, economic policy, literature and public policy.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
    programmes: ["B.A. Psychology", "B.A. English Literature", "B.A. Economics", "B.A. Public Policy"]
  },
  {
    id: "media",
    title: "MEDIA",
    subtitle: "Visual storytelling, journalism & digital design",
    description: "Film production, UI/UX design, brand communications, investigative reporting and digital media.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
    programmes: ["B.A. Visual Communication", "B.A. Journalism & Mass Communication", "B.Sc. Animation & VFX", "B.A. Digital Film Making"]
  }
];

export const programmesData: Programme[] = [
  {
    id: "bsc-cs",
    number: "01",
    title: "B.Sc. Computer Science",
    category: "Technology",
    disciplineId: "computing",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with Mathematics/CS (Min. 55% aggregate)",
    careerPath: "Software Architect, Cloud Engineer, Systems Analyst, Backend Specialist",
    highlights: ["Advanced Data Structures", "Full-Stack Development", "Cloud Computing & DevOps", "Industry Internship in Year 3"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    description: "A foundational degree covering modern software engineering principles, distributed systems, machine learning fundamentals, and enterprise application development."
  },
  {
    id: "bsc-ds",
    number: "02",
    title: "B.Sc. Data Science",
    category: "Technology",
    disciplineId: "computing",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with Mathematics/Statistics (Min. 55% aggregate)",
    careerPath: "Data Scientist, Business Intelligence Analyst, Machine Learning Associate",
    highlights: ["Predictive Analytics", "Python & R Ecosystems", "Big Data Pipelines", "AI Ethics & Governance"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    description: "Designed to transform data into actionable insights, blending mathematical statistics, machine learning models, and real-time visualization."
  },
  {
    id: "bsc-biotech",
    number: "03",
    title: "B.Sc. Biotechnology",
    category: "Science",
    disciplineId: "science",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with PCB/PCM (Min. 50% aggregate)",
    careerPath: "Bio-Researcher, Quality Assurance Officer, Clinical Data Manager, Lab Director",
    highlights: ["Genomic Sequencing Lab", "Molecular Biology", "Pharma Innovation", "Bio-Incubation Projects"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
    description: "Explore the molecular mechanics of life. Students work in high-tech cell culture labs and research environmental bioprocesses."
  },
  {
    id: "bcom-af",
    number: "04",
    title: "B.Com. Accounting & Finance",
    category: "Business",
    disciplineId: "commerce",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Commerce or Science with Math (Min. 50% aggregate)",
    careerPath: "Financial Analyst, Risk Consultant, Tax Specialist, CA/CMA Trainee",
    highlights: ["Bloomberg Terminal Certification", "Corporate Tax & Law", "FinTech Integration", "ACCA Embedded Modules"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    description: "Comprehensive financial education preparing students for rigorous careers in investment banking, global accounting firms, and corporate treasury."
  },
  {
    id: "bba",
    number: "05",
    title: "BBA (Bachelor of Business Administration)",
    category: "Business",
    disciplineId: "management",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "Management Trainee, Brand Strategist, Operations Analyst, Entrepreneur",
    highlights: ["Live Business Case Competitions", "Design Thinking Workshop", "Executive Mentorship", "Global Trade Simulations"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    description: "Build essential leadership traits, learn organizational behavior, explore digital marketing dynamics, and launch startup ventures."
  },
  {
    id: "bca",
    number: "06",
    title: "BCA (Bachelor of Computer Applications)",
    category: "Technology",
    disciplineId: "computing",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream with Math/CS/IT (Min. 50% aggregate)",
    careerPath: "Full-Stack Developer, Mobile App Developer, UI Programmer, Cloud Specialist",
    highlights: ["Web Architecture", "Mobile App Studio", "Database Management", "Cybersecurity Basics"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    description: "Application-focused software development degree emphasizing hands-on coding, web microservices, and mobile computing."
  },
  {
    id: "ba-psych",
    number: "07",
    title: "B.A. Psychology",
    category: "People",
    disciplineId: "arts",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "HR Talent Analyst, Behavioral Specialist, User Researcher, Mental Health Advocate",
    highlights: ["Cognitive Psychology Lab", "Organizational Behavior", "Counseling Practicum", "Statistical Research"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    description: "Understand human cognition, emotion, perception, and interpersonal relationships with experimental lab work and field research."
  },
  {
    id: "ba-viscom",
    number: "08",
    title: "B.A. Visual Communication",
    category: "Creativity",
    disciplineId: "media",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream + Design Aptitude Portfolio",
    careerPath: "Creative Director, UI/UX Designer, Commercial Photographer, Video Producer",
    highlights: ["Digital Design Studio", "Cinematography Lab", "Brand Identity Systems", "Annual Creative Showcase"],
    image: "https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=1000&auto=format&fit=crop",
    description: "An intensive studio-based program blending graphic design, filmmaking, motion graphics, and interactive digital experiences."
  },
  {
    id: "bca-ai",
    number: "09",
    title: "BCA Artificial Intelligence",
    category: "Technology",
    disciplineId: "computing",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with Math/CS (Min. 55% aggregate)",
    careerPath: "AI Developer, Prompt Engineer, Computer Vision Specialist, NLP Associate",
    highlights: ["Deep Learning Models", "Natural Language Processing", "Robotics Interface", "Generative AI Lab"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    description: "Specialized undergraduate program focusing on neural networks, natural language models, computer vision, and autonomous systems."
  },
  {
    id: "mca",
    number: "10",
    title: "MCA (Master of Computer Applications)",
    category: "Technology",
    disciplineId: "computing",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA/B.Sc/B.Com with Math (Min. 55% aggregate)",
    careerPath: "Senior Software Engineer, Tech Lead, IT Consultant, Product Manager",
    highlights: ["Advanced Cloud Architecture", "Enterprise App Development", "Agile Project Management", "Industry Capstone"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    description: "An advanced professional degree preparing graduates for leadership roles in software development and IT infrastructure."
  },
  {
    id: "msc-ds",
    number: "11",
    title: "M.Sc. Data Science & AI",
    category: "Technology",
    disciplineId: "computing",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Sc/B.Tech/BCA with Math/Stats (Min. 55% aggregate)",
    careerPath: "Lead Data Scientist, AI Research Engineer, Chief Data Officer, ML Architect",
    highlights: ["Advanced Neural Networks", "Big Data Analytics", "Computer Vision Labs", "Published Research"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    description: "Deep dive into machine learning models, statistical inference, and deploying AI solutions at scale for enterprise."
  },
  {
    id: "bsc-pe",
    number: "12",
    title: "B.Sc. Physics & Electronics",
    category: "Science",
    disciplineId: "science",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with PCM (Min. 50% aggregate)",
    careerPath: "Electronics Engineer, Hardware Architect, Physicist",
    highlights: ["Quantum Mechanics", "Embedded Systems", "Nano Tech Labs"],
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1000&auto=format&fit=crop",
    description: "Discover the fundamental laws of nature and their application in modern electronic circuits and devices."
  },
  {
    id: "bsc-ft",
    number: "13",
    title: "B.Sc. Food Technology",
    category: "Science",
    disciplineId: "science",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with PCB/PCM (Min. 50% aggregate)",
    careerPath: "Food Technologist, Quality Controller, Nutrition Analyst",
    highlights: ["Food Processing", "Preservation Techniques", "Dietary Science"],
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop",
    description: "Dive into the science of food processing, microbiology, and nutritional biochemistry."
  },
  {
    id: "bsc-chem",
    number: "14",
    title: "B.Sc. Chemistry & Analytical Science",
    category: "Science",
    disciplineId: "science",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with PCB/PCM (Min. 50% aggregate)",
    careerPath: "Analytical Chemist, Pharma Researcher, Forensics",
    highlights: ["Spectroscopy", "Organic Synthesis", "Industrial Chemistry"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9db82a5c9?q=80&w=1000&auto=format&fit=crop",
    description: "Hands-on experience in chemical analysis and synthesis with modern lab equipment."
  },
  {
    id: "bcom-ib",
    number: "15",
    title: "B.Com. International Business",
    category: "Business",
    disciplineId: "commerce",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "Global Market Analyst, Export Manager, Trade Consultant",
    highlights: ["Global Trade", "Forex Management", "International Law"],
    image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1000&auto=format&fit=crop",
    description: "Understand the dynamics of global markets and international trade policies."
  },
  {
    id: "bba-dm",
    number: "16",
    title: "BBA Digital Marketing",
    category: "Business",
    disciplineId: "management",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "SEO Expert, Campaign Manager, Digital Strategist",
    highlights: ["Social Media", "Analytics", "E-commerce Strategies"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1000&auto=format&fit=crop",
    description: "Master modern marketing techniques using digital platforms and data analytics."
  },
  {
    id: "ba-eng",
    number: "18",
    title: "B.A. English Literature",
    category: "People",
    disciplineId: "arts",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "Author, Editor, Corporate Communications",
    highlights: ["Classic Literature", "Modern Poetry", "Creative Writing"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop",
    description: "Explore canonical texts and develop advanced critical thinking and writing skills."
  },
  {
    id: "ba-eco",
    number: "19",
    title: "B.A. Economics",
    category: "People",
    disciplineId: "arts",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "Economist, Policy Analyst, Financial Researcher",
    highlights: ["Macroeconomics", "Microeconomics", "Econometrics"],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop",
    description: "Analyze market trends and understand the economic forces shaping the world."
  },
  {
    id: "ba-pub",
    number: "20",
    title: "B.A. Public Policy",
    category: "People",
    disciplineId: "arts",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "Policy Advisor, NGO Consultant, Public Administration",
    highlights: ["Governance", "Ethics", "Social Policy"],
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1000&auto=format&fit=crop",
    description: "Learn how public policies are created, analyzed, and implemented in society."
  },
  {
    id: "ba-jour",
    number: "21",
    title: "B.A. Journalism & Mass Communication",
    category: "Creativity",
    disciplineId: "media",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "Reporter, News Editor, Media Analyst",
    highlights: ["Investigative Journalism", "Media Ethics", "Digital Publishing"],
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1000&auto=format&fit=crop",
    description: "Prepare for a dynamic career in print, broadcast, and digital news media."
  },
  {
    id: "bsc-anim",
    number: "22",
    title: "B.Sc. Animation & VFX",
    category: "Creativity",
    disciplineId: "media",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "3D Animator, VFX Artist, Game Designer",
    highlights: ["3D Modeling", "Compositing", "Character Rigging"],
    image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1000&auto=format&fit=crop",
    description: "Blend art and technology to create stunning visual effects and animated storytelling."
  },
  {
    id: "ba-film",
    number: "23",
    title: "B.A. Digital Film Making",
    category: "Creativity",
    disciplineId: "media",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Any Stream (Min. 50% aggregate)",
    careerPath: "Film Director, Cinematographer, Editor",
    highlights: ["Screenwriting", "Directing", "Post-Production"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    description: "Hands-on experience in every aspect of producing modern digital films."
  },
  {
    id: "msc-biotech",
    number: "24",
    title: "M.Sc. Applied Biotechnology",
    category: "Science",
    disciplineId: "science",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Sc with Biology/Chemistry (Min. 55% aggregate)",
    careerPath: "Lead Research Scientist, Quality Control Manager, Bio-process Engineer",
    highlights: ["Advanced Gene Editing", "Bioreactor Design", "Clinical Research"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop",
    description: "An advanced science degree focused on translating biological research into industrial and medical applications."
  },
  {
    id: "mba",
    number: "25",
    title: "MBA (Master of Business Administration)",
    category: "Business",
    disciplineId: "management",
    duration: "2 Years (4 Semesters)",
    eligibility: "Any Graduation (Min. 50% aggregate) + CAT/MAT",
    careerPath: "Management Consultant, Marketing Director, Business Strategy Head",
    highlights: ["Global Business Strategy", "Leadership Labs", "Industry Mentorship"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    description: "A premier postgraduate program designed to cultivate transformational business leaders and strategic thinkers."
  },
  {
    id: "ma-psych",
    number: "26",
    title: "M.A. Clinical Psychology",
    category: "People",
    disciplineId: "arts",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.A./B.Sc in Psychology (Min. 50% aggregate)",
    careerPath: "Clinical Psychologist, Counselor, Psychotherapist",
    highlights: ["Advanced Psychopathology", "Clinical Internship", "Cognitive Behavioral Therapy"],
    image: "https://images.unsplash.com/photo-1573497491208-6f16fa23bb00?q=80&w=1000&auto=format&fit=crop",
    description: "Equipping students with advanced theoretical knowledge and practical clinical skills for mental health counseling."
  },
  {
    id: "mdes",
    number: "27",
    title: "M.Des (Master of Design)",
    category: "Creativity",
    disciplineId: "media",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Des or Equivalent (Min. 50% aggregate)",
    careerPath: "Lead Product Designer, UX Architect, Creative Director",
    highlights: ["Advanced Human-Computer Interaction", "Service Design", "Interactive Prototyping"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    description: "A postgraduate program focused on advanced design research, interactive media, and user-centric problem solving."
  }
];

export const leadershipData: Leader[] = [
  {
    name: "Dr. Kavya Menon",
    role: "Principal",
    credentials: "Ph.D. (IISc Bangalore), Postdoc (MIT)",
    bio: "With over 24 years of academic vision and scientific research, Dr. Menon leads Northstar's mission to bridge interdisciplinary theory with real-world human innovation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    isPrincipal: true
  },
  {
    name: "Dr. Arjun Rao",
    role: "Dean — Academics",
    credentials: "Ph.D. (IIT Madras), Senior IEEE Fellow",
    bio: "Oversees curriculum design, interdisciplinary credit frameworks, and global academic partnerships.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Prof. Meera Iyer",
    role: "Dean — Student Experience",
    credentials: "M.Des (NID Ahmedabad), M.A. Social Work",
    bio: "Drives student life, campus culture, mental well-being initiatives, and 40+ active student clubs.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Rohan Varma",
    role: "Director — Research",
    credentials: "Ph.D. (Cambridge University), Former ISRO Scientist",
    bio: "Fosters undergraduate research grants, patent filing support, and university industry incubator labs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  }
];

export const timelineData: TimelineEntry[] = [
  {
    year: "2008",
    title: "THE BEGINNING",
    description: "Founded on the picturesque coast of Visakhapatnam with 180 pioneering students across pure sciences and commerce.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=900&auto=format&fit=crop"
  },
  {
    year: "2012",
    title: "ACADEMIC EXPANSION",
    description: "Established the School of Management and School of Visual Communication, introducing state-of-the-art media studios.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=900&auto=format&fit=crop"
  },
  {
    year: "2016",
    title: "INNOVATION CENTRE",
    description: "Launched the Northstar Incubator Lab with ₹5 Crore initial seed fund for student-led startups and research grants.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop"
  },
  {
    year: "2020",
    title: "DIGITAL LEARNING",
    description: "Pioneered hybrid immersive classrooms, digital research archives, and international guest lecture tracks.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop"
  },
  {
    year: "2024",
    title: "GLOBAL COLLABORATION",
    description: "Awarded NAAC A++ accreditation and partnered with 12 international universities for semester-abroad exchanges.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=900&auto=format&fit=crop"
  },
  {
    year: "2027",
    title: "32+ PROGRAMMES",
    description: "Expanding into Artificial Intelligence research, BioScience advancements, and integrated dual-degree programs.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=900&auto=format&fit=crop"
  }
];

export const facultyData: FacultyMember[] = [
  {
    name: "Dr. Rajesh Varma",
    department: "Computer Science & AI",
    expertise: "Neural Networks & Embedded Systems",
    qualifications: "Ph.D. (IIT Kharagpur), Ex-Senior Scientist ISRO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Prof. Sunita Krishnan",
    department: "Visual Communication & Media",
    expertise: "Documentary Filmmaking & Brand Identity",
    qualifications: "M.A. (FTII Pune), Former Executive Editor NDTV",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Dr. Vikramaditya Sen",
    department: "Biotechnology & Life Sciences",
    expertise: "CRISPR Gene Editing & Bio-Pharma",
    qualifications: "Ph.D. (JNCASR), Postdoc (Harvard Medical School)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Dr. Ananya Deshmukh",
    department: "Commerce & Financial Markets",
    expertise: "Corporate Valuation & Algorithmic Trading",
    qualifications: "FCA, Ph.D. (IIM Bangalore), SEBI Advisory Panel",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop"
  }
];

export const researchCardsData: ResearchCard[] = [
  {
    title: "AI & Data Intelligence",
    focus: "Predictive oceanography algorithms & regional disaster early warning systems.",
    leadProject: "Coastal Safety Mesh",
    grantAmount: "₹1.2 Cr Grant",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "BioScience",
    focus: "Marine bio-polymers and sustainable bio-degradable packaging materials.",
    leadProject: "Ocean Plasticlear Lab",
    grantAmount: "₹85 Lakhs Grant",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Business Innovation",
    focus: "Micro-entrepreneurship models for coastal rural artisans in Andhra Pradesh.",
    leadProject: "Craft-Connect Platform",
    grantAmount: "₹45 Lakhs Grant",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Sustainable Technology",
    focus: "Solar-powered desalinization units for off-grid coastal communities.",
    leadProject: "SunWater Tech",
    grantAmount: "₹95 Lakhs Grant",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Media Innovation",
    focus: "Archiving regional oral histories using immersive AR/VR storytelling.",
    leadProject: "Visakha Archive Project",
    grantAmount: "₹60 Lakhs Grant",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop"
  }
];

export const admissionJourneyData: AdmissionStep[] = [
  {
    number: "01",
    title: "EXPLORE",
    description: "Find the programme that fits your interests.",
    details: "Browse through our 32+ degree courses across Science, Computing, Commerce, Management, Arts & Media. Use our Interactive Programme Finder or speak with an admissions counselor."
  },
  {
    number: "02",
    title: "CHECK",
    description: "Review eligibility and requirements.",
    details: "Verify stream requirements, minimum aggregate score (50%-55%), and specific aptitude criteria for Visual Communication or Data Science programmes."
  },
  {
    number: "03",
    title: "APPLY",
    description: "Submit your application.",
    details: "Fill out the online application form with academic transcripts, statement of purpose, and chosen specialization preferences."
  },
  {
    number: "04",
    title: "VERIFY",
    description: "Complete document verification.",
    details: "Attend an online or campus counseling session where original marksheets, identity proof, and scholarship certificates are verified."
  },
  {
    number: "05",
    title: "JOIN",
    description: "Begin your Northstar journey.",
    details: "Receive your formal offer letter, complete fee payment, receive your student ID, and attend the grand 3-day Orientation Week!"
  }
];

export const campusStoryData: CampusStoryItem[] = [
  {
    number: "01",
    title: "ARRIVE",
    subtitle: "Coastal Sunshine & Open Spaces",
    description: "An 18-acre campus nestled between lush Eastern Ghats hills and the Bay of Bengal coastline in Visakhapatnam.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1400&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "LEARN",
    subtitle: "Amphitheatre Classrooms & Digital Library",
    description: "Spacious interactive lecture halls equipped with acoustic design, 40,000+ physical volumes and 24/7 digital academic databases.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1400&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "EXPERIMENT",
    subtitle: "Advanced Research Labs & Maker Space",
    description: "High-performance computing clusters, biotechnology tissue culture labs, Bloomberg financial terminals, and robotics suites.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "CONNECT",
    subtitle: "40+ Vibrant Clubs & Cultural Lounges",
    description: "From the CodeCraft AI Club and Debating Society to the Coastal Theatre Troupe and Green Earth Eco Cell.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop"
  },
  {
    number: "05",
    title: "CREATE",
    subtitle: "Annual Fest 'NIRVANA' & Tech Hackathons",
    description: "Student-driven hackathons, visual art exhibitions, battle of the bands, and pan-India academic summits.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop"
  },
  {
    number: "06",
    title: "GROW",
    subtitle: "Floodlit Sports Complex & Oceanfront Pavilion",
    description: "Basketball courts, synthetic tennis arenas, football grounds, indoor badminton hall, and beach volleyball courts.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1400&auto=format&fit=crop"
  }
];

export const studentLifeActivities: StudentLifeActivity[] = [
  { category: "Clubs", title: "40+ Active Societies", count: "1,800+ Members", description: "Tech, Photography, Literature, Entrepreneurship & Music.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=700&auto=format&fit=crop" },
  { category: "Sports", title: "State Championships", count: "12 Sports Teams", description: "Cricket, Football, Basketball, Badminton & Athletics.", image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=700&auto=format&fit=crop" },
  { category: "Cultural Events", title: "NIRVANA Cultural Fest", count: "3 Days Annual Fest", description: "Attracts 10,000+ students from 50+ colleges across India.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=700&auto=format&fit=crop" },
  { category: "Competitions", title: "Northstar HackFest", count: "48-Hour Challenge", description: "Product building & coding sprint with industry mentors.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=700&auto=format&fit=crop" },
  { category: "Workshops", title: "Global Masterclasses", count: "50+ Per Year", description: "Sessions by CEOs, Scientists, Designers & Industry Experts.", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=700&auto=format&fit=crop" },
  { category: "Industrial Visits", title: "Corporate Expeditions", count: "25+ Trips/Yr", description: "Visits to tech parks, manufacturing hubs & financial exchanges.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=700&auto=format&fit=crop" },
  { category: "Volunteering", title: "NSS & Coastal Clean Drive", count: "800+ Volunteers", description: "Community teaching, mangrove restoration & blood drives.", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=700&auto=format&fit=crop" }
];

export const placementStats: PlacementStat[] = [
  { label: "Recruiting Partners", value: "140+" },
  { label: "Internships Secured", value: "680+" },
  { label: "Placement Assistance Rate", value: "91%" },
  { label: "Average Package (DEMO DATA)", value: "8.2 LPA", isDemo: true },
  { label: "Highest Package (DEMO DATA)", value: "28 LPA", isDemo: true }
];

export const recruiterLogos = [
  "TCS", "Infosys", "Deloitte", "Amazon", "Google India", "Wipro", "Accenture", "Zoho", "Cognizant", "HDFC Bank", "ICICI Bank", "Reliance Digital",
  "Microsoft", "IBM", "Oracle", "Cisco", "Intel", "Adobe", "Tech Mahindra", "Capgemini", "L&T", "Tata Motors", "Samsung", "Sony"
];

export const alumniStories: AlumniStory[] = [
  {
    name: "ANANYA RAO",
    programme: "B.Sc. Data Science",
    batch: "Class of 2026",
    role: "Product Analyst",
    company: "NovaWorks",
    quote: "Northstar didn't just teach me coding; it gave me the analytical confidence to lead data projects that impact millions of users.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    isFeatured: true
  },
  {
    name: "VIKRAM SHARMA",
    programme: "BBA Entrepreneurship",
    batch: "Class of 2025",
    role: "Founder & CEO",
    company: "EcoGrid Mobility",
    quote: "The campus incubation lab provided our first seed grant of ₹5 Lakhs. That seed grew into a green mobility enterprise valued at ₹4 Crores today.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "PRIYA SUNDARAM",
    programme: "B.A. Visual Communication",
    batch: "Class of 2024",
    role: "Senior UI/UX Designer",
    company: "Studio Craft",
    quote: "The critique culture in our media department shaped my design eyes. I learned how to turn abstract human needs into beautiful digital interfaces.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
  }
];
