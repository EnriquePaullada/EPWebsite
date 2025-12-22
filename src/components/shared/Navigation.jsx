import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projectsData';
import { trackCTAClick, trackDownload } from '@/lib/analytics';
import { CV_URL } from '@/config/constants';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const location = useLocation();

  const handleCvClick = () => {
    trackDownload('CV_Resume', 'Navigation');
  };

  const handleNavClick = (label) => {
    trackCTAClick('navigation', label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            onClick={() => handleNavClick('logo')}
            className="heading-serif text-2xl font-bold text-[#1A2A40] hover:text-[#D4AF37] transition-colors flex-shrink-0"
          >
            Enrique Paullada
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Dropdown Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button 
                className={`flex items-center ui-sans text-sm font-medium transition-colors hover:text-[#D4AF37] py-2 ${
                  location.pathname.includes('/projects') ? 'text-[#D4AF37]' : 'text-[#2D3748]'
                }`}
                onClick={() => handleNavClick('featured_projects_dropdown')}
              >
                Featured Solutions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Desktop Dropdown Content */}
              <AnimatePresence>
                {isProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-md shadow-xl border border-gray-100 overflow-hidden py-2"
                  >
                    {projects.map((project) => (
                      <Link
                        key={project.id}
                        to={project.link}
                        onClick={() => handleNavClick(`project_${project.slug}`)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                      >
                        {project.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                       <Link 
                        to="/featured-projects" 
                        onClick={() => handleNavClick('view_all_projects')}
                        className="block px-4 py-2 text-xs font-bold text-[#1A2A40] uppercase tracking-wider hover:text-[#D4AF37]"
                       >
                          View All
                       </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              onClick={() => handleNavClick('contact')}
              className={`ui-sans text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                location.pathname === '/contact' ? 'text-[#D4AF37]' : 'text-[#2D3748]'
              }`}
            >
              Contact
            </Link>

            <Button
              asChild
              variant="outline"
              className="ui-sans border-[#1A2A40] text-[#1A2A40] hover:bg-[#1A2A40] hover:text-white transition-all cursor-pointer"
              onClick={handleCvClick}
            >
              <a 
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                View / Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1A2A40] hover:text-[#D4AF37] transition-colors p-2 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200 overflow-hidden shadow-lg"
        >
          <div className="px-4 py-4 space-y-1">
            <div className="py-2">
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Projects</span>
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={project.link}
                  onClick={() => handleNavClick(`mobile_project_${project.slug}`)}
                  className={`block pl-4 py-2 text-sm text-gray-700 border-l-2 ${
                     location.pathname === project.link ? 'border-[#D4AF37]' : 'border-transparent'
                  }`}
                >
                  {project.name}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={() => handleNavClick('mobile_contact')}
              className={`block py-3 text-sm font-medium border-t border-gray-100 ${
                location.pathname === '/contact' ? 'text-[#D4AF37]' : 'text-[#2D3748]'
              }`}
            >
              Contact
            </Link>

            <div className="pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full ui-sans border-[#1A2A40] text-[#1A2A40] hover:bg-[#1A2A40] hover:text-white cursor-pointer"
              >
                <a 
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCvClick}
                >
                  <Download className="w-4 h-4 mr-2" />
                  View / Download CV
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;