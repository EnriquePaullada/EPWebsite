import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CV_URL } from '@/config/constants';

const Footer = () => {
  return (
    <footer className="bg-[#1A2A40] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="ui-sans text-sm text-gray-300">© 2025 Enrique Paullada</p>
            <p className="ui-sans text-xs text-gray-400 mt-2">Built with React & Vite</p>
          </div>

          <div className="flex flex-col md:items-center space-y-2">
            <Link to="/" className="ui-sans text-sm text-gray-300 hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
            <Link to="/contact" className="ui-sans text-sm text-gray-300 hover:text-[#D4AF37] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex flex-col md:items-end space-y-4">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/enrique-paullada-810092211/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@enriquepaullada.com"
                className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <Button
              asChild
              variant="link"
              className="ui-sans text-sm text-gray-300 hover:text-[#D4AF37] transition-colors flex items-center p-0 h-auto"
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;