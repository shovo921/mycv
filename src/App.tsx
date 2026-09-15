import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { BLOG_POSTS, PROJECTS, CERTIFICATIONS, GALLERY_PHOTOS } from './data/portfolioData';
import { Project, BlogPost, Certification, GalleryPhoto } from './types';

// Wrapper for Admin Route to allow seamless inline unlock
function AdminRouteWrapper({
  darkMode,
  setDarkMode,
  projects,
  certifications,
  photos,
  onUpdateProjects,
  onUpdateCertifications,
  onUpdatePhotos,
  onResetAllData
}: {
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
  projects: Project[];
  certifications: Certification[];
  photos: GalleryPhoto[];
  onUpdateProjects: (p: Project[]) => void;
  onUpdateCertifications: (c: Certification[]) => void;
  onUpdatePhotos: (ph: GalleryPhoto[]) => void;
  onResetAllData: () => void;
}) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  if (isUnlocked) {
    return (
      <AdminPage
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        projects={projects}
        certifications={certifications}
        photos={photos}
        onUpdateProjects={onUpdateProjects}
        onUpdateCertifications={onUpdateCertifications}
        onUpdatePhotos={onUpdatePhotos}
        onResetAllData={onResetAllData}
        onNavigateHome={() => navigate('/')}
      />
    );
  }

  return (
    <NotFoundPage
      darkMode={darkMode}
      isAdminRoute={true}
      onUnlockAdmin={() => setIsUnlocked(true)}
    />
  );
}

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Managed data collections
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [certifications, setCertifications] = useState<Certification[]>(CERTIFICATIONS);
  const [photos, setPhotos] = useState<GalleryPhoto[]>(GALLERY_PHOTOS);

  // Load custom articles from localStorage if previously authored
  useEffect(() => {
    try {
      const savedArticles = localStorage.getItem('shuv_portfolio_blogs');
      if (savedArticles) {
        const parsed = JSON.parse(savedArticles);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setBlogPosts(parsed);
        }
      }
      const savedProjects = localStorage.getItem('portfolio_projects');
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
      }
      const savedCerts = localStorage.getItem('portfolio_certifications');
      if (savedCerts) {
        setCertifications(JSON.parse(savedCerts));
      }
      const savedPhotos = localStorage.getItem('portfolio_gallery_photos');
      if (savedPhotos) {
        setPhotos(JSON.parse(savedPhotos));
      }
    } catch (err) {
      console.warn('Could not read saved portfolio data:', err);
    }
  }, []);

  const handleAddArticle = (newPost: BlogPost) => {
    const updated = [newPost, ...blogPosts];
    setBlogPosts(updated);
    try {
      localStorage.setItem('shuv_portfolio_blogs', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    try {
      localStorage.setItem('portfolio_projects', JSON.stringify(newProjects));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateCertifications = (newCerts: Certification[]) => {
    setCertifications(newCerts);
    try {
      localStorage.setItem('portfolio_certifications', JSON.stringify(newCerts));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdatePhotos = (newPhotos: GalleryPhoto[]) => {
    setPhotos(newPhotos);
    try {
      localStorage.setItem('portfolio_gallery_photos', JSON.stringify(newPhotos));
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetAllData = () => {
    setProjects(PROJECTS);
    setCertifications(CERTIFICATIONS);
    setPhotos(GALLERY_PHOTOS);
    setBlogPosts(BLOG_POSTS);
    try {
      localStorage.removeItem('portfolio_projects');
      localStorage.removeItem('portfolio_certifications');
      localStorage.removeItem('portfolio_gallery_photos');
      localStorage.removeItem('shuv_portfolio_blogs');
      localStorage.removeItem('portfolio_custom_cv');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              projects={projects}
              certifications={certifications}
              photos={photos}
              blogPosts={blogPosts}
              onAddArticle={handleAddArticle}
            />
          }
        />

        {/* /admin displays requested 404 text by default with discreet owner access gateway */}
        <Route
          path="/admin"
          element={
            <AdminRouteWrapper
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              projects={projects}
              certifications={certifications}
              photos={photos}
              onUpdateProjects={handleUpdateProjects}
              onUpdateCertifications={handleUpdateCertifications}
              onUpdatePhotos={handleUpdatePhotos}
              onResetAllData={handleResetAllData}
            />
          }
        />

        {/* Direct Admin Page Route */}
        <Route
          path="/admin-portal"
          element={
            <AdminPage
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              projects={projects}
              certifications={certifications}
              photos={photos}
              onUpdateProjects={handleUpdateProjects}
              onUpdateCertifications={handleUpdateCertifications}
              onUpdatePhotos={handleUpdatePhotos}
              onResetAllData={handleResetAllData}
              onNavigateHome={() => window.location.assign('/')}
            />
          }
        />

        {/* Fallback for all other non-matching routes */}
        <Route
          path="*"
          element={<NotFoundPage darkMode={darkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
