import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ResumeSection } from './components/ResumeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GallerySection } from './components/GallerySection';
import { CvUploadSection } from './components/CvUploadSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { NewArticleModal } from './components/NewArticleModal';
import { CredentialModal } from './components/CredentialModal';
import { DigitalCvModal } from './components/DigitalCvModal';
import { AdminModal } from './components/AdminModal';

import { BLOG_POSTS, PROJECTS, CERTIFICATIONS, GALLERY_PHOTOS } from './data/portfolioData';
import { Project, BlogPost, Certification, GalleryPhoto } from './types';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isNewArticleModalOpen, setIsNewArticleModalOpen] = useState<boolean>(false);
  const [isCredentialModalOpen, setIsCredentialModalOpen] = useState<boolean>(false);
  const [credentialDocId, setCredentialDocId] = useState<string | undefined>(undefined);
  const [isDigitalCvModalOpen, setIsDigitalCvModalOpen] = useState<boolean>(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);

  // Managed data collections
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [certifications, setCertifications] = useState<Certification[]>(CERTIFICATIONS);
  const [photos, setPhotos] = useState<GalleryPhoto[]>(GALLERY_PHOTOS);

  // Load custom data from localStorage if previously modified
  useEffect(() => {
    try {
      const savedArticles = localStorage.getItem('shuv_portfolio_blogs');
      if (savedArticles) {
        const parsed = JSON.parse(savedArticles);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setBlogPosts(parsed);
        }
      }

      const savedProjects = localStorage.getItem('shuv_portfolio_projects');
      if (savedProjects) {
        const parsed = JSON.parse(savedProjects);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProjects(parsed);
        }
      }

      const savedCerts = localStorage.getItem('shuv_portfolio_certs');
      if (savedCerts) {
        const parsed = JSON.parse(savedCerts);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCertifications(parsed);
        }
      }

      const savedPhotos = localStorage.getItem('shuv_portfolio_photos');
      if (savedPhotos) {
        const parsed = JSON.parse(savedPhotos);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPhotos(parsed);
        }
      }
    } catch (err) {
      console.warn('Could not read saved portfolio data:', err);
    }
  }, []);

  const handleUpdateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    try {
      localStorage.setItem('shuv_portfolio_projects', JSON.stringify(newProjects));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateCertifications = (newCerts: Certification[]) => {
    setCertifications(newCerts);
    try {
      localStorage.setItem('shuv_portfolio_certs', JSON.stringify(newCerts));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdatePhotos = (newPhotos: GalleryPhoto[]) => {
    setPhotos(newPhotos);
    try {
      localStorage.setItem('shuv_portfolio_photos', JSON.stringify(newPhotos));
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetAllData = () => {
    try {
      localStorage.removeItem('shuv_portfolio_projects');
      localStorage.removeItem('shuv_portfolio_certs');
      localStorage.removeItem('shuv_portfolio_photos');
      localStorage.removeItem('shuv_portfolio_blogs');
      setProjects(PROJECTS);
      setCertifications(CERTIFICATIONS);
      setPhotos(GALLERY_PHOTOS);
      setBlogPosts(BLOG_POSTS);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddArticle = (newPost: BlogPost) => {
    const updated = [newPost, ...blogPosts];
    setBlogPosts(updated);
    try {
      localStorage.setItem('shuv_portfolio_blogs', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    // Automatically open newly drafted article
    setSelectedArticle(newPost);
  };

  const handleOpenCredentials = (docId?: string) => {
    setCredentialDocId(docId);
    setIsCredentialModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Sticky Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCvModal={() => setIsDigitalCvModalOpen(true)}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          darkMode={darkMode}
          onOpenCvModal={() => setIsDigitalCvModalOpen(true)}
          onScrollToSection={scrollToSection}
        />

        {/* About & Engineering Mindset */}
        <AboutSection
          darkMode={darkMode}
          onOpenCredentialModal={() => handleOpenCredentials()}
        />

        {/* Skills & Tooling Grid */}
        <SkillsSection darkMode={darkMode} />

        {/* Experience, Education & Certifications Timeline */}
        <ResumeSection
          darkMode={darkMode}
          certifications={certifications}
          onOpenCredentialModal={handleOpenCredentials}
          onOpenCvModal={() => setIsDigitalCvModalOpen(true)}
          onOpenAdminModal={() => setIsAdminModalOpen(true)}
        />

        {/* Featured Projects with Architecture Modal */}
        <ProjectsSection
          darkMode={darkMode}
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenAdminModal={() => setIsAdminModalOpen(true)}
        />

        {/* Media & Professional Gallery Section */}
        <GallerySection
          darkMode={darkMode}
          photos={photos}
          onOpenAdminModal={() => setIsAdminModalOpen(true)}
        />

        {/* CV Upload & Document Management Hub */}
        <CvUploadSection
          darkMode={darkMode}
          onOpenDigitalCv={() => setIsDigitalCvModalOpen(true)}
        />

        {/* Technical Blog Insights Section */}
        <BlogSection
          darkMode={darkMode}
          blogPosts={blogPosts}
          onSelectArticle={(article) => setSelectedArticle(article)}
          onOpenNewArticleModal={() => setIsNewArticleModalOpen(true)}
        />

        {/* Contact Information & Inquiry Form */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        darkMode={darkMode}
        onClose={() => setSelectedProject(null)}
      />

      <ArticleModal
        article={selectedArticle}
        darkMode={darkMode}
        onClose={() => setSelectedArticle(null)}
      />

      <NewArticleModal
        darkMode={darkMode}
        isOpen={isNewArticleModalOpen}
        onClose={() => setIsNewArticleModalOpen(false)}
        onAddArticle={handleAddArticle}
      />

      <CredentialModal
        isOpen={isCredentialModalOpen}
        onClose={() => {
          setIsCredentialModalOpen(false);
          setCredentialDocId(undefined);
        }}
        darkMode={darkMode}
        selectedDocId={credentialDocId}
        customCertifications={certifications}
      />

      <DigitalCvModal
        isOpen={isDigitalCvModalOpen}
        onClose={() => setIsDigitalCvModalOpen(false)}
        darkMode={darkMode}
      />

      {/* Admin Panel Modal for Uploading/Managing Certificates, Images, and Projects */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        darkMode={darkMode}
        projects={projects}
        certifications={certifications}
        photos={photos}
        onUpdateProjects={handleUpdateProjects}
        onUpdateCertifications={handleUpdateCertifications}
        onUpdatePhotos={handleUpdatePhotos}
        onResetAllData={handleResetAllData}
      />
    </div>
  );
}

export default App;
