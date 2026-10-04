// Demo Eye Hospital - Comprehensive Data Store (Demo Template)
export const hospitalInfo = {
  name: "Demo Eye Hospital",
  tagline: "Advanced Eye Care & Microsurgery (Demo Template)",
  subtitle: "Demo Eye Hospital & Surgery Center",
  established: 1995,
  accreditation: "Accredited Eye Hospital & Microsurgery Center",
  logo: "/images/branding/demo-logo.png",
  phone: "+1 (800) 555-0199",
  phoneDisplay: "+1 (800) 555-DEMO",
  phoneRaw: "+18005553366",
  mobileSecondary: "+1 (800) 555-0122",
  emergencyPhone: "+1 (800) 555-DEMO",
  email: "demo@demoeyehospital.com",
  staffLoginUrl: "#",
  address: {
    street: "123 Demo Medical Boulevard, Suite 400",
    landmark: "Opposite Demo Healthcare Hub",
    city: "Demo City",
    state: "Demo State",
    pincode: "000000",
    country: "Demo Country",
    full: "Demo Eye Hospital, 123 Demo Medical Boulevard, Demo City, Demo State - 000000",
    shortDisplay: "123 Demo Medical Blvd, Demo City"
  },
  timings: {
    opdMonSat: "9:00 AM - 7:00 PM",
    opdSunday: "9:00 AM - 1:00 PM",
    emergency: "24 Hours / 7 Days Open",
    trustBPL: "9:00 AM - 12:00 PM (Daily)"
  },
  stats: [
    { label: "Years of Excellence", value: "30+", desc: "Continuous clinical service" },
    { label: "Successful Surgeries", value: "50,000+", desc: "Restoring eyesight with modern precision" },
    { label: "School Screenings", value: "10,000+", desc: "Children screened annually via Community Trust" },
    { label: "Specialist Surgeons", value: "8+", desc: "Board-certified & fellowship alumni" }
  ],
  trustName: "Demo Eye Care Foundation Trust",
  trustShortName: "Demo Foundation Trust"
};

export const heroSlides = [
  {
    image: "/images/2025/10/newslider-2.jpg",
    title: "Eye Care With Most Advanced Equipment",
    subtitle: "Enhancing Your Vision With Advanced Precision",
    cta: "Book an Appointment",
    link: "/contact-us"
  },
  {
    image: "/images/2025/10/blog-1.jpg",
    title: "30+ Years of Ophthalmic Excellence",
    subtitle: "Founded by Premier Fellowship-Trained Specialists",
    cta: "Explore Our Specialties",
    link: "/scope-of-services"
  },
  {
    image: "/images/2025/10/vizag.jpg",
    title: "Compassionate Care & Community Service",
    subtitle: "Over 50,000 Surgeries & Community Outreach Programs",
    cta: "Learn About Community Trust",
    link: "/foundation-trust"
  }
];

