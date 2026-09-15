import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ResumeSection } from '../components/ResumeSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { GallerySection } from '../components/GallerySection';
import { CvUploadSection } from '../components/CvUploadSection';
import { BlogSection } from '../components/BlogSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

import { ProjectModal } from '../components/ProjectModal';
import { ArticleModal } from '../components/ArticleModal';
import { NewArticleModal } from '../components/NewArticleModal';
import { CredentialModal } from '../components/CredentialModal';
import { DigitalCvModal } from '../components/DigitalCvModal';

import { Project, BlogPost, Certification, GalleryPhoto } from '../types';

interface HomePageProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  projects: Project[];
  certifications: Certification[];
  photos: GalleryPhoto[];
  blogPosts: BlogPost[];
  onAddArticle: (newPost: BlogPost) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  darkMode,
  setDarkMode,
  projects,
  certifications,
  photos,
  blogPosts,
  onAddArticle,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isNewArticleModalOpen, setIsNewArticleModalOpen] = useState<boolean>(false);
  const [isCredentialModalOpen, setIsCredentialModalOpen] = useState<boolean>(false);
  const [credentialDocId, setCredentialDocId] = useState<string | undefined>(undefined);
  const [isDigitalCvModalOpen, setIsDigitalCvModalOpen] = useState<boolean>(false);

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
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Sticky Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCvModal={() => setIsDigitalCvModalOpen(true)}
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
        />

        {/* Featured Projects with Architecture Modal */}
        <ProjectsSection
          darkMode={darkMode}
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Media & Professional Gallery Section */}
        <GallerySection darkMode={darkMode} photos={photos} />

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
        onAddArticle={(article) => {
          onAddArticle(article);
          setSelectedArticle(article);
        }}
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
    </div>
  );
};

export default HomePage;
