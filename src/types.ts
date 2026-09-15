export type ProjectCategory = 'all' | 'fullstack' | 'fintech' | 'devops' | 'ai' | 'cms';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'fullstack' | 'fintech' | 'devops' | 'ai' | 'cms';
  projectType?: 'in-house' | 'client' | 'banking' | 'personal' | 'research';
  tags: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  metrics?: ProjectMetric[];
  keyFeatures: string[];
  systemHighlights: string[];
  imageGradient?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  duration?: string;
  type: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  certificateAvailable?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  degreeType: 'master' | 'bachelor' | 'hsc' | 'ssc';
  institution: string;
  location: string;
  period: string;
  passingYear?: string;
  cgpa: string;
  scale: string;
  thesisOrProject?: string;
  keyCourses: string[];
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  category: 'devops' | 'banking' | 'software' | 'academic';
  skills: string[];
  description: string;
  fileUrl?: string;
  fileName?: string;
  verificationUrl?: string;
  verificationPoints?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featured?: boolean;
}

export interface UploadedCV {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadDate: string;
  dataUrl?: string;
  textSnippet?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  topic: string;
  message: string;
}

export interface ReferenceContact {
  id: string;
  name: string;
  position: string;
  organization: string;
  mobile: string;
  email: string;
}

export interface ReportingToolInfo {
  name: string;
  description: string;
  capabilities: string[];
  databaseSupport: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'profile' | 'certificate' | 'work' | 'event' | 'certificates' | 'events';
  dataUrl?: string;
  url?: string;
  uploadDate?: string;
  date?: string;
  caption?: string;
  tags?: string[];
}

export interface PortfolioCustomData {
  personalInfo?: Record<string, any>;
  projects?: Project[];
  certifications?: Certification[];
  gallery?: GalleryPhoto[];
  experiences?: Experience[];
}

