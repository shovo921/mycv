import React, { useState, useRef } from 'react';
import { 
  X, 
  Upload, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  Award, 
  Briefcase, 
  Image as ImageIcon, 
  User, 
  Database, 
  Download, 
  FileText, 
  ExternalLink, 
  AlertCircle,
  Save,
  RotateCcw,
  ShieldCheck,
  Eye,
  Lock,
  Unlock,
  Sparkles,
  ArrowLeft,
  Sun,
  Moon
} from 'lucide-react';
import { 
  Project, 
  Certification, 
  GalleryPhoto, 
  PortfolioCustomData,
  ReferenceContact,
  UploadedCV
} from '../types';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, REFERENCES } from '../data/portfolioData';

interface AdminModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  fullPage?: boolean;
  onNavigateHome?: () => void;
  darkMode: boolean;
  setDarkMode?: (val: boolean) => void;
  projects: Project[];
  certifications: Certification[];
  personalInfo?: typeof PERSONAL_INFO;
  galleryPhotos?: GalleryPhoto[];
  photos?: GalleryPhoto[];
  onUpdateProjects: (projects: Project[]) => void;
  onUpdateCertifications: (certifications: Certification[]) => void;
  onUpdatePersonalInfo?: (info: any) => void;
  onUpdateGallery?: (photos: GalleryPhoto[]) => void;
  onUpdatePhotos?: (photos: GalleryPhoto[]) => void;
  onResetToDefaults?: () => void;
  onResetAllData?: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen = true,
  onClose = () => {},
  fullPage = false,
  onNavigateHome,
  darkMode,
  setDarkMode,
  projects,
  certifications,
  personalInfo = PERSONAL_INFO,
  galleryPhotos: propGalleryPhotos,
  photos: propPhotos,
  onUpdateProjects,
  onUpdateCertifications,
  onUpdatePersonalInfo = (_info: any) => {},
  onUpdateGallery,
  onUpdatePhotos,
  onResetToDefaults,
  onResetAllData
}) => {
  const galleryPhotos = propPhotos || propGalleryPhotos || [];
  const handleUpdateGallery = onUpdatePhotos || onUpdateGallery || (() => {});
  const handleResetToDefaults = onResetAllData || onResetToDefaults || (() => {});

  const [activeTab, setActiveTab] = useState<'certificates' | 'projects' | 'images' | 'cv' | 'profile' | 'backup'>('certificates');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Default to unlocked for smooth user workflow
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // --- Curriculum Vitae & Document Hub State ---
  const [uploadedCv, setUploadedCv] = useState<UploadedCV | null>(null);
  const [isDraggingCv, setIsDraggingCv] = useState(false);
  const [cvUploadStatus, setCvUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [cvStatusMessage, setCvStatusMessage] = useState('');
  const [cvPreviewOpen, setCvPreviewOpen] = useState(false);
  const cvFileInputRef = useRef<HTMLInputElement>(null);

  // Load existing CV from localStorage
  React.useEffect(() => {
    try {
      const savedCv = localStorage.getItem('portfolio_custom_cv');
      if (savedCv) {
        setUploadedCv(JSON.parse(savedCv));
      }
    } catch (err) {
      console.error('Error loading custom CV in admin:', err);
    }
  }, []);

  // --- Certificate Form State ---
  const [editingCertId, setEditingCertId] = useState<string | null>(null);
  const [certTitle, setCertTitle] = useState('');
  const [certIssuer, setCertIssuer] = useState('');
  const [certIssueDate, setCertIssueDate] = useState('');
  const [certIdNumber, setCertIdNumber] = useState('');
  const [certCategory, setCertCategory] = useState<'devops' | 'banking' | 'software' | 'academic'>('software');
  const [certDescription, setCertDescription] = useState('');
  const [certSkillsInput, setCertSkillsInput] = useState('');
  const [certFilePreview, setCertFilePreview] = useState<string | null>(null);
  const [certFileName, setCertFileName] = useState<string | null>(null);

  // --- Project Form State ---
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectSubtitle, setProjectSubtitle] = useState('');
  const [projectCategory, setProjectCategory] = useState<'fullstack' | 'fintech' | 'devops' | 'ai' | 'cms'>('fullstack');
  const [projectType, setProjectType] = useState<'in-house' | 'client' | 'banking' | 'personal' | 'research'>('in-house');
  const [projectDemoUrl, setProjectDemoUrl] = useState('');
  const [projectGithubUrl, setProjectGithubUrl] = useState('');
  const [projectTechStack, setProjectTechStack] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectFeatures, setProjectFeatures] = useState('');
  const [projectDate, setProjectDate] = useState('');
  const [projectFeatured, setProjectFeatured] = useState(true);
  const [projectImageUrl, setProjectImageUrl] = useState<string | null>(null);

  // --- Profile Info Form State ---
  const [profileName, setProfileName] = useState(personalInfo.name);
  const [profileRole, setProfileRole] = useState(personalInfo.role);
  const [profileEmail, setProfileEmail] = useState(personalInfo.email);
  const [profileMobile, setProfileMobile] = useState(personalInfo.primaryMobile || personalInfo.mobile);
  const [profileWebsite, setProfileWebsite] = useState(personalInfo.website);
  const [profileLinkedin, setProfileLinkedin] = useState(personalInfo.linkedin);
  const [profileGithub, setProfileGithub] = useState(personalInfo.github);
  const [profileAddress, setProfileAddress] = useState(personalInfo.address);
  const [profileSummary, setProfileSummary] = useState(personalInfo.profileSummary);

  // --- Image Upload State ---
  const [newImageTitle, setNewImageTitle] = useState('');
  const [newImageCategory, setNewImageCategory] = useState<'profile' | 'certificate' | 'work' | 'event'>('work');
  const [uploadedImageData, setUploadedImageData] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const certFileInputRef = useRef<HTMLInputElement>(null);
  const projectImgInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen && !fullPage) return null;

  const showNotification = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 4000);
  };

  // ----------------- CERTIFICATE HANDLERS -----------------
  const handleCertFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCertFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setCertFilePreview(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certTitle || !certIssuer) {
      alert('Please provide at least a Certificate Title and Issuer name.');
      return;
    }

    const skillsArray = certSkillsInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingCertId) {
      // Update existing
      const updated = certifications.map((c) => {
        if (c.id === editingCertId) {
          return {
            ...c,
            title: certTitle,
            issuer: certIssuer,
            issueDate: certIssueDate || 'Verified',
            credentialId: certIdNumber,
            category: certCategory,
            description: certDescription,
            skills: skillsArray.length > 0 ? skillsArray : c.skills,
            fileUrl: certFilePreview || c.fileUrl,
            fileName: certFileName || c.fileName
          };
        }
        return c;
      });
      onUpdateCertifications(updated);
      showNotification(`Certificate "${certTitle}" updated successfully!`);
    } else {
      // Add new
      const newCert: Certification = {
        id: `cert-${Date.now()}`,
        title: certTitle,
        issuer: certIssuer,
        issueDate: certIssueDate || 'Recently Verified',
        credentialId: certIdNumber || `CERT-${Math.floor(1000 + Math.random() * 9000)}`,
        category: certCategory,
        description: certDescription || `Professional credential awarded by ${certIssuer}.`,
        skills: skillsArray.length > 0 ? skillsArray : ['Professional Development', 'Technical Competence'],
        fileUrl: certFilePreview || undefined,
        fileName: certFileName || undefined
      };
      onUpdateCertifications([newCert, ...certifications]);
      showNotification(`New Certificate "${certTitle}" added successfully!`);
    }

    // Reset form
    resetCertForm();
  };

  const handleEditCert = (cert: Certification) => {
    setEditingCertId(cert.id);
    setCertTitle(cert.title);
    setCertIssuer(cert.issuer);
    setCertIssueDate(cert.issueDate);
    setCertIdNumber(cert.credentialId || '');
    setCertCategory(cert.category as any);
    setCertDescription(cert.description);
    setCertSkillsInput(cert.skills.join(', '));
    setCertFilePreview(cert.fileUrl || null);
    setCertFileName(cert.fileName || null);
  };

  const handleDeleteCert = (id: string) => {
    if (confirm('Are you sure you want to remove this certificate?')) {
      const filtered = certifications.filter((c) => c.id !== id);
      onUpdateCertifications(filtered);
      showNotification('Certificate removed.');
    }
  };

  const resetCertForm = () => {
    setEditingCertId(null);
    setCertTitle('');
    setCertIssuer('');
    setCertIssueDate('');
    setCertIdNumber('');
    setCertCategory('software');
    setCertDescription('');
    setCertSkillsInput('');
    setCertFilePreview(null);
    setCertFileName(null);
  };

  // ----------------- PROJECT HANDLERS -----------------
  const handleProjectImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setProjectImageUrl(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle) {
      alert('Please provide a Project Title.');
      return;
    }

    const techArray = projectTechStack
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const featuresArray = projectFeatures
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    if (editingProjectId) {
      // Update
      const updated = projects.map((p) => {
        if (p.id === editingProjectId) {
          return {
            ...p,
            title: projectTitle,
            subtitle: projectSubtitle || p.subtitle,
            category: projectCategory,
            projectType: projectType,
            demoUrl: projectDemoUrl || undefined,
            githubUrl: projectGithubUrl || undefined,
            techStack: techArray.length > 0 ? techArray : p.techStack,
            tags: techArray.length > 0 ? techArray : p.tags,
            description: projectDescription || p.description,
            longDescription: projectDescription || p.longDescription,
            keyFeatures: featuresArray.length > 0 ? featuresArray : p.keyFeatures,
            date: projectDate || p.date,
            featured: projectFeatured,
            imageUrl: projectImageUrl || p.imageUrl
          };
        }
        return p;
      });
      onUpdateProjects(updated);
      showNotification(`Project "${projectTitle}" updated successfully!`);
    } else {
      // Create new
      const newProj: Project = {
        id: `proj-${Date.now()}`,
        title: projectTitle,
        subtitle: projectSubtitle || 'High-performance engineering software system',
        category: projectCategory,
        projectType: projectType,
        demoUrl: projectDemoUrl || undefined,
        githubUrl: projectGithubUrl || undefined,
        techStack: techArray.length > 0 ? techArray : ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
        tags: techArray.length > 0 ? techArray : ['PHP', 'Laravel', 'Bootstrap'],
        description: projectDescription || 'Engineered production web system with responsive UI.',
        longDescription: projectDescription || 'Designed and developed using enterprise engineering best practices.',
        keyFeatures: featuresArray.length > 0 ? featuresArray : [
          'Modular architecture with clean separation of concerns',
          'Responsive UI with asynchronous client-side operations',
          'Secure transactional data handling'
        ],
        systemHighlights: [
          'High uptime architecture and database performance tuning',
          'Role-based access control and security authorization'
        ],
        date: projectDate || '2024',
        featured: projectFeatured,
        imageUrl: projectImageUrl || undefined,
        imageGradient: 'from-cyan-600 via-blue-600 to-indigo-800'
      };
      onUpdateProjects([newProj, ...projects]);
      showNotification(`New Project "${projectTitle}" added successfully!`);
    }

    resetProjectForm();
  };

  const handleEditProject = (proj: Project) => {
    setEditingProjectId(proj.id);
    setProjectTitle(proj.title);
    setProjectSubtitle(proj.subtitle);
    setProjectCategory(proj.category);
    setProjectType(proj.projectType || 'in-house');
    setProjectDemoUrl(proj.demoUrl || '');
    setProjectGithubUrl(proj.githubUrl || '');
    setProjectTechStack(proj.techStack.join(', '));
    setProjectDescription(proj.description || proj.longDescription);
    setProjectFeatures(proj.keyFeatures.join('\n'));
    setProjectDate(proj.date);
    setProjectFeatured(proj.featured);
    setProjectImageUrl(proj.imageUrl || null);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const filtered = projects.filter((p) => p.id !== id);
      onUpdateProjects(filtered);
      showNotification('Project deleted.');
    }
  };

  const resetProjectForm = () => {
    setEditingProjectId(null);
    setProjectTitle('');
    setProjectSubtitle('');
    setProjectCategory('fullstack');
    setProjectType('in-house');
    setProjectDemoUrl('');
    setProjectGithubUrl('');
    setProjectTechStack('');
    setProjectDescription('');
    setProjectFeatures('');
    setProjectDate('');
    setProjectFeatured(true);
    setProjectImageUrl(null);
  };

  // ----------------- IMAGE GALLERY HANDLERS -----------------
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setUploadedImageData(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSavePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedImageData) {
      alert('Please select an image file to upload.');
      return;
    }

    const newPhoto: GalleryPhoto = {
      id: `photo-${Date.now()}`,
      title: newImageTitle || 'Uploaded Image',
      category: newImageCategory,
      dataUrl: uploadedImageData,
      url: uploadedImageData,
      uploadDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      date: new Date().getFullYear().toString()
    };

    handleUpdateGallery([newPhoto, ...galleryPhotos]);
    showNotification('Image uploaded to gallery successfully!');
    setNewImageTitle('');
    setUploadedImageData(null);
  };

  const handleDeletePhoto = (id: string) => {
    const filtered = galleryPhotos.filter((p) => p.id !== id);
    handleUpdateGallery(filtered);
    showNotification('Image removed from gallery.');
  };

  // ----------------- CV & DOCUMENT HUB HANDLERS -----------------
  const handleCvFileProcess = (file: File) => {
    const validExtensions = ['pdf', 'doc', 'docx', 'png', 'jpg', 'jpeg'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

    if (!validExtensions.includes(fileExtension)) {
      setCvUploadStatus('error');
      setCvStatusMessage('Please upload a valid document: PDF, DOC, DOCX, PNG, or JPG.');
      return;
    }

    if (file.size > 12 * 1024 * 1024) {
      setCvUploadStatus('error');
      setCvStatusMessage('File size exceeds 12MB limit. Please upload a smaller file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const resultData = event.target?.result as string;

      const newCvRecord: UploadedCV = {
        id: `cv-${Date.now()}`,
        name: file.name,
        size: file.size,
        type: file.type || fileExtension,
        uploadDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        dataUrl: resultData
      };

      setUploadedCv(newCvRecord);
      setCvUploadStatus('success');
      setCvStatusMessage(`Successfully uploaded "${file.name}"!`);
      try {
        localStorage.setItem('portfolio_custom_cv', JSON.stringify(newCvRecord));
      } catch (err) {
        console.warn('Could not persist to localStorage:', err);
      }
      showNotification(`CV "${file.name}" uploaded and saved successfully!`);
    };

    reader.onerror = () => {
      setCvUploadStatus('error');
      setCvStatusMessage('Failed to read file. Please try again.');
    };

    reader.readAsDataURL(file);
  };

  const handleCvDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingCv(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleCvFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleCvRemove = () => {
    setUploadedCv(null);
    try {
      localStorage.removeItem('portfolio_custom_cv');
    } catch (e) {
      console.error(e);
    }
    setCvUploadStatus('idle');
    setCvStatusMessage('');
    if (cvFileInputRef.current) {
      cvFileInputRef.current.value = '';
    }
    showNotification('CV removed from system.');
  };

  const handleCvDownload = () => {
    if (!uploadedCv?.dataUrl) return;
    const a = document.createElement('a');
    a.href = uploadedCv.dataUrl;
    a.download = uploadedCv.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // ----------------- PERSONAL INFO HANDLER -----------------
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...personalInfo,
      name: profileName,
      role: profileRole,
      email: profileEmail,
      primaryMobile: profileMobile,
      phone: profileMobile,
      mobile: profileMobile,
      website: profileWebsite,
      linkedin: profileLinkedin,
      github: profileGithub,
      address: profileAddress,
      profileSummary: profileSummary
    };

    onUpdatePersonalInfo(updated);
    showNotification('Personal profile details saved!');
  };

  // ----------------- EXPORT / IMPORT -----------------
  const handleExportJSON = () => {
    const bundle: PortfolioCustomData = {
      personalInfo,
      projects,
      certifications,
      gallery: galleryPhotos
    };

    const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shuv_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('Portfolio backup exported to JSON!');
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.projects) onUpdateProjects(parsed.projects);
        if (parsed.certifications) onUpdateCertifications(parsed.certifications);
        if (parsed.personalInfo) onUpdatePersonalInfo(parsed.personalInfo);
        if (parsed.gallery) handleUpdateGallery(parsed.gallery);
        showNotification('Portfolio data imported successfully!');
      } catch (err) {
        alert('Invalid JSON file. Please check the backup structure.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className={
      fullPage
        ? `min-h-screen flex flex-col ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`
        : "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    }>
      <div
        className={
          fullPage
            ? "flex-1 flex flex-col w-full"
            : `relative w-full max-w-5xl h-[92vh] rounded-2xl border flex flex-col overflow-hidden shadow-2xl ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
              }`
        }
      >
        {/* Header */}
        {fullPage ? (
          <header className={`sticky top-0 z-40 px-4 sm:px-8 py-3.5 border-b backdrop-blur-md flex items-center justify-between gap-4 ${
            darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={onNavigateHome || onClose}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                  darkMode
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                }`}
              >
                <ArrowLeft className="w-4 h-4 text-cyan-400" />
                <span>Back to Portfolio</span>
              </button>

              <div className="h-5 w-px bg-slate-700/60 hidden sm:block" />

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm sm:text-base font-bold font-mono tracking-tight">
                      Portfolio Admin Management
                    </h1>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      /admin
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 hidden md:block">
                    Dedicated control room for certificates, projects, media, and career data
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {setDarkMode && (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label="Toggle theme"
                  className={`p-2.5 rounded-xl border transition-colors ${
                    darkMode
                      ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}

              <button
                onClick={onNavigateHome || onClose}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">View Public Site</span>
                <span className="sm:hidden">Exit</span>
              </button>
            </div>
          </header>
        ) : (
          /* Modal Top Header */
          <div className={`px-6 py-4 border-b flex items-center justify-between gap-4 ${
            darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-100/90 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold font-mono tracking-tight">
                    Portfolio Admin Management Portal
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Live Management
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Upload & manage professional certificates, project records, images, and career data
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className={`p-2 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Global Toast Notification */}
        {successMessage && (
          <div className="bg-emerald-500/10 border-b border-emerald-500/30 px-6 py-2.5 flex items-center gap-2 text-xs font-semibold text-emerald-400 animate-in slide-in-from-top-2">
            <Check className="w-4 h-4" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Full-Page Quick Metrics Bar */}
        {fullPage && (
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className={`p-4 rounded-xl border ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="text-xs text-slate-400 mb-1">Certificates</div>
                <div className="text-2xl font-bold font-mono text-cyan-400">{certifications.length}</div>
              </div>
              <div className={`p-4 rounded-xl border ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="text-xs text-slate-400 mb-1">Active Projects</div>
                <div className="text-2xl font-bold font-mono text-blue-400">{projects.length}</div>
              </div>
              <div className={`p-4 rounded-xl border ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="text-xs text-slate-400 mb-1">Gallery Media</div>
                <div className="text-2xl font-bold font-mono text-emerald-400">{galleryPhotos.length}</div>
              </div>
              <div className={`p-4 rounded-xl border ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="text-xs text-slate-400 mb-1">Storage Sync</div>
                <div className="text-sm font-bold font-mono text-emerald-400 flex items-center gap-1 mt-1">
                  <ShieldCheck className="w-4 h-4" /> Active (LocalStorage)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className={
          fullPage
            ? "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-2"
            : `px-6 pt-3 pb-2 border-b flex flex-wrap gap-2 text-xs sm:text-sm font-semibold ${
                darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`
        }>
          <div className={`flex flex-wrap gap-2 text-xs sm:text-sm font-semibold ${
            fullPage
              ? `p-2 rounded-2xl border ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`
              : ''
          }`}>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'certificates'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Manage Certificates ({certifications.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'projects'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Manage Projects ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'images'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Photos & Gallery ({galleryPhotos.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('cv')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'cv'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Curriculum Vitae & Document Hub</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'profile'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Personal & Career Info</span>
            </button>

            <button
              onClick={() => setActiveTab('backup')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'backup'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Backup & Sync</span>
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className={
          fullPage
            ? "flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6"
            : "flex-1 overflow-y-auto p-6"
        }>
          
          {/* ======================================================== */}
          {/* TAB 1: CERTIFICATES & CREDENTIALS */}
          {/* ======================================================== */}
          {activeTab === 'certificates' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span>Upload & Manage Professional Certificates</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Add official certificates, upload scans/photos, and customize credential verification points.
                  </p>
                </div>
                {editingCertId && (
                  <button
                    onClick={resetCertForm}
                    className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create New Instead</span>
                  </button>
                )}
              </div>

              {/* Certificate Input Form */}
              <form onSubmit={handleSaveCertificate} className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className="text-sm font-semibold mb-4 text-cyan-400">
                  {editingCertId ? '✏️ Edit Certificate Details' : '➕ Upload & Add New Certificate'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Certificate Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Certified DevOps Engineer"
                      value={certTitle}
                      onChange={(e) => setCertTitle(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Issuing Organization / Authority *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Page Cloud Academy / Padma Bank PLC"
                      value={certIssuer}
                      onChange={(e) => setCertIssuer(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Issue Date / Validity
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. August 22, 2024 / Lifetime"
                      value={certIssueDate}
                      onChange={(e) => setCertIssueDate(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Credential ID / Certificate Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CDE-C004-005 or PB-AML-2024-12"
                      value={certIdNumber}
                      onChange={(e) => setCertIdNumber(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Category
                    </label>
                    <select
                      value={certCategory}
                      onChange={(e) => setCertCategory(e.target.value as any)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="devops">DevOps & Cloud</option>
                      <option value="banking">Banking & FinTech</option>
                      <option value="software">Software Engineering & BI</option>
                      <option value="academic">Academic Degree & Honors</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Skills / Verified Competencies (Comma-separated)
                    </label>
                    <input
                      type="text"
                      placeholder="Docker, Kubernetes, CI/CD, Linux, Oracle DB"
                      value={certSkillsInput}
                      onChange={(e) => setCertSkillsInput(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Description & Competencies Verified
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe what this certificate certifies and key learning outcomes..."
                    value={certDescription}
                    onChange={(e) => setCertDescription(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                      darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                {/* Upload Certificate File / Scan */}
                <div className="mb-5">
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Upload Certificate Scan or Document (Image/PDF)
                  </label>
                  <div className="flex flex-wrap items-center gap-3">
                    <input
                      type="file"
                      ref={certFileInputRef}
                      onChange={handleCertFileUpload}
                      accept="image/*,application/pdf"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => certFileInputRef.current?.click()}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        darkMode
                          ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                          : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                      }`}
                    >
                      <Upload className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{certFileName ? 'Change File' : 'Choose Certificate File / Image'}</span>
                    </button>

                    {certFileName && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        {certFileName}
                      </span>
                    )}

                    {certFilePreview && (
                      <div className="w-10 h-10 rounded-lg border border-slate-700 overflow-hidden bg-slate-950 flex items-center justify-center">
                        <img src={certFilePreview} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20"
                  >
                    <Save className="w-4 h-4" />
                    <span>{editingCertId ? 'Update Certificate' : 'Save & Publish Certificate'}</span>
                  </button>

                  {editingCertId && (
                    <button
                      type="button"
                      onClick={resetCertForm}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>

              {/* Existing Certificates List */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold font-mono text-slate-400">
                  Current Verified Credentials ({certifications.length})
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className={`p-4 rounded-xl border flex flex-col justify-between ${
                        darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            <h5 className="font-bold text-sm leading-tight">{cert.title}</h5>
                          </div>
                          {cert.credentialId && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                              {cert.credentialId}
                            </span>
                          )}
                        </div>

                        <p className="text-xs font-semibold text-cyan-500 mb-1">{cert.issuer}</p>
                        <p className="text-[11px] text-slate-400 mb-2">Issued: {cert.issueDate}</p>
                        <p className="text-xs text-slate-300 line-clamp-2 mb-3">{cert.description}</p>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {cert.skills.slice(0, 4).map((s, i) => (
                            <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 font-mono">
                              {s}
                            </span>
                          ))}
                        </div>

                        {cert.fileUrl && (
                          <div className="mb-3 text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Attachment uploaded</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-[11px] uppercase font-mono text-slate-500">
                          {cert.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditCert(cert)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                            title="Edit certificate"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteCert(cert.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                            title="Delete certificate"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: PROJECTS MANAGEMENT ("WHAT I DID ALL INFORMATION") */}
          {/* ======================================================== */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                    <span>Manage Engineering Projects ("What I Did")</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Update, add, or customize details for in-house banking projects, client platforms, and repositories.
                  </p>
                </div>
                {editingProjectId && (
                  <button
                    onClick={resetProjectForm}
                    className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create New Project</span>
                  </button>
                )}
              </div>

              {/* Project Input Form */}
              <form onSubmit={handleSaveProject} className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className="text-sm font-semibold mb-4 text-cyan-400">
                  {editingProjectId ? '✏️ Edit Project Information' : '➕ Add New Project Record'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Padma Bank HRIS System"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Subtitle / Pitch
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. In-house Enterprise Banking Operations System"
                      value={projectSubtitle}
                      onChange={(e) => setProjectSubtitle(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Category
                    </label>
                    <select
                      value={projectCategory}
                      onChange={(e) => setProjectCategory(e.target.value as any)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="fintech">FinTech & Banking</option>
                      <option value="fullstack">Enterprise & Full-Stack</option>
                      <option value="cms">CMS & Web Portals</option>
                      <option value="devops">DevOps & Cloud</option>
                      <option value="ai">AI & Research</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Project Type Badge
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value as any)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="in-house">In-house Project Development</option>
                      <option value="banking">Banking Core System</option>
                      <option value="client">Client Project (Japan/Global)</option>
                      <option value="personal">Personal Project (Open Source)</option>
                      <option value="research">Academic / Research</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Live Website / Portal URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://padmabankbd.com or https://nid.padmabankbd.com/"
                      value={projectDemoUrl}
                      onChange={(e) => setProjectDemoUrl(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      GitHub Repository URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/shovo921/ecom-super_shop"
                      value={projectGithubUrl}
                      onChange={(e) => setProjectGithubUrl(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Tech Stack (Comma-separated)
                    </label>
                    <input
                      type="text"
                      placeholder="Laravel, Ajax, JavaScript, HTML, CSS, Bootstrap, MySQL, Oracle"
                      value={projectTechStack}
                      onChange={(e) => setProjectTechStack(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Timeline / Date
                    </label>
                    <input
                      type="text"
                      placeholder="2023 – Present"
                      value={projectDate}
                      onChange={(e) => setProjectDate(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Description & Architectural Summary
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe what the system does and what problem it solves..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                      darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Key Features (One per line)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                    value={projectFeatures}
                    onChange={(e) => setProjectFeatures(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                      darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                {/* Upload Project Image */}
                <div className="mb-5">
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Upload Project Screenshot / Thumbnail
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      ref={projectImgInputRef}
                      onChange={handleProjectImgUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => projectImgInputRef.current?.click()}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        darkMode
                          ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                          : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                      }`}
                    >
                      <Upload className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{projectImageUrl ? 'Change Screenshot' : 'Upload Screenshot Image'}</span>
                    </button>

                    {projectImageUrl && (
                      <div className="w-12 h-10 rounded-lg border border-slate-700 overflow-hidden bg-slate-950 flex items-center justify-center">
                        <img src={projectImageUrl} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit & Cancel */}
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20"
                  >
                    <Save className="w-4 h-4" />
                    <span>{editingProjectId ? 'Update Project Information' : 'Save Project'}</span>
                  </button>

                  {editingProjectId && (
                    <button
                      type="button"
                      onClick={resetProjectForm}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>

              {/* Projects List with Edit/Delete */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold font-mono text-slate-400">
                  Current Portfolio Projects ({projects.length})
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className={`p-4 rounded-xl border flex flex-col justify-between ${
                        darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h5 className="font-bold text-sm leading-tight text-white">{proj.title}</h5>
                          {proj.projectType && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                              {proj.projectType}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-400 mb-2">{proj.subtitle}</p>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {proj.techStack.slice(0, 5).map((t, i) => (
                            <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 font-mono">
                              {t}
                            </span>
                          ))}
                        </div>

                        {(proj.demoUrl || proj.githubUrl) && (
                          <div className="flex items-center gap-3 text-[11px] font-mono text-cyan-400 mb-2">
                            {proj.demoUrl && (
                              <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                                <ExternalLink className="w-3 h-3" />
                                <span>Live Portal</span>
                              </a>
                            )}
                            {proj.githubUrl && (
                              <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline text-slate-300">
                                <ExternalLink className="w-3 h-3" />
                                <span>GitHub</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-[11px] uppercase font-mono text-slate-500">
                          {proj.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditProject(proj)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                            title="Edit project"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                            title="Delete project"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: PHOTOS & GALLERY */}
          {/* ======================================================== */}
          {activeTab === 'images' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-cyan-400" />
                  <span>Upload & Manage Images</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Upload your personal portraits, workplace photos, and certificate scans to showcase across the site.
                </p>
              </div>

              {/* Photo Upload Card */}
              <form onSubmit={handleSavePhoto} className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className="text-sm font-semibold mb-3 text-cyan-400">
                  ➕ Upload New Image
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Image Title / Caption
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Shuv Chandra Das - Head Office Workplace"
                      value={newImageTitle}
                      onChange={(e) => setNewImageTitle(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Category
                    </label>
                    <select
                      value={newImageCategory}
                      onChange={(e) => setNewImageCategory(e.target.value as any)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="profile">Profile Portrait</option>
                      <option value="certificate">Certificate Scan</option>
                      <option value="work">Workplace & Bank Office</option>
                      <option value="event">Tech Event & Graduation</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                        darkMode
                          ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                          : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                      }`}
                    >
                      <Upload className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{uploadedImageData ? 'Choose Different Image' : 'Select Image File'}</span>
                    </button>

                    {uploadedImageData && (
                      <div className="w-16 h-16 rounded-xl border border-slate-700 overflow-hidden bg-slate-950">
                        <img src={uploadedImageData} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!uploadedImageData}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Image to Gallery</span>
                </button>
              </form>

              {/* Gallery Grid */}
              <div>
                <h4 className="text-sm font-semibold font-mono text-slate-400 mb-3">
                  Gallery Showcase ({galleryPhotos.length} Images)
                </h4>

                {galleryPhotos.length === 0 ? (
                  <div className={`p-8 rounded-2xl border text-center ${
                    darkMode ? 'bg-slate-950/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-xs">No custom images uploaded yet. Use the upload box above to add photos!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {galleryPhotos.map((photo) => (
                      <div
                        key={photo.id}
                        className={`rounded-xl border overflow-hidden relative group ${
                          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="h-32 bg-slate-950 overflow-hidden">
                          <img src={photo.dataUrl} alt={photo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="p-2.5">
                          <p className="text-xs font-semibold truncate">{photo.title}</p>
                          <span className="text-[10px] font-mono text-slate-400 block">{photo.category}</span>
                        </div>
                        <button
                          onClick={() => handleDeletePhoto(photo.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Delete photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB: CURRICULUM VITAE & DOCUMENT HUB */}
          {/* ======================================================== */}
          {activeTab === 'cv' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50">
                  <Upload className="w-3.5 h-3.5" />
                  <span>ADMIN CV & RESUME MANAGEMENT</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                  <FileText className="w-6 h-6 text-cyan-400" />
                  <span>Curriculum Vitae & Document Hub</span>
                </h3>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Upload your latest custom CV file for instant in-browser inspection, or view and export my verified ATS-ready developer resume.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Upload Box */}
                <div className="lg:col-span-7 space-y-5">
                  <div className={`p-6 sm:p-8 rounded-2xl border ${
                    darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-base font-bold flex items-center gap-2">
                        <span>Upload Custom CV / Resume</span>
                      </h4>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                        PDF, DOCX, PNG, JPG (Max 12MB)
                      </span>
                    </div>

                    {/* Drag and Drop Zone */}
                    <div
                      onDragOver={(e) => { e.preventDefault(); setIsDraggingCv(true); }}
                      onDragLeave={(e) => { e.preventDefault(); setIsDraggingCv(false); }}
                      onDrop={handleCvDrop}
                      onClick={() => cvFileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                        isDraggingCv
                          ? 'border-cyan-400 bg-cyan-500/10 scale-[1.01]'
                          : darkMode
                          ? 'border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/50'
                          : 'border-slate-300 hover:border-cyan-500/50 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="file"
                        ref={cvFileInputRef}
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleCvFileProcess(e.target.files[0]);
                          }
                        }}
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        className="hidden"
                      />

                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-3 shadow-inner">
                        <Upload className="w-7 h-7 animate-pulse" />
                      </div>

                      <p className="text-sm font-semibold mb-1">
                        Drag and drop your CV here, or <span className="text-cyan-400 underline">browse computer</span>
                      </p>
                      <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        Supports PDF documents, Word files, and high-resolution scanned transcripts
                      </p>
                    </div>

                    {/* Status Message Alert */}
                    {cvStatusMessage && (
                      <div className={`mt-4 p-3 rounded-xl text-xs flex items-center gap-2 border ${
                        cvUploadStatus === 'success'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                      }`}>
                        {cvUploadStatus === 'success' ? (
                          <Check className="w-4 h-4 shrink-0" />
                        ) : (
                          <AlertCircle className="w-4 h-4 shrink-0" />
                        )}
                        <span>{cvStatusMessage}</span>
                      </div>
                    )}
                  </div>

                  {/* Active Uploaded Document Card */}
                  {uploadedCv && (
                    <div className={`p-6 rounded-2xl border ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                    }`}>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold font-mono text-emerald-400">
                              Active Uploaded Document
                            </h5>
                            <p className="text-[11px] text-slate-400">
                              Persisted for recruiter inspection
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          Saved in Storage
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">File Name:</span>
                          <span className="font-semibold text-slate-200 font-mono truncate max-w-[200px]">
                            {uploadedCv.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">File Size:</span>
                          <span className="font-mono text-slate-300">
                            {(uploadedCv.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Uploaded Date:</span>
                          <span className="text-slate-300 font-mono">{uploadedCv.uploadDate}</span>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setCvPreviewOpen(true)}
                          className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center gap-1.5 shadow-sm transition-all"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View & Inspect</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCvDownload}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                            darkMode
                              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                          }`}
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCvRemove}
                          className="py-2 px-3 rounded-xl text-xs font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center gap-1.5 transition-all"
                          title="Remove CV"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Verified ATS Resume Spec */}
                <div className="lg:col-span-5 space-y-4">
                  <div className={`p-6 rounded-2xl border ${
                    darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-3">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified ATS Developer Profile</span>
                    </div>

                    <div className="space-y-3 text-xs leading-relaxed text-slate-400">
                      <p>
                        Current production role: <strong className="text-white">Officer (Software Development)</strong> at <strong className="text-cyan-300">Padma Bank PLC</strong> (03-09-2023 to Continue • 3.1 Years).
                      </p>
                      <p>
                        Prior experience: <strong className="text-white">Software Developer</strong> at <strong className="text-cyan-300">Kaicom Solutions Japan</strong> (4.1 Years).
                      </p>
                      <p>
                        Education: <strong className="text-white">M.Sc. in CSE</strong> from <strong className="text-indigo-300">Jahangirnagar University</strong> (CGPA 3.45).
                      </p>
                      <p>
                        Certifications: Certified DevOps Engineer (CDE), AML & CFT Banking Certification.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 mt-4">
                      <a
                        href="/cv.pdf"
                        download="Shuv_Chandra_Das_CV.pdf"
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Default ATS Resume</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* In-Browser Document Inspection Modal */}
              {cvPreviewOpen && uploadedCv && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                  <div className={`w-full max-w-4xl rounded-2xl border p-5 flex flex-col max-h-[90vh] ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                  }`}>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-cyan-400" />
                        <h4 className="font-bold text-sm font-mono truncate max-w-md">
                          {uploadedCv.name}
                        </h4>
                      </div>
                      <button
                        onClick={() => setCvPreviewOpen(false)}
                        className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex-1 overflow-auto my-4 rounded-xl bg-slate-950 p-2 flex items-center justify-center min-h-[400px]">
                      {uploadedCv.dataUrl?.startsWith('data:image/') ? (
                        <img
                          src={uploadedCv.dataUrl}
                          alt="Uploaded CV"
                          className="max-h-[70vh] object-contain rounded-lg"
                        />
                      ) : uploadedCv.dataUrl?.startsWith('data:application/pdf') ? (
                        <iframe
                          src={uploadedCv.dataUrl}
                          title="CV PDF Inspection"
                          className="w-full h-[70vh] rounded-lg border-0"
                        />
                      ) : (
                        <div className="text-center p-8 space-y-3">
                          <FileText className="w-12 h-12 text-cyan-400 mx-auto" />
                          <p className="text-sm font-mono">{uploadedCv.name}</p>
                          <p className="text-xs text-slate-400">
                            In-browser preview is best supported for PDF and Image documents.
                          </p>
                          <button
                            onClick={handleCvDownload}
                            className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 inline-flex items-center gap-2"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download to View</span>
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                      <button
                        onClick={() => setCvPreviewOpen(false)}
                        className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-700 hover:bg-slate-800"
                      >
                        Close Preview
                      </button>
                      <button
                        onClick={handleCvDownload}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download File</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 4: PERSONAL & CAREER INFO */}
          {/* ======================================================== */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <User className="w-5 h-5 text-cyan-400" />
                  <span>Update Profile & Personal Information</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Manage personal bio, 7.1 years experience details, contact numbers, and links.
                </p>
              </div>

              <form onSubmit={handleSaveProfile} className={`p-5 rounded-2xl border space-y-4 ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Professional Role Title
                    </label>
                    <input
                      type="text"
                      value={profileRole}
                      onChange={(e) => setProfileRole(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Primary Mobile Number
                    </label>
                    <input
                      type="text"
                      value={profileMobile}
                      onChange={(e) => setProfileMobile(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileEmail}
                      onChange={(e) => setProfileEmail(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Portfolio Website URL
                    </label>
                    <input
                      type="url"
                      value={profileWebsite}
                      onChange={(e) => setProfileWebsite(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      value={profileLinkedin}
                      onChange={(e) => setProfileLinkedin(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Residential / Office Address
                    </label>
                    <input
                      type="text"
                      value={profileAddress}
                      onChange={(e) => setProfileAddress(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Profile Summary (Official Statement)
                  </label>
                  <textarea
                    rows={4}
                    value={profileSummary}
                    onChange={(e) => setProfileSummary(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:border-cyan-500 ${
                      darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Profile Information</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 5: BACKUP, RESTORE & EXPORT */}
          {/* ======================================================== */}
          {activeTab === 'backup' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-400" />
                  <span>Data Backup, Export & Reset</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Export all portfolio data as a JSON file or restore the official 7.1-year verified banking portfolio.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Export Card */}
                <div className={`p-6 rounded-2xl border space-y-3 ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm">Export Portfolio Backup</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Download all your customized projects, certificates, photos, and personal information as a single JSON file.
                  </p>
                  <button
                    onClick={handleExportJSON}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                {/* Import Card */}
                <div className={`p-6 rounded-2xl border space-y-3 ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Upload className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm">Import JSON Backup</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Restore previously exported portfolio data and certificates from a JSON file.
                  </p>
                  <label className="w-full py-2.5 rounded-xl text-xs font-semibold border border-indigo-500/40 text-indigo-400 hover:bg-indigo-950/30 flex items-center justify-center gap-2 cursor-pointer transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Select Backup JSON File</span>
                    <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                  </label>
                </div>
              </div>

              {/* Reset to Factory Defaults */}
              <div className={`p-6 rounded-2xl border border-rose-900/40 bg-rose-950/10 space-y-3`}>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Reset to Official 7.1-Year Verified Records</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Revert all local modifications back to the authentic Shuv Chandra Das portfolio data (Padma Bank PLC, Kaicom Solutions Japan, Jahangirnagar University M.Sc., and 11 production banking & Japanese client systems).
                </p>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to reset to the official default records?')) {
                      handleResetToDefaults();
                      showNotification('Reset to official 7.1-year records complete!');
                    }
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-rose-300 bg-rose-950/40 border border-rose-800/50 hover:bg-rose-900/60 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Default Portfolio Data</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Modal/Page Bottom Footer */}
        <footer className={
          fullPage
            ? `px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs mt-auto ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
              }`
            : `px-6 py-3 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${
                darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
              }`
        }>
          <div className="flex items-center gap-2 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Changes persist automatically in browser storage (localStorage)</span>
          </div>

          <button
            onClick={onNavigateHome || onClose}
            className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-sm transition-all"
          >
            {fullPage ? '← Back to Public Portfolio' : 'Done & Return to Site'}
          </button>
        </footer>

      </div>
    </div>
  );
};
