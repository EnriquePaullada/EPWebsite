import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { carouselImages } from '@/data/carouselImages';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { trackEngagement } from '@/lib/analytics';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Auto-advance carousel - pauses when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) return;

    const timer = setInterval(() => {
      paginate(1, false); 
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection, isManual = true) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = carouselImages.length - 1;
      if (nextIndex >= carouselImages.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const handleManualNavigation = (dir, context = 'main') => {
    const directionLabel = dir > 0 ? 'next' : 'prev';
    trackEngagement('carousel', `${directionLabel}_click`, `${context}_view`);
    paginate(dir);
  };

  const handleLightboxOpen = (open) => {
    setIsLightboxOpen(open);
    if (open) {
      trackEngagement('carousel', 'expand_click', 'open_lightbox');
    } else {
      trackEngagement('carousel', 'close_click', 'close_lightbox');
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-serif text-3xl font-bold text-[#1A2A40]"
          >
            Code Snippets & Project Structures
          </motion.h3>
          <p className="ui-sans text-gray-500 mt-2">A look under the hood of production systems</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-video md:aspect-[16/9] lg:aspect-[21/9] bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  handleManualNavigation(1, 'swipe');
                } else if (swipe > swipeConfidenceThreshold) {
                  handleManualNavigation(-1, 'swipe');
                }
              }}
              className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              <img
                src={carouselImages[currentIndex].url}
                alt={carouselImages[currentIndex].alt}
                className="w-full h-full object-contain bg-[#1e1e1e]" // Using dark bg to match VS Code theme
                draggable="false"
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 text-white pointer-events-none">
                <p className="ui-sans text-sm font-medium text-[#D4AF37] mb-1">
                  Image {currentIndex + 1} of {carouselImages.length}
                </p>
                <p className="heading-serif text-lg md:text-xl font-medium">
                  {carouselImages[currentIndex].alt}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            <button
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20 shadow-lg"
              onClick={() => handleManualNavigation(-1, 'main')}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <button
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20 shadow-lg"
              onClick={() => handleManualNavigation(1, 'main')}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Zoom Modal Trigger */}
          <Dialog open={isLightboxOpen} onOpenChange={handleLightboxOpen}>
            <DialogTrigger asChild>
              <button 
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-lg flex items-center justify-center text-white transition-colors backdrop-blur-sm border border-white/10"
                aria-label="Expand image"
                onClick={() => {}} // Handled by onOpenChange
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] h-[95vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center focus:outline-none">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <button 
                  onClick={() => handleLightboxOpen(false)}
                  className="absolute top-4 left-4 z-50 w-12 h-12 bg-black/50 hover:bg-red-500/80 rounded-full flex items-center justify-center text-white transition-all border border-white/20 backdrop-blur-md"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Lightbox Navigation - Previous */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-black/50 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/20 backdrop-blur-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleManualNavigation(-1, 'lightbox');
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Lightbox Navigation - Next */}
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-black/50 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/20 backdrop-blur-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleManualNavigation(1, 'lightbox');
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <img 
                  src={carouselImages[currentIndex].url} 
                  alt={carouselImages[currentIndex].alt}
                  className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                />

                {/* Optional: Lightbox Caption */}
                <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                  <span className="inline-block bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
                     {currentIndex + 1} / {carouselImages.length} — {carouselImages[currentIndex].alt}
                  </span>
                </div>
              </div>
            </DialogContent>
          </Dialog>

        </div>

        {/* Thumbnails / Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                trackEngagement('carousel', 'indicator_click', `slide_${index + 1}`);
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === currentIndex ? "w-8 bg-[#1A2A40]" : "w-2 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;