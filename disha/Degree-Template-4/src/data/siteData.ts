export const collegeData = {
  name: "Northstar Institute of Higher Education",
  shortName: "NIHE",
  location: "Visakhapatnam, Andhra Pradesh, India",
  tagline: "Discover. Develop. Define.",
  established: 2008,
  type: "Multidisciplinary Degree College",
  contact: {
    email: "admissions@northstar-demo.edu",
    phone: "+91 90000 00000"
  }
};

export const statisticsData = [
  { value: "5,200+", label: "Students" },
  { value: "220+", label: "Faculty" },
  { value: "140+", label: "Recruiters" },
  { value: "42,000+", label: "Alumni" }
];

export const disciplinesData = [
  { id: "science", name: "Science", description: "Explore the natural world through rigorous observation and experiment." },
  { id: "computing", name: "Computing", description: "Design the future with cutting-edge software and systems." },
  { id: "commerce", name: "Commerce", description: "Master the fundamentals of business, finance, and trade." },
  { id: "management", name: "Management", description: "Lead organizations and navigate global business challenges." },
  { id: "arts", name: "Arts & Humanities", description: "Understand human culture, thought, and society." },
  { id: "media", name: "Media", description: "Shape narratives and communicate across modern platforms." }
];

export const programmesData = [
  // Computing
  { id: "p1", name: "B.Sc. Computer Science", discipline: "computing", level: "UG", degree: "B.Sc.", duration: "3 Years", eligibility: "10+2 with Mathematics", skills: ["Programming", "Algorithms", "Software Eng"], career: ["Software Developer", "Systems Analyst"] },
  { id: "p2", name: "BCA", discipline: "computing", level: "UG", degree: "BCA", duration: "3 Years", eligibility: "10+2 in any stream", skills: ["Web Dev", "Databases", "Networking"], career: ["Web Developer", "Network Admin"] },
  { id: "p3", name: "M.Sc. Data Science", discipline: "computing", level: "PG", degree: "M.Sc.", duration: "2 Years", eligibility: "B.Sc./BCA with Mathematics", skills: ["Python", "Machine Learning", "AI", "Big Data"], career: ["Data Scientist", "AI Engineer"] },
  { id: "p4", name: "MCA", discipline: "computing", level: "PG", degree: "MCA", duration: "2 Years", eligibility: "BCA/B.Sc. with Mathematics", skills: ["Cloud Computing", "Advanced Software Eng", "System Architecture"], career: ["Senior Developer", "IT Consultant"] },
  // Science
  { id: "p5", name: "B.Sc. Biotechnology", discipline: "science", level: "UG", degree: "B.Sc.", duration: "3 Years", eligibility: "10+2 with Biology", skills: ["Genetics", "Microbiology", "Lab Tech"], career: ["Research Assistant", "Biotechnologist"] },
  { id: "p6", name: "M.Sc. Microbiology", discipline: "science", level: "PG", degree: "M.Sc.", duration: "2 Years", eligibility: "B.Sc. in Life Sciences", skills: ["Advanced Genetics", "Virology", "Immunology"], career: ["Clinical Researcher", "Microbiologist"] },
  // Commerce
  { id: "p7", name: "B.Com. Accounting & Finance", discipline: "commerce", level: "UG", degree: "B.Com.", duration: "3 Years", eligibility: "10+2 in Commerce/Math", skills: ["Accounting", "Taxation", "Financial Modeling"], career: ["Accountant", "Financial Analyst"] },
  { id: "p8", name: "M.Com. Applied Finance", discipline: "commerce", level: "PG", degree: "M.Com.", duration: "2 Years", eligibility: "B.Com./BBA", skills: ["Corporate Finance", "Investment Banking", "Auditing"], career: ["Financial Manager", "Investment Analyst"] },
  // Management
  { id: "p9", name: "BBA", discipline: "management", level: "UG", degree: "BBA", duration: "3 Years", eligibility: "10+2 in any stream", skills: ["Leadership", "Marketing", "Operations"], career: ["Business Analyst", "Marketing Exec"] },
  { id: "p10", name: "MBA Innovation & Strategy", discipline: "management", level: "PG", degree: "MBA", duration: "2 Years", eligibility: "Graduation in any stream", skills: ["Strategic Management", "Organizational Behavior", "Entrepreneurship"], career: ["Management Consultant", "Startup Founder"] },
  // Arts & Humanities
  { id: "p11", name: "B.A. Psychology", discipline: "arts", level: "UG", degree: "B.A.", duration: "3 Years", eligibility: "10+2 in any stream", skills: ["Counseling", "Behavioral Analysis", "Research"], career: ["Counselor", "HR Specialist"] },
  { id: "p12", name: "M.A. Clinical Psychology", discipline: "arts", level: "PG", degree: "M.A.", duration: "2 Years", eligibility: "B.A. Psychology", skills: ["Psychotherapy", "Clinical Assessment", "Cognitive Therapy"], career: ["Clinical Psychologist", "Therapist"] },
  // Media
  { id: "p13", name: "B.A. Visual Communication", discipline: "media", level: "UG", degree: "B.A.", duration: "3 Years", eligibility: "10+2 in any stream", skills: ["Design", "Video Production", "Media Studies"], career: ["Art Director", "Media Producer"] },
  { id: "p14", name: "M.A. Mass Communication", discipline: "media", level: "PG", degree: "M.A.", duration: "2 Years", eligibility: "Graduation in any stream", skills: ["Journalism", "Digital Marketing", "Public Relations"], career: ["Journalist", "PR Manager"] }
];