export const doctors = [
  {
    id: "dr-david-richardson",
    name: "Dr. David Richardson",
    role: "Director & Chief Consultant",
    specialty: "Cornea, Anterior Segment & Refractive Surgery",
    degrees: "MBBS, MD, Fellowship (Cornea & Microsurgery), Board Certified",
    image: "/images/doctors/dr-c-v-gopala-raju.png",
    profileUrl: "/medical-director",
    bio: "Renowned cornea specialist and Medical Director of Demo Eye Hospital. Fellowship-trained in advanced microsurgery, corneal transplantation, and wavefront LASIK. Active leader in ophthalmic continuous medical education."
  },
  {
    id: "dr-sarah-mitchell",
    name: "Dr. Sarah Mitchell",
    role: "Co-Founder & Chief Vitreoretinal Surgeon",
    specialty: "Retina & Vitreous Microsurgery",
    degrees: "MBBS, MD, Fellowship (Retina & Vitreous)",
    image: "/images/doctors/dr-p-vasudeva.png",
    bio: "Expert retina and vitreous microsurgeon with decades of experience diagnosing and treating complex retinal detachments, diabetic retinopathy, and macular conditions."
  },
  {
    id: "dr-marcus-lin",
    name: "Dr. Marcus Lin",
    role: "Senior Consultant",
    specialty: "Ophthalmology & Anterior Segment",
    degrees: "MBBS, MS Ophthalmology",
    image: "/images/doctors/dr-p-v-syamla.png",
    bio: "Accomplished ophthalmologist specializing in comprehensive ocular diagnosis, medical retina, and anterior segment interventions."
  },
  {
    id: "dr-elena-vance",
    name: "Dr. Elena Vance",
    role: "Consultant",
    specialty: "Comprehensive Ophthalmology & Glaucoma",
    degrees: "MBBS, Consultant Ophthalmology",
    image: "/images/doctors/dr-p-vijaya-lakshmi.png",
    bio: "Dedicated specialist delivering comprehensive ophthalmic assessments, preventive eye wellness, and glaucoma evaluations."
  },
  {
    id: "dr-james-holloway",
    name: "Dr. James Holloway",
    role: "Consultant Vitreoretinal Surgeon",
    specialty: "Retina & Posterior Segment",
    degrees: "MD (Ophthalmology), Fellowship (Vitreoretinal Surgery)",
    image: "/images/doctors/dr-lohit-rambarki.png",
    bio: "Extensively trained vitreoretinal surgeon with deep surgical proficiency in advanced 3D vitreoretinal surgery, retinal lasers, and macular interventions."
  },
  {
    id: "dr-priya-patel",
    name: "Dr. Priya Patel",
    role: "Consultant Ophthalmologist",
    specialty: "General & Pediatric Ophthalmology",
    degrees: "MBBS, MS",
    image: "/images/doctors/dr-poosapati-priyanka.jpg",
    bio: "Skilled ophthalmic surgeon focusing on pediatric vision assessments, squint screening, and modern cataract surgery."
  },
  {
    id: "dr-emily-chen",
    name: "Dr. Emily Chen",
    role: "Consultant Cornea & Refractive Specialist",
    specialty: "Cornea & Ocular Surface",
    degrees: "MBBS, MS (Ophthalmology), Cornea Fellowship",
    image: "/images/doctors/dr-shaik-jamema.png",
    bio: "Fellowship-trained cornea specialist with specialization in corneal transplants, dry eye therapies, and advanced laser refractive procedures."
  },
  {
    id: "dr-robert-taylor",
    name: "Dr. Robert Taylor",
    role: "Consultant Ophthalmologist",
    specialty: "Comprehensive Eye Care & Glaucoma",
    degrees: "MBBS, MS (Ophthalmology)",
    image: "/images/doctors/dr-r-alpa-jentilal.jpg",
    bio: "Experienced eye surgeon providing advanced clinical consultations, tonometry diagnostics, and patient-centered eye care."
  }
];

