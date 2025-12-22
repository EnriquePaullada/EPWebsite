import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="heading-serif text-xl font-bold text-[#1A2A40] mb-4">
          Other Ways to Connect
        </h3>
        <div className="space-y-4">
          <a
            href="mailto:hello@enriquepaullada.com"
            className="w-full flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            <Mail className="w-5 h-5 text-[#D4AF37]" />
            <span className="ui-sans text-sm text-gray-700">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/enrique-paullada-810092211/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-[#D4AF37]" />
            <span className="ui-sans text-sm text-gray-700">LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="bg-[#1A2A40] rounded-lg shadow-md p-6 text-white">
        <h3 className="heading-serif text-xl font-bold mb-3">
          Location & Availability
        </h3>
        <p className="ui-sans text-sm leading-relaxed">
          Based in Mexico City
        </p>
        <p className="ui-sans text-sm leading-relaxed mt-2">
          Open to US/EU remote positions or relocation opportunities
        </p>
         <p className="ui-sans text-sm leading-relaxed mt-2">
          I operate via a US LLC (B2B) → Fast deployment, no visa friction.
        </p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;