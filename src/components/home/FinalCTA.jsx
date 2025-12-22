import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { trackCTAClick, trackDownload } from '@/lib/analytics';
import { CV_URL } from '@/config/constants';

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleLetsTalkClick = () => {
    trackCTAClick('final_cta_section', 'lets_talk_button');
    navigate('/contact');
  };

  const handleCvClick = (e) => {
    e.preventDefault();
    trackDownload('CV_Resume', 'Final_CTA_Section');

    setTimeout(() => {
      window.open(CV_URL, '_blank');
    }, 300);
  };

  return (
    <section className="py-20 md:py-32 bg-[#F7FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2A40]">
            Ready to Work Together?
          </h2>
          <p className="body-serif text-xl md:text-2xl text-gray-700 leading-relaxed">
            I'm looking to take on my next professional challenge at a high-growth team that values results over politics
          </p>
          <p className="ui-sans text-base md:text-lg text-gray-600 break-words">
            <span className="font-semibold text-[#1A2A40]">Ideal roles:</span> AI Engineer • Data Engineer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              onClick={handleLetsTalkClick}
              className="bg-[#1A2A40] hover:bg-[#D4AF37] text-white ui-sans text-base md:text-lg px-6 md:px-10 py-6 md:py-7 border-2 border-[#1A2A40] transition-all transform hover:scale-105"
            >
              Let&apos;s Talk
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              onClick={handleCvClick}
              className="border-2 border-[#1A2A40] text-[#1A2A40] hover:bg-[#1A2A40] hover:text-white ui-sans text-base md:text-lg px-6 md:px-10 py-6 md:py-7 transition-all transform hover:scale-105"
            >
              <Download className="mr-2 w-5 h-5" />
              View / Download CV
            </Button>
          </div>

          <p className="ui-sans text-sm text-gray-500 pt-4">
            Based in Mexico City • Relocating to US Q1 2026 • Open to Remote
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;