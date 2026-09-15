import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { BLOG_POSTS, PROJECTS, CERTIFICATIONS, GALLERY_PHOTOS } from './data/portfolioData';
import { Project, BlogPost, Certification, GalleryPhoto } from './types';

interface AdminRouteWrapperProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  projects: Project[];
  certifications: Certification[];
  photos: GalleryPhoto[];
  onUpdateProjects: (newProjects: Project[]) => void;
  onUpdateCertifications: (newCerts: Certification[]) => void;
  onUpdatePhotos: (newPhotos: GalleryPhoto[]) => void;
  onResetAllData: () => void;
}

const AdminRouteWrapper: React.FC<AdminRouteWrapperProps> = ({
  darkMode,
  setDarkMode,
  projects,
  certifications,
  photos,
  onUpdateProjects,
  onUpdateCertifications,
  onUpdatePhotos,
  onResetAllData,
}) => {
  const navigate = useNavigate();

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
};

// Component to handle hash navigation support (e.g. #admin or #/admin)
const HashNavHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin' || window.location.hash === '#/admin') {
        navigate('/admin');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [navigate]);

  return null;
};

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

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
  };

  return (
    <BrowserRouter>
      <HashNavHandler />
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
