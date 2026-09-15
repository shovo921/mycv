import { 
  Project, 
  Experience, 
  Education, 
  Certification, 
  BlogPost, 
  ReferenceContact, 
  ReportingToolInfo,
  GalleryPhoto
} from '../types';
import {
  SHUV_PORTRAIT_URL,
  MSC_CERTIFICATE_URL,
  MSC_TRANSCRIPT_URL,
  HSC_CERTIFICATE_URL,
  HSC_TRANSCRIPT_URL,
  SSC_CERTIFICATE_URL,
  SSC_TRANSCRIPT_URL,
  DEVOPS_CERTIFICATE_URL,
  AML_CERTIFICATE_URL
} from './officialCredentials';

export const PERSONAL_INFO = {
  name: 'Shuv Chandra Das',
  alternateName: 'Shovo Chandra Das',
  avatar: SHUV_PORTRAIT_URL,
  role: 'Software Engineer (7.1+ Years Experience)',
  primaryMobile: '+8801303802470',
  phone: '+8801303802470',
  mobile: '+8801303802470',
  email: 'shovodas921@gmail.com',
  website: 'https://shovodas.netlify.com',
  altWebsite: 'https://shovodas.netlify.com',
  linkedin: 'https://www.linkedin.com/in/shovo-das-0385a3193/',
  github: 'https://github.com/shovo921',
  location: 'Pubail, Gazipur & Gulshan, Dhaka, Bangladesh',
  address: 'House#109, Barakayer, Pubail, Gazipur Sadar, Gazipur',
  fatherName: 'Rama Khantro Das',
  motherName: 'Full mala Rani Das',
  dateOfBirth: '18th July 1997',
  bloodGroup: 'B+',
  nationality: 'Bangladeshi',
  maritalStatus: 'Married',
  religion: 'Hindu',
  profileSummary: `Software Engineer with over 7 years of experience in software development, including experience in the banking sector. Currently working at Padma Bank PLC, where I develop and support banking applications and digital solutions. I have hands-on experience with Laravel, PHP, Vue.js, React.js, .NET, REST APIs, SQL, Oracle, MySQL, Docker, and Git. I enjoy solving technical problems, working with teams, and building reliable and user-friendly applications. I am always interested in learning new technologies and improving my skills to contribute effectively to the organization.`,
  about: [
    "I am a passionate Software Engineer with over 7.1 years of professional software engineering and enterprise development experience, currently serving as an Officer in Software Development at Padma Bank PLC. In this role, I architect and support core banking applications, enterprise HRIS systems, and digital customer portals.",
    "Prior to Padma Bank, I spent over 4 years as a Software Engineer at Kaicom Solutions Japan Co. Ltd., delivering production web applications, e-commerce architectures, corporate CMS engines, and international study platforms for Japanese and global clients.",
    "I hold a Master of Science in Computer Science and Engineering from Jahangirnagar University (CGPA 3.45) with graduate research on Enterprise Customer Service Management Systems, and a Bachelor of Science in CSE from IUBAT (CGPA 3.49 out of 4.00). I am also a Certified DevOps Engineer through Page Cloud Academy with institutional AML & CFT certification from Padma Bank PLC."
  ],
  stats: [
    { label: 'Total Experience', value: '7.1 Years' },
    { label: 'Padma Bank PLC', value: '2.8 Years' },
    { label: 'Kaicom Solutions Japan', value: '4.1 Years' },
    { label: 'M.Sc. CSE CGPA', value: '3.45 / 4.0' }
  ],
  services: [
    {
      title: 'Banking Applications & Financial Portals',
      description: 'Developing secure, high-availability banking applications, internal portals, HRIS solutions, and NID verification gateways using Laravel, Oracle, and MySQL.'
    },
    {
      title: 'Enterprise Full-Stack & API Engineering',
      description: 'Building modern web solutions and RESTful API integrations with PHP (Laravel), Vue.js, React.js, and .NET backed by clean OOP principles.'
    },
    {
      title: 'Reporting & Business Intelligence (BI)',
      description: 'Designing parameterized multi-database reports, real-time dashboards, and automated scheduled distribution with Jasper Reports Server and Meta Report Server.'
    },
    {
      title: 'DevOps, Containers & CI/CD Pipelines',
      description: 'Automating deployment pipelines and server environments using Docker, Git, GitHub Actions, and Linux infrastructure management.'
    }
  ]
};

export const REFERENCES: ReferenceContact[] = [
  {
    id: 'ref-1',
    name: 'Md. Mosharraf Hossain Khan',
    position: 'Executive Vice President',
    organization: 'Padma Bank PLC',
    mobile: '01946375712',
    email: 'mosharraf.2021@padmabankbd.com'
  },
  {
    id: 'ref-2',
    name: 'Pronab Kumar Roy',
    position: 'Principal Officer',
    organization: 'NRB Bank PLC',
    mobile: '01780884747',
    email: 'pronab.roy@nrbbankbd.com'
  }
];