export const clinicalServices = [
  {
    slug: "cataract",
    title: "Cataract",
    subtitle: "(Including Laser Assisted Cataract Surgery)",
    tag: "Micro-Incision Surgery",
    image: "/images/2025/11/cataract.webp",
    excerpt: "Cataracts are caused by the clouding of the eye's crystalline lens. We offer modern micro-incision phacoemulsification and advanced laser-assisted cataract surgery with premium IOLs.",
    highlights: ["Laser-Assisted Surgery", "Foldable & Toric IOLs", "Multifocal Implants", "Day Care Discharge"]
  },
  {
    slug: "cornea-anterior-segment",
    title: "Cornea & Anterior Segment",
    subtitle: "(Including Tissue Transplant Surgery)",
    tag: "Transplantation & Cross-Linking",
    image: "/images/2025/11/cornea.webp",
    excerpt: "Comprehensive evaluation and surgical management of corneal ulcers, dystrophies, keratoconus, and corneal transplantation (Keratoplasty PK, DALK, DSEK).",
    highlights: ["Corneal Topography", "C3R for Keratoconus", "Donor Tissue Transplants", "Ocular Surface Care"]
  },
  {
    slug: "glaucoma",
    title: "Glaucoma",
    subtitle: "Early Detection & Pressure Control",
    tag: "Sight-Saving Screening",
    image: "/images/2025/11/glucomoa.webp",
    excerpt: "Screening and testing to detect optic nerve damage and ocular hypertension before vision is permanently impaired through field testing, pachymetry, OCT, and laser trabeculoplasty.",
    highlights: ["Humphrey Visual Fields", "RNFL OCT Analysis", "YAG Iridotomy", "Trabeculectomy Surgeries"]
  },
  {
    slug: "medical-retina",
    title: "Medical Retina",
    subtitle: "Retinal Disease Management",
    tag: "Diabetic Retinopathy Care",
    image: "/images/2025/11/medicalretina.webp",
    excerpt: "Focused diagnosis and management of diabetic retinopathy, age-related macular degeneration (AMD), retinal vein occlusions, and macular edema using OCT, FFA, and anti-VEGF injections.",
    highlights: ["Anti-VEGF Injections", "Fundus Fluorescein Angiography", "OCT Retinal Mapping", "PRP Laser Treatments"]
  },
  {
    slug: "retina-posterior-segment",
    title: "Retina & Posterior Segment",
    subtitle: "(3D Retina & Image Guided Surgical)",
    tag: "3D Vitreoretinal Surgery",
    image: "/images/2025/11/retina-post.webp",
    excerpt: "Cutting-edge heads-up 3D surgical visualization and sutureless vitrectomy (MIVS) for retinal detachments, vitreous hemorrhages, and macular holes.",
    highlights: ["3D Heads-Up Visualization", "23G/25G Sutureless MIVS", "Endolaser Photocoagulation", "Gas & Silicone Oil Tamponade"]
  },
  {
    slug: "refractive-surgery",
    title: "Refractive Surgery",
    subtitle: "(PRK, LASIK, SMILE & ICL)",
    tag: "Spectacle Freedom",
    image: "/images/2025/11/refreactivesurgery.webp",
    excerpt: "Specialized correction of myopia, hypermetropia, astigmatism, and presbyopia using precision corneal topography, wavefront-guided LASIK, PRK, and Implantable Collamer Lenses (ICL).",
    highlights: ["Custom Wavefront LASIK", "PRK for Thin Corneas", "Phakic ICL Lenses", "Rapid 24-hr Recovery"]
  },
  {
    slug: "pediatric-ophthalmology",
    title: "Pediatric Ophthalmology",
    subtitle: "Child Eye Health & Amblyopia",
    tag: "Child-Friendly Eye Care",
    image: "/images/2025/11/paediatric-eye.webp",
    excerpt: "Specialized clinical diagnosis and management of eye diseases in infants, children, and adolescents, including amblyopia (lazy eye), congenital cataracts, and refractive errors.",
    highlights: ["Child-Friendly Exam Suites", "Amblyopia Vision Therapy", "Congenital Cataract Care", "EUA (General Anesthesia)"]
  },
  {
    slug: "occuloplasty",
    title: "Occuloplasty",
    subtitle: "Eyelid & Orbital Reconstructive Surgery",
    tag: "Functional & Aesthetic Care",
    image: "/images/2025/11/occuplasty.webp",
    excerpt: "Management of disorders affecting eyelids, tear ducts, eye socket (orbit), drooping eyelids (ptosis), entropion/ectropion, blocked tear ducts, and blepharoplasty.",
    highlights: ["Ptosis Correction", "Blepharoplasty", "DCR Tear Duct Surgery", "Thyroid Eye Disease"]
  },
  {
    slug: "uvea",
    title: "Uvea",
    subtitle: "Ocular Immunology & Inflammation",
    tag: "Uveitis Management",
    image: "/images/2025/11/uvea.webp",
    excerpt: "Detailed diagnosis and systemic management of anterior, intermediate, posterior, and pan-uveitis, autoimmune eye disorders, and ocular inflammatory conditions.",
    highlights: ["Immunosuppressive Therapy", "Targeted Corticosteroids", "Anterior/Posterior Uveitis", "Autoimmune Workups"]
  },
  {
    slug: "general-ophthalmology",
    title: "General Ophthalmology",
    subtitle: "Comprehensive Primary Eye Care",
    tag: "Routine Vision Screening",
    image: "/images/2025/11/generaloptho.webp",
    excerpt: "The cornerstone of all eye care services. Comprehensive evaluations including refraction, computerized eye testing, dry eye management, conjunctivitis, and digital strain care.",
    highlights: ["Computerized Refraction", "Slit Lamp Biomicroscopy", "Dry Eye & Allergy Relief", "Annual Eye Checkups"]
  },
  {
    slug: "retinopathy-of-prematurity",
    title: "Retinopathy of Prematurity",
    subtitle: "(ROP Screening & Care for Preterm Infants)",
    tag: "Neonatal Vision Preservation",
    image: "/images/2025/11/retinopathyprematurity.webp",
    excerpt: "Specialized bedside and hospital screening for premature infants born before 31 weeks or weighing under 1,250g. Laser photocoagulation and anti-VEGF therapy to prevent detachment.",
    highlights: ["Bedside Neonatal Screening", "Retinal Laser Photocoagulation", "Anti-VEGF Pharmacotherapy", "NICU Coordinated Follow-up"]
  }
];

