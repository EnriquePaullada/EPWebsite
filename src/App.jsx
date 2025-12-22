import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import FeedbackWidget from '@/components/shared/FeedbackWidget';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import GPData from '@/pages/GPData';
import ProjectPage from '@/pages/ProjectPage';
import FeaturedProjects from '@/components/home/FeaturedProjects';

// Wrapper page for FeaturedProjects route
const ProjectsListPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50">
    <FeaturedProjects />
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {/* Navigation is now offset by the banner's height */}
      <Navigation /> 
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Specific route for the rich GP Data page, keeping it as a special case */}
          <Route path="/projects/gp-data" element={<GPData />} />
          
          {/* Route for other project details */}
          <Route path="/projects/:slug" element={<ProjectPage />} />
          
          <Route path="/featured-projects" element={<ProjectsListPage />} />
          
          {/* Redirect old /gp-data to new path */}
          <Route path="/gp-data" element={<GPData />} /> 
        </Routes>
      </main>
      <Footer />
      <FeedbackWidget />
    </div>
  );
}

export default App;