export const facultyData = [
  { name: "Dr. Kavya Menon", role: "Principal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
  { name: "Dr. Arjun Rao", role: "Dean — Academics", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
  { name: "Prof. Meera Iyer", role: "Dean — Student Experience", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" },
  { name: "Dr. Rohan Varma", role: "Director — Research", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" }
];

export const timelineData = [
  { year: "2008", event: "Founded", description: "The institute was founded with an initial batch of just 200 students in a single building, focused entirely on foundational sciences.", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=800" },
  { year: "2012", event: "Academic Expansion", description: "Expanded our academic offerings by introducing 12 new multidisciplinary undergraduate programmes across Computing and Commerce.", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800" },
  { year: "2016", event: "Innovation Centre", description: "Inaugurated the state-of-the-art Northstar Innovation Centre to bridge the gap between academic theory and industry practice.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { year: "2020", event: "Digital Learning", description: "Pioneered a comprehensive digital learning initiative, equipping all classrooms with smart technology to support hybrid education.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
  { year: "2024", event: "Global Partnerships", description: "Established academic exchange and research partnerships with over 15 leading international universities.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
  { year: "2027", event: "32+ Programmes", description: "Celebrating our diverse ecosystem with over 32 undergraduate programmes and a vibrant community of 5,200+ students.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" }
];

export const admissionsData = {
  dates: [
    { label: "Applications Open", date: "January 2027" },
    { label: "Priority Deadline", date: "April 2027" },
    { label: "Final Deadline", date: "June 2027" },
    { label: "Academic Year", date: "August 2027" }
  ],
  process: [
    { step: "01", title: "Explore" },
    { step: "02", title: "Check Eligibility" },
    { step: "03", title: "Apply" },
    { step: "04", title: "Verify" },
    { step: "05", title: "Confirm" },
    { step: "06", title: "Join" }
  ]
};

export const scholarshipsData = [
  "Merit", "Sports", "Innovation", "Need-Based"
];

export const campusData = {
  facilities: [
    { name: "Central Library", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200", description: "Our Central Library is a sanctuary of knowledge designed for both collaborative projects and quiet, focused study. Spanning over three floors, it houses an extensive and continuously updated collection of academic resources, rare journals, and modern digital archives. Students have 24/7 access to high-speed internet, comfortable ergonomic seating, and private study pods, ensuring they have everything they need to excel in their academic pursuits." },
    { name: "Smart Classrooms", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200", description: "Experience learning reimagined in our Smart Classrooms. These interactive spaces are fully equipped with the latest audio-visual technology, smart boards, and advanced presentation tools. The flexible, collaborative seating arrangements foster engaging discussions and group work, allowing professors to seamlessly blend traditional teaching methods with modern digital pedagogy to create an immersive educational experience." },
    { name: "Science Labs", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200", description: "Innovation begins in our state-of-the-art Science Laboratories. Designed strictly to international safety and research standards, these labs provide students with hands-on experience using cutting-edge instruments and analytical tools. Whether conducting complex biochemical assays or exploring new frontiers in physics, students work closely under the guidance of expert faculty to turn theoretical concepts into tangible, real-world discoveries." },
    { name: "Innovation Hub", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200", description: "The Innovation Hub is the creative heartbeat of our campus—a dynamic environment where abstract ideas are transformed into viable solutions. Featuring active startup incubators, fully stocked maker spaces, and 3D printing labs, it is the perfect launchpad for student entrepreneurs. Regular workshops and mentorship sessions with industry leaders ensure that innovative projects have the support they need to reach their full potential." },
    { name: "Sports Complex", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1200", description: "Physical wellness is just as important as academic excellence. Our comprehensive Sports Complex includes a sprawling indoor arena, an Olympic-sized swimming pool, and multiple outdoor courts for basketball, tennis, and athletics. With dedicated coaching staff and state-of-the-art fitness centers, the complex promotes teamwork, discipline, and healthy competition among students across all disciplines." },
    { name: "Student Commons", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200", description: "The Student Commons serves as the vibrant social hub of our university. It is the perfect place for students to unwind, grab a coffee, and connect between classes. Featuring a diverse food court, comfortable lounge areas, and recreational spaces, the Commons hosts impromptu study sessions, club meetings, and cultural events, fostering a strong, inclusive, and tightly-knit community spirit." }
  ],
  studentLife: [
    { name: "Clubs", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" },
    { name: "Sports", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600" },
    { name: "Cultural Events", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600" },
    { name: "Competitions", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600" },
    { name: "Workshops", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" },
    { name: "Industrial Visits", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" }
  ]
};

export const placementsData = {
  stats: [
    { value: "140+", label: "Recruiting Partners" },
    { value: "680+", label: "Internship Opportunities" },
    { value: "91%", label: "Placement Assistance" },
    { value: "8.2 LPA", label: "Average Package — DEMO" },
    { value: "28 LPA", label: "Highest Package — DEMO" }
  ]
};

export const alumniData = [
  { name: "Ananya Rao", degree: "B.Sc. Data Science", role: "Product Analyst", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200", quote: "My time at Northstar truly shaped my professional journey. The practical approach, challenging curriculum, and incredible mentorship from the faculty provided a solid foundation for my career. I learned not just how to code, but how to think critically and solve real-world problems." },
  { name: "Rahul Mehta", degree: "BBA", role: "Business Analyst", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200", quote: "The diverse and dynamic curriculum allowed me to explore different facets of business, which ultimately led me to discover my true passion for data-driven strategy. The hands-on projects and industry interactions were instrumental in preparing me for the corporate world." },
  { name: "Sneha Iyer", degree: "BCA", role: "Software Engineer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200", quote: "The rigorous coding labs and the culture of continuous innovation through hackathons prepared me incredibly well for the challenges I face every day. The supportive environment at the institute gave me the confidence to push boundaries and innovate." },
  { name: "Karthik Reddy", degree: "B.Com. Finance", role: "Investment Banker", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200", quote: "Northstar's industry-aligned finance programs gave me the exact edge I needed to break into the highly competitive world of investment banking. The exposure to financial modeling and real-world case studies made the transition from student to professional seamless." },
  { name: "Priya Sharma", degree: "B.A. Psychology", role: "Clinical Counselor", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", quote: "The exceptionally supportive faculty and the excellent psychology labs provided a deeply nurturing environment. I was able to deeply understand human behavior through practical research, which is something I rely on every single day in my clinical practice." },
  { name: "Vikram Singh", degree: "M.Sc. Microbiology", role: "Research Scientist", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200", quote: "Having unrestricted access to advanced laboratories and receiving expert, personalized guidance from dedicated professors paved the way for my successful career in scientific research. The institute truly fosters a culture of curiosity and relentless discovery." }
];