export const diagnosticEquipment = [
  {
    title: "Corneal Topography",
    desc: "Creates a detailed 3D map of corneal curvature to detect Keratoconus, evaluate refractive surgery (LASIK) candidates, and guide specialty contact lens fitting.",
    image: "/images/2025/11/corneal-top.webp"
  },
  {
    title: "Fundus Fluorescein Angiography (FFA)",
    desc: "Injected dye study photographing retinal vascular dynamics to detect microaneurysms, diabetic ischemia, neovascularization, and macular edema.",
    image: "/images/2025/11/fundus.webp"
  },
  {
    title: "Digital Fundus Photography",
    desc: "Ultra-high resolution camera documenting the retina, optic disc, and macula for ongoing tracking of diabetic retinopathy, glaucoma, and AMD progression.",
    image: "/images/2025/11/fundus-photo.webp"
  },
  {
    title: "Indocyanine Green Angiography (ICG)",
    desc: "Infrared dye angiography visualizing deeper choroidal circulation, occult choroidal neovascular membranes, and complex inflammatory choroidopathies.",
    image: "/images/2025/11/green-angiography.webp"
  },
  {
    title: "Optical Biometry (A-Scan)",
    desc: "Micron-precise optical and ultrasound measurement of axial eye length to calculate exact Intraocular Lens (IOL) power prior to modern cataract surgery.",
    image: "/images/2025/11/optical-biometry.webp"
  },
  {
    title: "Optical Coherence Tomography (OCT)",
    desc: "Non-invasive cross-sectional optical biopsy imaging retinal layers, macular thickness, and retinal nerve fiber layer (RNFL) at micrometer resolution.",
    image: "/images/2025/11/optical-coherenc.webp"
  },
  {
    title: "Corneal Pachymetry",
    desc: "Ultrasonic and optical thickness measurement of the cornea, vital for assessing true intraocular pressure and screening for corneal thinning diseases.",
    image: "/images/2025/11/pachymetry.webp"
  },
  {
    title: "Specular Microscopy",
    desc: "Cellular density and morphology analysis of corneal endothelium to evaluate surgical safety before cataract surgery and monitor corneal health.",
    image: "/images/2025/11/specular-microscopy.webp"
  },
  {
    title: "Ultrasound B-Scan",
    desc: "High-frequency acoustic imaging visualizing the posterior segment and orbit when optical view is obscured by dense cataract or vitreous hemorrhage.",
    image: "/images/2025/11/ultrasound-bScan.webp"
  },
  {
    title: "Humphrey Visual Field Testing",
    desc: "Computerized perimeter mapping central and peripheral vision to diagnose and monitor glaucoma progression and neurological visual pathway defects.",
    image: "/images/2025/11/visual-fields.webp"
  },
  {
    title: "Panretinal Photocoagulation (PRP Laser)",
    desc: "Therapeutic green/yellow argon laser sealing abnormal ischemic retina to stop proliferative diabetic retinopathy and prevent vitreous hemorrhage.",
    image: "/images/2026/05/laser-for-prp-scaled.png"
  },
  {
    title: "YAG Laser Capsulotomy",
    desc: "Quick, painless outpatient laser procedure clearing secondary posterior capsular opacification (PCO) to restore crisp vision after cataract surgery.",
    image: "/images/2026/05/608ae83bc9a9e0791be04946_Screenshot-2021-04-29-at-1.09.02-PM.png"
  },
  {
    title: "YAG Laser Peripheral Iridotomy (YAG PI)",
    desc: "Preventive and curative laser opening in the iris to relieve pupillary block, deepen anterior chamber angles, and prevent acute angle-closure glaucoma.",
    image: "/images/2026/05/sm-yag-laser-peripheral-iridotomy-glaucoma.webp"
  },
  {
    title: "Laser Retinopexy",
    desc: "Controlled thermal laser adhesion creating a protective barrier around peripheral retinal tears to stop fluid entry and prevent full retinal detachment.",
    image: "/images/2026/05/maxresdefault.jpg"
  }
];

