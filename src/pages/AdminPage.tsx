import React, { useEffect } from 'react';
import { AdminModal } from '../components/AdminModal';
import { Project, Certification, GalleryPhoto } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AdminPageProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  projects: Project[];
  certifications: Certification[];
  photos: GalleryPhoto[];
  onUpdateProjects: (projects: Project[]) => void;
  onUpdateCertifications: (certifications: Certification[]) => void;
  onUpdatePhotos: (photos: GalleryPhoto[]) => void;
  onResetAllData: () => void;
  onNavigateHome: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({
  darkMode,
  setDarkMode,
  projects,
  certifications,
  photos,
  onUpdateProjects,
  onUpdateCertifications,
  onUpdatePhotos,
  onResetAllData,
  onNavigateHome
}) => {
  useEffect(() => {
    // Set document title specifically for admin portal
    document.title = 'Portfolio Admin Portal | /admin';
    return () => {
      document.title = 'Shuvashish Das | Senior Full-Stack & DevOps Engineer';
    };
  }, []);

  return (
    <AdminModal
      isOpen={true}
      fullPage={true}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      onNavigateHome={onNavigateHome}
      onClose={onNavigateHome}
      projects={projects}
      certifications={certifications}
      personalInfo={PERSONAL_INFO}
      photos={photos}
      galleryPhotos={photos}
      onUpdateProjects={onUpdateProjects}
      onUpdateCertifications={onUpdateCertifications}
      onUpdatePhotos={onUpdatePhotos}
      onResetAllData={onResetAllData}
      onResetToDefaults={onResetAllData}
    />
  );
};

export default AdminPage;
