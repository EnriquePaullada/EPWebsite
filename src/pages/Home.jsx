import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProofBar from '@/components/home/ProofBar';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ImageCarousel from '@/components/home/ImageCarousel';
import WhatYouGet from '@/components/home/WhatYouGet';
import FinalCTA from '@/components/home/FinalCTA';
import DismissibleBanner from '@/components/home/DismissibleBanner'; // Import the new banner component
import usePageEngagement from '@/hooks/usePageEngagement';

const Home = () => {
  usePageEngagement();

  return (
    <>
        <title>Enrique Paullada - AI Solutions Engineer </title>
        <meta name="description" content="Founding AI Engineer. 10 years Fortune 50 scale. I build AI-powered systems that drive measurable business outcomes." />
      {/* The banner is rendered before the main content and navigation adjustments are handled in App.jsx */}
      <DismissibleBanner /> 
      {/* The pt-20 on this div will now account for the combined height of the fixed banner and navigation */}
      <div className="pt-20"> 
        <HeroSection />
        <ProofBar />
        <FeaturedProjects />
        <ImageCarousel />
        <FinalCTA />
        <WhatYouGet />
      </div>
    </>
  );
};

export default Home;