export const laboratoryServices = [
  {
    title: "Blood Investigations",
    desc: "Complete blood count (CBC), blood glucose (fasting & post-prandial, HbA1c), lipid profile, renal panel, coagulation profile (PT/INR), and viral serology for comprehensive pre-surgical fitness.",
    image: "/images/2025/11/blood-tests.webp"
  },
  {
    title: "Electrocardiogram (ECG)",
    desc: "12-lead cardiac electrical activity recording to assess cardiac rhythm, ischemic changes, and systemic surgical clearance for senior and high-risk patients.",
    image: "/images/2025/11/ecg.webp"
  },
  {
    title: "Urine Analysis & Microbiology",
    desc: "Routine and microscopic urine examination to detect asymptomatic infections, glucosuria, proteinuria, and ocular microbiology smears/cultures.",
    image: "/images/2025/11/urinetests.webp"
  }
];

export const servicesOutOfScope = [
  {
    title: "Congenital Glaucoma Surgical Management",
    desc: "While early screening and initial diagnostic pressure checks are provided, tertiary surgical pediatric goniotomy/trabeculotomy cases requiring pediatric ICU backup are referred to apex university centers.",
    image: "/images/2025/11/congenital.webp"
  },
  {
    title: "Electrophysiology of Retina (ERG / EOG / VEP)",
    desc: "Specialized electrodiagnostic recording of retinal electrical potential for rare hereditary retinal dystrophies and cortical visual assessment is coordinated with dedicated electrophysiology labs.",
    image: "/images/2025/11/electrophysiology.webp"
  },
  {
    title: "Functional & Complex Squint Surgery",
    desc: "Complex paralytic and re-operation strabismus surgical management requiring prolonged synoptophore training is coordinated with tertiary pediatric strabismus specialists.",
    image: "/images/2025/11/functional-squint.webp"
  },
  {
    title: "Orthoptic Vision Therapy Suites",
    desc: "Extended specialized binocular vision training suites are referred to accredited orthoptic institutes after primary pediatric assessment.",
    image: "/images/2025/11/orthoptic-evaluation.webp"
  }
];

