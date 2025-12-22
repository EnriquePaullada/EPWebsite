import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DismissibleBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const bannerDismissedKey = 'bannerDismissed_20251218'; // Unique key for this banner version

  useEffect(() => {
    // Check localStorage if the banner has been dismissed
    const dismissed = localStorage.getItem(bannerDismissedKey);
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Save dismissal state to localStorage
    localStorage.setItem(bannerDismissedKey, 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#D4AF37] to-[#1A2A40] text-white py-2 px-4 shadow-lg text-center"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <p className="ui-sans text-sm md:text-base font-semibold">
          <span className="inline-block px-2 py-1 bg-white bg-opacity-20 rounded-md mr-2">🎯</span>
          Relocating to US Q1 2026 | TN visa eligible
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDismiss}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 p-1"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default DismissibleBanner;