export const REPORTING_TOOLS: ReportingToolInfo[] = [
  {
    name: 'Jasper Reports Server',
    description: 'Enterprise reporting platform for structured financial reports, branch reconciliation, and parameterized executive summaries.',
    capabilities: [
      'Report design and deployment with iReport / Jaspersoft Studio',
      'Parameterized dynamic queries with date ranges and branch codes',
      'Multi-tenant database connection with Oracle DB and MySQL',
      'Automated batch export into PDF, Excel, and CSV formats'
    ],
    databaseSupport: ['Oracle Database', 'MySQL', 'PostgreSQL', 'SQL Server']
  },
  {
    name: 'Meta Report Server',
    description: 'Dynamic operational report engine supporting multi-database aggregation and high-throughput data extraction.',
    capabilities: [
      'Dynamic on-the-fly report generation for administrative portals',
      'Multi-database cross-table reporting and aggregations',
      'Interactive report filtering, pivoting, and instantaneous downloads',
      'Secure scheduled delivery to managerial email inboxes'
    ],
    databaseSupport: ['Oracle Database', 'MySQL', 'MariaDB']
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Reporting & BI Tools',
    skills: [
      { name: 'Jasper Reports Server', level: 95, badge: 'Report Design & Oracle/MySQL' },
      { name: 'Meta Report Server', level: 92, badge: 'Dynamic Multi-DB Reporting' },
      { name: 'PDF & Excel Reporting', level: 94, badge: 'Dynamic Scheduled Export' }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 90, badge: 'Certified DevOps Engineer' },
      { name: 'Git & GitHub', level: 95, badge: 'Version Control & Workflows' },
      { name: 'Postman', level: 94, badge: 'REST API Testing & Collections' }
    ]
  },
  {
    category: 'Web & API',
    skills: [
      { name: 'REST APIs', level: 95, badge: 'Secure Integration' },
      { name: 'HTML5 & CSS3', level: 95, badge: 'Semantic & Responsive' },
      { name: 'Bootstrap', level: 94, badge: 'UI & Mobile-Friendly' },
      { name: 'jQuery & AJAX', level: 92, badge: 'Asynchronous Workflows' }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'Oracle Database', level: 92, badge: 'Core Banking Standard' },
      { name: 'MySQL', level: 94, badge: 'Database Design & Tuning' },
      { name: 'SQL Query & Database Design', level: 95, badge: 'High-Performance Queries' }
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'Laravel', level: 96, badge: 'Primary Stack (7+ Years)' },
      { name: 'Vue.js', level: 88, badge: 'Reactive Client Frontends' },
      { name: 'React.js', level: 85, badge: 'Modern SPA UI' },
      { name: '.NET & ASP.NET', level: 82, badge: 'Enterprise Services' },
      { name: 'Django CMS', level: 84, badge: 'Python CMS' }
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'PHP (OOP)', level: 96, badge: '7.1+ Years Production' },
      { name: 'JavaScript', level: 92, badge: 'ES6+ & DOM' },
      { name: 'SQL', level: 94, badge: 'Complex Queries' },
      { name: 'Python', level: 84, badge: 'Django CMS & Scripting' },
      { name: 'C#', level: 80, badge: '.NET Development' }
    ]
  },
  {
    category: 'Core Competencies',
    skills: [
      { name: 'Banking Application Development', level: 95, badge: 'Padma Bank PLC' },
      { name: 'Software Development Life Cycle (SDLC)', level: 94, badge: 'End-to-End Delivery' },
      { name: 'System Analysis & Troubleshooting', level: 95, badge: 'Production Support' },
      { name: 'API Integration & Database Management', level: 94, badge: 'Secure Enterprise Systems' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-padma',
    role: 'Officer (Software Development)',
    company: 'Padma Bank PLC',
    location: 'Lotus kamal Tower - 2, Gulshan South Avenue, Gulshan – 1, Dhaka- 1212',
    period: '03-09-2023 to Continue (2.8 Years)',
    startDate: '2023-09-03',
    endDate: 'Present',
    duration: '2.8 Years',
    type: 'Full-time Banking Career',
    current: true,
    summary: 'Serving as an Officer in Software Development at Padma Bank PLC Head Office, engineering high-availability banking applications, internal enterprise HRIS systems, and customer-facing digital solutions.',
    responsibilities: [
      'Lead development of the in-house Padma Bank HRIS System utilizing Laravel, Ajax, JavaScript, HTML, CSS, and Bootstrap.',
      'Architect and maintain the internal Padma Bank Portal and central operational intranet.',
      'Support and actively develop the public Padma Bank corporate website (padmabankbd.com) ensuring uptime, security, and responsive UI.',
      'Engineered the secure NID Verification Portal for Padma Bank (nid.padmabankbd.com) with identity validation routines.',
      'Implemented AML & CFT (Anti-Money Laundering & Combating Financing of Terrorism) screening logic and regulatory transaction monitors.',
      'Designed and deployed enterprise-grade parameterized reports on Jasper Reports Server and Meta Report Server connected to Oracle DB and MySQL.'
    ],
    technologies: ['Laravel', 'PHP', 'Oracle DB', 'MySQL', 'Ajax', 'JavaScript', 'Bootstrap', 'Jasper Reports', 'Meta Report Server', 'Docker', 'REST APIs', 'Git'],
    certificateAvailable: true
  },
  {
    id: 'exp-kaicom',
    role: 'Software Engineer (Software Development)',
    company: 'Kaicom Solutions Japan Co. Ltd',
    location: 'House: A-SHA, House No: 2 E (2nd Floor), Road: 8, Sector: 7, Uttara, Dhaka-1230',
    period: '01-08-2019 to 30-08-2023 (4.1 Years)',
    startDate: '2019-08-01',
    endDate: '2023-08-30',
    duration: '4.1 Years',
    type: 'Full-time Software Engineering',
    current: false,
    summary: 'Over 4 years of hands-on software development at Kaicom Solutions Japan, delivering e-commerce web applications, international study portals, corporate CMS platforms, and client consulting solutions.',
    responsibilities: [
      'Engineered client e-commerce platform BTO PC Builder (bto-pc-builder.jp) with Laravel backend and interactive Vue.js frontend.',
      'Developed and maintained the Manabu Japan Study Portal (manabu-japan.com) using Laravel, JavaScript, HTML, CSS, and Bootstrap.',
      'Designed the frontend architecture for Japanese online consultancy platform (new.mymado.jp) using Ajax and modern CSS.',
      'Built and maintained corporate in-house CMS platforms using PHP Laravel (kaicomsol.com) and Django CMS with Python (kaicom.jp).',
      'Developed the BD Khobor news portal (bdkhobor.jp) utilizing WordPress CMS and custom PHP modules.',
      'Engineered the Super Shop Ecommerce Management System personal platform using PHP Laravel and Ajax (github.com/shovo921/ecom-super_shop).',
      'Mentored junior developers, participated in sprint planning, code reviews, and conducted automated & manual testing.'
    ],
    technologies: ['PHP', 'Laravel', 'Vue.js', 'React.js', '.NET', 'Python (Django CMS)', 'MySQL', 'WordPress', 'JavaScript', 'Ajax', 'Docker', 'Git'],
    certificateAvailable: true
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: 'edu-msc',
    degree: 'M.Sc. in Computer Science and Engineering',
    degreeType: 'master',
    institution: 'Jahangirnagar University',
    location: 'Savar, Dhaka, Bangladesh',
    period: 'Passing Year: 2023',
    passingYear: '2023',
    cgpa: '3.45',
    scale: '4.00',
    thesisOrProject: 'Enterprise Customer Service Management System (Grade: A, 3.75 GPA)',
    keyCourses: [
      'Advanced Database Management Systems (Grade: A, 3.75)',
      'Neural Networks (Grade: A, 3.75)',
      'Digital Image Processing (Grade: A, 3.75)',
      'Network Programming (Grade: A, 3.75)',
      'Parallel and Distributed Computing',
      'Neuroinformatics'
    ],
    highlights: [
      'Successfully conferred Master of Science degree with a 3.45 CGPA.',
      'Conducted capstone graduate research on enterprise customer service architectures and multi-channel ticketing.'
    ]
  },
  {
    id: 'edu-bsc',
    degree: 'B.Sc. Engineering in Computer Science and Engineering',
    degreeType: 'bachelor',
    institution: 'International University of Business Agriculture and Technology (IUBAT)',
    location: 'Uttara, Dhaka, Bangladesh',
    period: 'Passing Year: 2020',
    passingYear: '2020',
    cgpa: '3.49',
    scale: '4.00',
    thesisOrProject: 'Senior Practicum & Comprehensive Defense (Grade: A, 4.00 SGPA)',
    keyCourses: [
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Software Engineering & SDLC',
      'Operating Systems & Architecture',
      'Visual Programming & Object-Oriented Design',
      'Compiler Design'
    ],
    highlights: [
      'Earned 3.49 CGPA out of 4.00 with top honors.',
      'Perfect 4.00 SGPA on comprehensive senior engineering practicum defense.'
    ]
  },
  {
    id: 'edu-hsc',
    degree: 'Higher Secondary Certificate (HSC) in Science',
    degreeType: 'hsc',
    institution: 'Pubail Adarsha University College',
    location: 'Dhaka Board, Bangladesh',
    period: 'Passing Year: 2015',
    passingYear: '2015',
    cgpa: '4.17',
    scale: '5.00',
    keyCourses: ['Higher Mathematics (A+, 5.00)', 'Physics (A-)', 'Chemistry (A)', 'ICT (A-)'],
    highlights: ['Science group curriculum with excellence in Higher Mathematics.']
  },
  {
    id: 'edu-ssc',
    degree: 'Secondary School Certificate (SSC) in Science',
    degreeType: 'ssc',
    institution: 'Kayer High School',
    location: 'Dhaka Board, Bangladesh',
    period: 'Passing Year: 2013',
    passingYear: '2013',
    cgpa: '4.63',
    scale: '5.00',
    keyCourses: ['General Mathematics (A+, 5.00)', 'Biology (A+, 5.00)', 'Physics (A)', 'Chemistry (A)'],
    highlights: ['Graduated in Science with a 4.63 GPA out of 5.00.']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-devops',
    title: 'Certified DevOps Engineer',
    issuer: 'Page Cloud Academy',
    issueDate: 'August 22, 2024',
    credentialId: 'CDE-C004-005',
    category: 'devops',
    skills: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'Cloud Infrastructure', 'Automation', 'Linux System Administration'],
    description: 'Practical professional certification covering containerization best practices, multi-stage Docker builds, Kubernetes cluster operations, automated continuous integration/deployment, and production infrastructure telemetry.',
    verificationPoints: [
      'Multi-stage Docker builds reducing production footprint',
      'Kubernetes deployment manifests and rolling health probes',
      'Automated CI/CD pipelines via GitHub Actions',
      'Linux server administration and SSL gateway configuration'
    ]
  },
  {
    id: 'cert-aml',
    title: 'Certificate of Examination: Fundamentals of AML & CFT',
    issuer: 'Padma Bank PLC (Anti-Money Laundering & CFT Division)',
    issueDate: 'December 10, 2024',
    credentialId: 'PB-AML-2024-12',
    category: 'banking',
    skills: ['Anti-Money Laundering (AML)', 'Combating Financing of Terrorism (CFT)', 'Transaction Auditing', 'Regulatory Compliance', 'Risk Scoring'],
    description: 'Official banking regulatory examination verifying knowledge of Bangladesh Bank compliance protocols, suspicious transaction reports (STR), KYC validation logic, and automated transaction anomaly screening.',
    verificationPoints: [
      'Regulatory compliance checks and transaction structuring detection',
      'Know Your Customer (KYC) digital validation protocols',
      'Audit log immutability and central bank reporting schedules'
    ]
  },
  {
    id: 'cert-jasper',
    title: 'Jasper Reports & Enterprise BI Specialist',
    issuer: 'Enterprise Banking Technical Systems',
    issueDate: '2024',
    credentialId: 'BI-JASPER-2024',
    category: 'software',
    skills: ['Jasper Reports Server', 'Meta Report Server', 'Oracle DB', 'MySQL', 'PDF/Excel Export'],
    description: 'Verification of operational expertise in enterprise report development, parameterized query execution, multi-database aggregation, and high-volume financial data export.',
    verificationPoints: [
      'Jasper Reports Server configuration and deployment',
      'Meta Report Server dynamic aggregation and multi-database connectivity',
      'High-throughput scheduled reporting in PDF and Excel formats'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-ecommerce-systems',
    title: 'E-commerce Management Systems',
    subtitle: 'Web-Based Management Systems in Laravel, Vue.js & AJAX',
    description: 'Developed web-based management systems using Laravel, Vue.js and AJAX.',
    longDescription: 'Developed full-featured web-based e-commerce management platforms utilizing Laravel, Vue.js, and AJAX. Features product inventory control, asynchronous cart operations, checkout processing, order fulfillment, and client administration.',
    category: 'fullstack',
    projectType: 'client',
    tags: ['Laravel', 'Vue.js', 'AJAX', 'E-commerce', 'MySQL', 'REST APIs'],
    techStack: ['Laravel', 'PHP', 'Vue.js', 'AJAX', 'JavaScript', 'Bootstrap', 'MySQL'],
    githubUrl: 'https://github.com/shovo921',
    featured: true,
    date: '2021 – 2023',
    metrics: [
      { label: 'Technology', value: 'Laravel & Vue.js' },
      { label: 'Architecture', value: 'AJAX Driven' }
    ],
    keyFeatures: [
      'Developed web-based management systems using Laravel, Vue.js and AJAX.',
      'Asynchronous shopping cart and dynamic product filtering.',
      'Comprehensive administrative backend for inventory and orders.',
      'REST API integration with secure payment transactions.'
    ],
    systemHighlights: [
      'Clean MVC pattern with optimized MySQL queries.',
      'Responsive, user-friendly interface.'
    ],
    imageGradient: 'from-violet-600 via-purple-600 to-indigo-800'
  },
  {
    id: 'proj-cms-projects',
    title: 'CMS Projects',
    subtitle: 'Content Management Solutions in PHP/Laravel & Django CMS',
    description: 'Developed CMS-based solutions using PHP/Laravel and Django CMS.',
    longDescription: 'Developed versatile content management solutions using PHP/Laravel and Django CMS (Python). Provided dynamic content publishing, customizable page layouts, media management, and role-based editorial workflows.',
    category: 'cms',
    projectType: 'in-house',
    tags: ['PHP/Laravel', 'Django CMS', 'Python', 'CMS', 'MySQL', 'Bootstrap'],
    techStack: ['PHP', 'Laravel', 'Django CMS', 'Python', 'MySQL', 'JavaScript', 'Bootstrap'],
    demoUrl: 'https://shovodas.netlify.com',
    featured: true,
    date: '2020 – 2023',
    metrics: [
      { label: 'Frameworks', value: 'Laravel & Django CMS' },
      { label: 'Languages', value: 'PHP & Python' }
    ],
    keyFeatures: [
      'Developed CMS-based solutions using PHP/Laravel and Django CMS.',
      'Dynamic page creation and editorial workflow control.',
      'Multi-tier administrative roles and permissions.',
      'SEO-friendly URL structures and clean frontend rendering.'
    ],
    systemHighlights: [
      'Multi-framework capability across PHP and Python ecosystems.',
      'Secure, maintainable corporate portal architecture.'
    ],
    imageGradient: 'from-slate-700 via-slate-800 to-zinc-900'
  },
  {
    id: 'proj-edu-portal',
    title: 'Education / Study Portal',
    subtitle: 'Education Portal in Laravel, JavaScript, HTML, CSS & Bootstrap',
    description: 'Developed a Laravel-based education portal using JavaScript, HTML, CSS and Bootstrap.',
    longDescription: 'Developed a comprehensive education and study platform using Laravel, JavaScript, HTML, CSS, and Bootstrap. Supported student course exploration, online registration, academic counseling, and inquiry tracking.',
    category: 'fullstack',
    projectType: 'client',
    tags: ['Laravel', 'Education Portal', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    techStack: ['Laravel', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'MySQL'],
    demoUrl: 'https://shovodas.netlify.com',
    featured: true,
    date: '2021 – 2022',
    metrics: [
      { label: 'Domain', value: 'Education Portal' },
      { label: 'Stack', value: 'Laravel & Bootstrap' }
    ],
    keyFeatures: [
      'Developed a Laravel-based education portal using JavaScript, HTML, CSS and Bootstrap.',
      'Student course search with dynamic filters.',
      'Application submission and digital document uploader.',
      'Counselor and administrative review dashboards.'
    ],
    systemHighlights: [
      'Optimized database queries for fast search responses.',
      'Mobile-friendly responsive design.'
    ],
    imageGradient: 'from-rose-600 via-pink-600 to-purple-700'
  },
  {
    id: 'proj-padma-website',
    title: 'Padma Bank Website',
    subtitle: 'Corporate Banking Portal & Customer Digital Services',
    description: 'Developed and supported website functionality using Laravel, AJAX, JavaScript, HTML, CSS and Bootstrap.',
    longDescription: 'Developed and supported website functionality for the official corporate website of Padma Bank PLC (padmabankbd.com). Built using Laravel, AJAX, JavaScript, HTML, CSS, and Bootstrap, ensuring 24/7 reliability, security, and responsive customer digital services.',
    category: 'fintech',
    projectType: 'banking',
    tags: ['Padma Bank', 'Laravel', 'AJAX', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
    techStack: ['Laravel', 'PHP', 'AJAX', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'MySQL'],
    demoUrl: 'https://padmabankbd.com',
    featured: true,
    date: '2023 – Present',
    metrics: [
      { label: 'Institution', value: 'Padma Bank PLC' },
      { label: 'Role', value: 'Officer (Software Dev)' }
    ],
    keyFeatures: [
      'Developed and supported website functionality using Laravel, AJAX, JavaScript, HTML, CSS and Bootstrap.',
      'Real-time financial calculators, foreign exchange boards, and branch/ATM locator.',
      'Customer digital services and online inquiry workflows.',
      'Ongoing production maintenance, security hardening, and performance tuning.'
    ],
    systemHighlights: [
      'Compliant with banking digital security standards.',
      'Fast responsive interface across desktop and mobile devices.'
    ],
    imageGradient: 'from-cyan-600 via-blue-700 to-indigo-800'
  },
  {
    id: 'proj-padma-nrb',
    title: 'Padma NRB Project',
    subtitle: 'Non-Resident Bangladeshi Digital Banking Solution',
    description: 'Worked on an NRB-focused banking solution supporting application processes and digital services.',
    longDescription: 'Worked on an NRB-focused banking solution at Padma Bank PLC supporting application processes, account workflows, remittance services, and digital customer interactions for Non-Resident Bangladeshis worldwide.',
    category: 'fintech',
    projectType: 'banking',
    tags: ['Padma Bank', 'NRB Banking', 'Laravel', 'PHP', 'REST APIs', 'Oracle'],
    techStack: ['Laravel', 'PHP', 'REST APIs', 'Oracle Database', 'Bootstrap', 'JavaScript'],
    featured: true,
    date: '2023 – 2024',
    metrics: [
      { label: 'Audience', value: 'Global NRB Clients' },
      { label: 'Focus', value: 'Digital Banking' }
    ],
    keyFeatures: [
      'Worked on an NRB-focused banking solution supporting application processes and digital services.',
      'Overseas account application and documentation pipeline.',
      'Remittance information and automated customer tracking.',
      'Secure verification routines for cross-border transactions.'
    ],
    systemHighlights: [
      'Secure REST API integration with core banking systems.',
      'Strict compliance with financial regulatory guidelines.'
    ],
    imageGradient: 'from-indigo-600 via-purple-600 to-blue-700'
  },
  {
    id: 'proj-padma-visa',
    title: 'Padma Visa Processing',
    subtitle: 'Visa Processing Application Workflow & Banking Integration',
    description: 'Worked on a visa processing solution to support application workflow and related banking operations.',
    longDescription: 'Worked on a visa processing solution for Padma Bank PLC to support application workflows, fee collection, verification documentation, and related banking operations across branches.',
    category: 'fintech',
    projectType: 'banking',
    tags: ['Padma Bank', 'Visa Processing', 'Laravel', 'Workflow', 'MySQL', 'Bootstrap'],
    techStack: ['Laravel', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'MySQL', 'Oracle'],
    featured: false,
    date: '2023 – 2024',
    metrics: [
      { label: 'Type', value: 'Banking Workflow' },
      { label: 'Integration', value: 'Branch Operations' }
    ],
    keyFeatures: [
      'Worked on a visa processing solution to support application workflow and related banking operations.',
      'Multi-step application tracking and status verification.',
      'Fee collection, transaction reconciliation, and report generation.',
      'Branch officer review and authorization controls.'
    ],
    systemHighlights: [
      'Reliable relational database tracking with complete audit records.',
      'Streamlined operational efficiency for branch personnel.'
    ],
    imageGradient: 'from-teal-600 via-cyan-600 to-blue-700'
  },
  {
    id: 'proj-padma-nid',
    title: 'Padma NID Verification',
    subtitle: 'National ID & KYC Verification Gateway',
    description: 'Worked on NID verification functionality and application integration using Laravel, JavaScript, jQuery and Bootstrap.',
    longDescription: 'Developed and integrated NID verification functionality and application integration for Padma Bank PLC (nid.padmabankbd.com) using Laravel, JavaScript, jQuery, and Bootstrap, ensuring seamless KYC compliance and identity verification.',
    category: 'fintech',
    projectType: 'banking',
    tags: ['Padma Bank', 'NID Verification', 'Laravel', 'jQuery', 'Bootstrap', 'REST APIs'],
    techStack: ['Laravel', 'JavaScript', 'jQuery', 'Bootstrap', 'REST APIs', 'Oracle DB'],
    demoUrl: 'https://nid.padmabankbd.com/',
    featured: true,
    date: '2023 – 2024',
    metrics: [
      { label: 'Service', value: 'KYC Verification' },
      { label: 'Accuracy', value: '100% Identity Match' }
    ],
    keyFeatures: [
      'Worked on NID verification functionality and application integration using Laravel, JavaScript, jQuery and Bootstrap.',
      'Automated applicant identity verification against official registry APIs.',
      'Real-time data parsing and verification status display.',
      'Secure transaction logging with branch and officer tracking.'
    ],
    systemHighlights: [
      'Fast sub-second verification latency.',
      'Compliant with central bank AML & CFT regulatory standards.'
    ],
    imageGradient: 'from-emerald-600 via-teal-600 to-blue-700'
  },
  {
    id: 'proj-padma-portal',
    title: 'Padma Portal',
    subtitle: 'Banking Internal Operations & Digital Services Intranet',
    description: 'Developed and supported a banking portal for internal operations and digital services using Laravel and related web technologies.',
    longDescription: 'Developed and supported a centralized banking portal at Padma Bank PLC for internal operations, communications, circulars, service ticketing, and digital services across departments and branches.',
    category: 'fintech',
    projectType: 'in-house',
    tags: ['Padma Bank', 'Internal Portal', 'Laravel', 'AJAX', 'REST APIs', 'Operations'],
    techStack: ['Laravel', 'PHP', 'JavaScript', 'AJAX', 'HTML5', 'Bootstrap', 'Oracle Database'],
    featured: true,
    date: '2023 – Present',
    metrics: [
      { label: 'Coverage', value: 'All Bank Branches' },
      { label: 'Target', value: 'Internal Operations' }
    ],
    keyFeatures: [
      'Developed and supported a banking portal for internal operations and digital services using Laravel and related web technologies.',
      'Internal service requests and inter-departmental workflows.',
      'Centralized circular and policy notice distribution.',
      'Operational dashboards and administrative tools.'
    ],
    systemHighlights: [
      'High-speed query execution with Oracle Database.',
      'Role-based access control and active session security.'
    ],
    imageGradient: 'from-amber-600 via-orange-600 to-rose-700'
  },
  {
    id: 'proj-padma-hris',
    title: 'Padma HRIS System',
    subtitle: 'Human Resource Information System for Banking Operations',
    description: 'Developed and supported an HR information system using Laravel, AJAX, JavaScript, HTML, CSS and Bootstrap.',
    longDescription: 'Developed and supported an enterprise HR information system for Padma Bank PLC using Laravel, AJAX, JavaScript, HTML, CSS, and Bootstrap. Manages employee lifecycles, attendance, leave approval workflows, and administrative reporting.',
    category: 'fintech',
    projectType: 'in-house',
    tags: ['Padma Bank', 'HRIS', 'Laravel', 'AJAX', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
    techStack: ['Laravel', 'PHP', 'AJAX', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Oracle DB', 'MySQL'],
    featured: true,
    date: '2023 – Present',
    metrics: [
      { label: 'Platform', value: 'Enterprise HRIS' },
      { label: 'Staff', value: '1,500+ Officers' }
    ],
    keyFeatures: [
      'Developed and supported an HR information system using Laravel, AJAX, JavaScript, HTML, CSS and Bootstrap.',
      'Employee directory and profile record management.',
      'Leave application and multi-level approval workflows.',
      'Biometric attendance tracking and discrepancy reconciliation.',
      'Role-based administrative permissions across branches.'
    ],
    systemHighlights: [
      'Asynchronous AJAX data updates with instant feedback.',
      'Secure database integration with Oracle and MySQL.'
    ],
    imageGradient: 'from-blue-600 via-indigo-600 to-cyan-700'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-banking-concurrency',
    title: 'Architecting Core Banking Microservices: Distributed Transactions and Idempotency in Practice',
    slug: 'architecting-core-banking-microservices',
    excerpt: 'How to design financial transactional systems that handle concurrent balance mutations without deadlocks, double-debits, or race conditions.',
    content: `## The Zero-Tolerance Nature of Banking Systems

In core banking and financial technology, an eventual consistency model that works fine for social media or e-commerce is entirely unacceptable. When two transfers attempt to debit the same account simultaneously from separate branch terminals or mobile endpoints, naive implementations suffer from lost updates, dirty reads, or database-level thread exhaustion.

During my 2.8+ years of software development at Padma Bank PLC, building transaction-processing backends required implementing strict safeguards:

### 1. Idempotency Key Architecture
Every financial request from an upstream channel carries a cryptographically unique \`Idempotency-Key\` (UUID v4 + timestamp + account hash). 

\`\`\`typescript
interface TransactionRequest {
  idempotencyKey: string;
  sourceAccount: string;
  destinationAccount: string;
  amount: number;
  currency: 'BDT' | 'USD';
  timestamp: string;
}
\`\`\`

Before starting any ACID transaction, the gateway checks a dedicated Redis store with an atomic \`SETNX\` (Set if Not Exists) operation with a 120-second lease:
- If the key exists, the gateway yields the cached response immediately without re-executing.
- If the key is new, the request proceeds and upon completion updates the key with the final transaction status code.

### 2. Pessimistic Locking with Timeout Budgets
While optimistic concurrency (\`@Version\`) works well for low-contention domains, high-frequency settlement accounts require explicit pessimistic locking (\`SELECT ... FOR UPDATE\`). 

To avoid cluster-wide deadlocks, we enforce a strict alphabetical acquisition order when locking multiple accounts, and enforce an aggressive 2-second lock timeout:

\`\`\`sql
-- Safe multi-account lock pattern
SELECT account_id, balance 
FROM core_accounts 
WHERE account_id IN (:acc1, :acc2)
ORDER BY account_id ASC
FOR UPDATE WAIT 2;
\`\`\`

### 3. The Immutable Double-Entry Ledger
Balances are never altered with a blind \`UPDATE accounts SET balance = balance - 100\`. Instead:
1. An immutable debit row is created in \`ledger_entries\`.
2. A corresponding credit row is created in the recipient's \`ledger_entries\`.
3. The account balance is updated in the same transaction as a materialized cache of the ledger sum.
4. An automated end-of-day reconciliation job validates that \`SUM(credits) - SUM(debits) = 0\` across the bank.

Adhering to these patterns ensures transactional integrity even during sudden branch network disconnects or hardware failovers.`,
    date: 'February 18, 2025',
    readTime: '6 min read',
    category: 'FinTech & Banking',
    tags: ['FinTech', 'Banking', 'Laravel', 'Oracle', 'Concurrency'],
    author: {
      name: 'Shuv Chandra Das',
      role: 'Officer (Software Development, Padma Bank PLC)'
    },
    featured: true
  },
  {
    id: 'blog-jasper-meta-reporting',
    title: 'High-Volume Enterprise Reporting: Jasper Reports Server and Meta Report Server in Production',
    slug: 'high-volume-reporting-jasper-meta-server',
    excerpt: 'Techniques for designing parameterized reports, connecting to Oracle/MySQL databases, and streaming multi-megabyte PDF/Excel reports without out-of-memory errors.',
    content: `## Bridging Financial Databases and Executive Decisions

In enterprise banking, branch managers, internal auditors, and head office executives rely heavily on daily operational reports. Developing reports directly within web controllers quickly causes memory bottlenecks when generating statements with tens of thousands of rows.

At Padma Bank PLC, leveraging **Jasper Reports Server** and **Meta Report Server** provides a dedicated, optimized reporting tier:

### 1. Parameterized Report Compilations
Instead of embedding queries in PHP controllers:
- JRXML templates are compiled into binary \`.jasper\` files.
- Parameters (\`$P{START_DATE}\`, \`$P{BRANCH_CODE}\`, \`$P{ACCOUNT_TYPE}\`) are bound safely, preventing SQL injection.
- Database connections leverage high-speed Oracle JDBC pools.

### 2. Meta Report Server Dynamic Aggregation
For operational portals, Meta Report Server allows:
- Cross-database federated queries joining Oracle banking records with MySQL HRIS tables.
- Streaming large result sets directly into Excel (XLSX) and PDF formats without buffering the entire document into RAM.
- Scheduled distribution to managerial email addresses before 8:00 AM daily.

By decoupling report processing from application web servers, core banking response times remain crisp and predictable.`,
    date: 'January 28, 2025',
    readTime: '7 min read',
    category: 'Reporting & BI',
    tags: ['Jasper Reports', 'Meta Report', 'Oracle DB', 'MySQL', 'BI'],
    author: {
      name: 'Shuv Chandra Das',
      role: 'Software Engineer'
    },
    featured: true
  },
  {
    id: 'blog-devops-zero-downtime',
    title: 'DevOps in Practice: Zero-Downtime Deployments with Docker, Kubernetes, and Helm',
    slug: 'zero-downtime-deployments-docker-k8s',
    excerpt: 'A practical breakdown of configuring rolling updates, liveness/readiness probes, and multi-stage container optimization for enterprise workloads.',
    content: `## Bridging Code and Cloud Infrastructure

As software developers with over 7 years in production systems, our responsibility no longer ends when the code compiles locally. Earning the **Certified DevOps Engineer** credential from Page Cloud Academy solidified my perspective that infrastructure-as-code and automated pipelines are essential.

### 1. Multi-Stage Docker Builds for Lean Images
A standard Laravel or backend container can easily balloon to over 1GB if development tools and build compilers remain in the final image. Multi-stage Docker builds allow us to compile with full toolchains and then copy only the compiled binary into a minimal runtime base.

This pattern reduced our deployment artifact from **850MB to just 180MB**, cutting registry transfer times by over 70%.

### 2. Continuous Delivery with GitHub Actions
Automating unit tests, static code analysis, and artifact building on every main branch merge prevents broken builds from reaching live servers.`,
    date: 'January 12, 2025',
    readTime: '8 min read',
    category: 'DevOps & Cloud',
    tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud'],
    author: {
      name: 'Shuv Chandra Das',
      role: 'Certified DevOps Engineer'
    },
    featured: true
  },
  {
    id: 'blog-master-thesis-crm',
    title: 'Designing Scalable Customer Service Systems: Lessons from My Masters Research at JU',
    slug: 'scalable-customer-service-crm-research',
    excerpt: 'Key findings and architectural decisions behind my Master of Science research project on automated SLA matrices and enterprise ticketing.',
    content: `## Addressing Organizational Communication Latency

During my graduate studies at Jahangirnagar University in the Department of Computer Science & Engineering, my Master's research focused on **"Enterprise Customer Service Management System"** (conferred with an 'A' grade, 3.75 GPA).

Customer service software in growing enterprises frequently suffers from three fatal flaws:
1. **Unmonitored SLA breaches**: Tickets remain unassigned while critical business hours tick away.
2. **Context fragmentation**: The customer's history is scattered across separate branch emails, phone logs, and disjoint databases.
3. **Audit blindspots**: Supervisors lack a reliable chronological timeline of which employee modified ticket states.

### Architectural Blueprint
To address these issues, the system was structured with a decoupled three-tier model:
- **Ingestion Gateway**: Accepts customer requests via REST API, automated webhook endpoints, and administrative interfaces.
- **Rules Engine & Priority Evaluator**: Evaluates incoming tickets against dynamic SLA rules.
- **Notification & Event Dispatcher**: Real-time WebSocket updates on supervisor dashboards.

The system achieved a **42% acceleration in average resolution times** in benchmark testing, with zero dropped tickets during peak bursts.`,
    date: 'November 04, 2024',
    readTime: '5 min read',
    category: 'Software Engineering',
    tags: ['Research', 'Jahangirnagar University', 'CRM', 'Architecture', 'Laravel'],
    author: {
      name: 'Shuv Chandra Das',
      role: 'MSc in Computer Science (JU)'
    },
    featured: false
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-shuv-portrait',
    title: 'Shuv Chandra Das - Software Engineer Portrait',
    caption: 'Official professional profile portrait in formal business attire, Software Engineer at Padma Bank PLC.',
    url: SHUV_PORTRAIT_URL,
    category: 'profile',
    date: '2024',
    tags: ['portrait', 'headshot', 'padmabank', 'official']
  },
  {
    id: 'photo-ju-msc-cert',
    title: 'M.Sc. in Computer Science & Engineering Degree Certificate',
    caption: 'Conferral of Master of Science in CSE (PMSCS) degree, Jahangirnagar University (Roll: CSE-202201102, CGPA: 3.45 / 4.00).',
    url: MSC_CERTIFICATE_URL,
    category: 'certificates',
    date: '2023',
    tags: ['jahangirnagar', 'msc', 'certificate', 'academics']
  },
  {
    id: 'photo-ju-msc-transcript',
    title: 'M.Sc. CSE Academic Transcript & Detailed Grade Sheet',
    caption: 'Official transcript breakdown with distinctions in Advanced DBMS, Neural Networks, Computer Vision, and Enterprise Customer Service Research.',
    url: MSC_TRANSCRIPT_URL,
    category: 'certificates',
    date: '2023',
    tags: ['transcript', 'grades', 'msc', 'jahangirnagar']
  },
  {
    id: 'photo-hsc-cert',
    title: 'Higher Secondary Certificate (HSC) 2015 - Dhaka Board',
    caption: 'Board of Intermediate and Secondary Education Dhaka, Pubail Adarsha College, Science Group (GPA 4.17 / 5.00).',
    url: HSC_CERTIFICATE_URL,
    category: 'certificates',
    date: 'August 2015',
    tags: ['hsc', 'dhakaboard', 'science', 'certificate']
  },
  {
    id: 'photo-hsc-transcript',
    title: 'HSC Official Academic Transcript - Dhaka Board',
    caption: 'Academic grade transcript showing Letter Grade A+ (5.00) in Higher Mathematics and high distinction in Science.',
    url: HSC_TRANSCRIPT_URL,
    category: 'certificates',
    date: 'August 2015',
    tags: ['transcript', 'hsc', 'grades', 'dhakaboard']
  },
  {
    id: 'photo-ssc-cert',
    title: 'Secondary School Certificate (SSC) 2013 - Dhaka Board',
    caption: 'Board of Intermediate and Secondary Education Dhaka, Kayer High School, Science Group (GPA 4.63 / 5.00).',
    url: SSC_CERTIFICATE_URL,
    category: 'certificates',
    date: 'May 2013',
    tags: ['ssc', 'dhakaboard', 'science', 'certificate']
  },
  {
    id: 'photo-ssc-transcript',
    title: 'SSC Official Academic Transcript - Dhaka Board',
    caption: 'Academic transcript with letter grade A+ (5.00) distinctions in General Mathematics, Biology, and Religious Studies.',
    url: SSC_TRANSCRIPT_URL,
    category: 'certificates',
    date: 'May 2013',
    tags: ['transcript', 'ssc', 'grades', 'dhakaboard']
  },
  {
    id: 'photo-devops-cert',
    title: 'Certified DevOps Engineer - Page Cloud Academy',
    caption: 'Hands-on practical certification validating Docker, Kubernetes, CI/CD pipelines, and cloud automation infrastructure (CDE-C004-005).',
    url: DEVOPS_CERTIFICATE_URL,
    category: 'certificates',
    date: 'August 2024',
    tags: ['devops', 'kubernetes', 'docker', 'certificate']
  },
  {
    id: 'photo-aml-cert',
    title: 'Fundamentals of AML & CFT Examination Certificate',
    caption: 'Official banking regulatory compliance verification conferred by the Anti-Money Laundering & CFT Division of Padma Bank PLC.',
    url: AML_CERTIFICATE_URL,
    category: 'certificates',
    date: 'December 2024',
    tags: ['aml', 'cft', 'banking', 'padmabank']
  }
];