export const newsArticles = [
  {
    slug: "excellence-in-advanced-eye-care-our-founding-legacy",
    title: "Excellence in Advanced Eye Care: Our Founding Legacy",
    date: "October 30, 2025",
    author: "Hospital Editorial Desk",
    image: "/images/2025/10/blog-1.jpg",
    excerpt: "Established with a mission to deliver world-class ophthalmic surgical care, Demo Eye Hospital has evolved into an accredited institution with over 50,000 successful procedures.",
    content: `Demo Eye Hospital was founded with a dedicated vision to deliver state-of-the-art ophthalmic care accessible to all patients. Built on a foundation of clinical excellence, academic rigor, and patient-centered service, the institution has continuously invested in pioneering surgical equipment.\n\nFrom modern diagnostic wings to laminar-airflow surgical suites, the center combines comprehensive eye care with advanced treatments. Our clinical infrastructure features computerized patient tracking, in-house optical dispensaries, and dedicated surgical day-care suites.\n\nOver the past three decades, the hospital's surgical faculty has completed more than 50,000 procedures across micro-incision cataracts, corneal transplants, vitreoretinal surgeries, and pediatric interventions.`
  },
  {
    slug: "community-care-programs-and-vision-outreach",
    title: "Community Outreach & Vision Screening Initiatives",
    date: "October 30, 2025",
    author: "Community Care Desk",
    image: "/images/2025/10/blog-2.jpg",
    excerpt: "Through our dedicated community trust, we provide free outpatient services, annual school vision screenings for 10,000+ children, and mobile eye clinics.",
    content: `Demo Eye Care Foundation Trust actively engages in community outreach through dedicated health initiatives launched to ensure eye health equity.\n\nThe trust provides outpatient consultations free for underserved and low-income patients every morning between 9:00 AM and 12:00 Noon at our base hospital.\n\nA cornerstone of our initiative is the School Children's Eye Screening Program, evaluating approximately 10,000 students annually and providing free corrective spectacles. Children requiring specialized surgery or vision therapy are treated at no cost at our main hospital.\n\nAdditionally, mobile diagnostic vans visit rural and suburban communities for diabetic retinopathy screening and early glaucoma detection, stopping preventable blindness before it occurs.`
  },
  {
    slug: "diabetic-retinopathy-protecting-your-vision-from-diabetes",
    title: "Diabetic Retinopathy: Protecting Your Vision from Diabetes",
    date: "November 6, 2025",
    author: "Retina Specialty Department",
    image: "/images/2025/11/medicalretina.webp",
    excerpt: "Diabetic retinopathy remains a leading cause of vision impairment. Learn why early screening with OCT and prompt anti-VEGF or laser interventions are essential.",
    content: `Diabetic Retinopathy is one of the most common and serious eye complications caused by diabetes, and it remains a leading cause of vision loss worldwide. High blood sugar levels over a long period can damage the tiny blood vessels in the retina—the light-sensitive tissue at the back of the eye responsible for sharp, clear vision.\n\nWhen these blood vessels become damaged, they may leak fluid, bleed, or swell, leading to blurred vision, dark spots, distorted images, and in severe cases, complete loss of sight.\n\nThe early stages of diabetic retinopathy often do not show any noticeable symptoms, which makes regular eye check-ups extremely important for every diabetic patient. Early detection through a detailed dilated eye examination can help diagnose changes before symptoms occur.\n\nWith proper treatment and strict control of blood sugar, blood pressure, and cholesterol, the progression of the disease can be slowed significantly. Advanced stages may require specialized treatments such as laser photocoagulation, anti-VEGF injections, or vitrectomy surgery. Scheduling routine eye examinations at least once a year is essential.`
  },
  {
    slug: "advanced-subspecialty-care-in-modern-ophthalmology",
    title: "Advanced Eye Care Specializations in Modern Ophthalmology",
    date: "October 30, 2025",
    author: "Clinical Director Desk",
    image: "/images/2025/10/blog-3.jpg",
    excerpt: "Decades of subspecialty excellence across cornea, retina, glaucoma, pediatric ophthalmology, and occuloplasty with image-guided surgical microscopes.",
    content: `Demo Eye Hospital features a dedicated team of ophthalmic surgeons with specialized fellowship training in retina, glaucoma, cataract, cornea, and refractive procedures.\n\nThe hospital is recognized for integrating 3D heads-up visualization, femtosecond lasers, and computerized wavefront diagnostics that significantly improve procedural precision and patient recovery times.\n\nOur patient-centric care pathways provide tailored treatment plans for every stage of life, from premature infant eye screening to complex adult reconstructive procedures.`
  }
];

export const gopalaRajuData = {
  name: "Dr. David Richardson",
  degrees: "MBBS, MD, Fellowship (Cornea & Microsurgery), Board Certified",
  title: "Medical Director & Chief Cornea Consultant",
  image: "/images/doctors/dr-c-v-gopala-raju.png",
  phoneNumbers: ["+1 (800) 555-0199", "+1 (800) 555-0122"],
  education: [
    { title: "Undergraduate (MBBS)", institute: "Premier Medical College of Health Sciences", year: "1988" },
    { title: "Postgraduate (MD Ophthalmology)", institute: "Apex National Institute of Ophthalmic Sciences", year: "1992" },
    { title: "Diplomate / Board Certification", institute: "National Board of Ophthalmic Examiners", year: "1993" },
    { title: "Fellowship in Cornea & Anterior Segment", institute: "International Institute of Ophthalmology", year: "1994" },
    { title: "Specialized Refractive Surgery Training", institute: "European Corneal & Refractive Center", year: "International" }
  ],
  career: [
    "Medical Director & Senior Consultant in Cornea, Anterior Segment and Refractive Surgery at Demo Eye Hospital.",
    "Postgraduate clinical mentor and surgical trainer for accredited ophthalmic fellowship candidates.",
    "Certified Lead Assessor for National Healthcare Quality & Patient Safety Accreditations.",
    "Over three decades of clinical practice with more than 20,000 successful microsurgical procedures."
  ],
  academics: [
    "Published over 15 scientific research papers in peer-reviewed national and international ophthalmology journals.",
    "Delivered numerous keynote lectures and surgical instruction courses at international conferences.",
    "Actively involved in developing state-level ophthalmic continuous medical education (CME) modules.",
    "Chief Guide and mentor for several postgraduate fellows and surgical residents."
  ],
  awards: [
    { year: "2000", name: "Distinguished Clinician Award", org: "National Ophthalmic Society" },
    { year: "2008", name: "Excellence in Surgical Innovation", org: "International Society of Cornea Specialists" },
    { year: "2015", name: "Community Healthcare Pioneer Honor", org: "Global Health Foundation" },
    { year: "2020", name: "Lifetime Academic Achievement", org: "Academy of Ophthalmology" },
    { year: "2024", name: "Master Surgeon Recognition", org: "Corneal & Refractive Surgeons Society" }
  ],
  leadership: [
    "Demo Eye Care Foundation Trust: Executive Trustee (Directing outreach and charitable eye care).",
    "Regional Eye Bank Network: Advisory Board Member & Cornea Preservation Trustee.",
    "National Ophthalmic Association: Past Secretary, Scientific Program Committee Chair.",
    "International Society of Refractive Surgery: Active Fellow and Peer Reviewer."
  ]
};

export const trustData = {
  title: "Demo Eye Care Foundation Trust",
  founded: 2001,
  inspiration: "Pioneering Vision for Preventable Blindness Eradication",
  tagline: "Sight for Every Soul - Compassionate Community Ophthalmology",
  overview: "Established in 2001 as a dedicated charitable wing, Demo Eye Care Foundation Trust operates a daily free outpatient clinic at the base hospital, conducts rural eye camps, coordinates the regional School Children's Eye Screening Program, and provides vocational training for paramedical personnel.",
  programs: [
    {
      title: "Free Community Outpatient Care (Base Hospital)",
      desc: "Every day from 9:00 AM to 12:00 Noon, underserved patients receive free specialist consultations, diagnostics, and essential medications."
    },
    {
      title: "Annual School Children's Vision Screening",
      desc: "Over 10,000 students in public and rural schools are screened each year. Customized spectacles are distributed 100% free of charge, and children requiring surgery or complex therapy are treated at the base hospital without cost."
    },
    {
      title: "Rural Outreach Mobile Clinic",
      desc: "A fully custom-built mobile eye clinic vehicle travels to remote rural, agricultural, and underserved communities for on-the-spot screening and surgical referrals."
    },
    {
      title: "Diabetic Retinopathy Mobile Screening",
      desc: "Specialized mobile fundus photography drives to identify silent diabetic retinal damage before irreversible vision impairment occurs."
    },
    {
      title: "Paramedic Vocational Skill Development",
      desc: "Accredited training center providing certified ophthalmic assistant and vision technician vocational courses for aspiring youth."
    }
  ]
};
