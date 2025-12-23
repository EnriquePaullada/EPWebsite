import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Download, ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { trackCTAClick, trackDownload, trackProjectClick } from '@/lib/analytics';
import { CV_URL } from '@/config/constants';
const HeroSection = () => {
  const navigate = useNavigate();
  const handleLetsTalkClick = () => {
    trackCTAClick('hero_section', 'lets_talk_button');
    navigate('/contact');
  };
  const handleCvClick = () => {
    trackDownload('CV_Resume', 'Hero_Section');
  };
  return <section className="relative bg-linear-to-br from-[#F7FAFC] via-[#EDF2F7] to-[#E2E8F0] py-4 md:py-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute -top-20 -left-20 w-[600px] h-[500px] bg-linear-to-br from-blue-400/40 to-indigo-500/30 rounded-full blur-[120px]" animate={{
        x: [0, 100, 0],
        y: [0, 80, 0],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute -bottom-20 -right-20 w-[500px] h-[600px] bg-linear-to-tl from-purple-400/30 to-pink-400/20 rounded-full blur-[100px]" animate={{
        x: [0, -80, 0],
        y: [0, -60, 0],
        scale: [1, 1.3, 1]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A2A4015_1px,transparent_1px),linear-gradient(to_bottom,#1A2A4015_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split headline - centered and balanced */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-10">
            {/* LEFT: Complex Business Workflows */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }} className='text-center'>
              <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2A40] leading-tight">
                Complex Business<br />Problems
              </h1>
            </motion.div>

            {/* CENTER: Animated Arrow */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.5
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex-shrink-0">
              <motion.div animate={{
              x: [-10, 10, -10],
              scale: [1, 1.2, 1]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                {/* Mobile: Down arrow */}
                <ArrowDown className="w-full h-full text-[#1A2A40] block lg:hidden" strokeWidth={2.5} />
                {/* Desktop: Right arrow */}
                <ArrowRight className="w-full h-full text-[#1A2A40] hidden lg:block" strokeWidth={2.5} />
              </motion.div>
            </motion.div>

            {/* RIGHT: Production AI, End-to-End */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }} className='text-center'>
              <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Production AI,<br />End-to-End
              </h1>
            </motion.div>
          </div>

          {/* All content centered below the headline */}
          <div className="max-w-3xl mx-auto">
            {/* Subheadline */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="body-serif text-xl md:text-2xl text-[#2D3748] leading-relaxed mb-8 text-center">
              <p className="mb-4">
                <em className="font-semibold text-[#1A2A40]">AI Engineer</em>
              </p>
              <p className="mb-2">10 years: End-to-end Data Infrastructure, Production Software and Customer-Centric Solutions.</p>
              <p>3 years: Production AI/ML systems — multi-agent automation, orchestration, and applied LLM solutions.</p>
              <p className="mt-6 pt-6 border-t-2 border-gray-300 text-lg md:text-xl font-semibold text-[#1A2A40]">
                ⚡ Featured: <a 
                  href="https://enriquepaullada.com/projects/gp-data" 
                  className="text-[#2563EB] hover:text-[#1E40AF] hover:underline transition-colors"
                  onClick={() => trackProjectClick('GP Data', 'hero_latest')}
                >
                  GP Data
                </a> (Founder / Production Multi-Agent AI) | <a 
                  href="https://enriquepaullada.com/projects/talent-match" 
                  className="text-[#2563EB] hover:text-[#1E40AF] hover:underline transition-colors"
                  onClick={() => trackProjectClick('Talent Match', 'hero_latest')}
                >
                  Talent Match
                </a> (Hybrid RAG) | <a 
                  href="https://enriquepaullada.com/projects/display-flicker-detection" 
                  className="text-[#2563EB] hover:text-[#1E40AF] hover:underline transition-colors"
                  onClick={() => trackProjectClick('US Patent 12,114,080', 'hero_latest')}
                >
                  US Patent 12,114,080
                </a> (Computer Vision)
              </p>
            </motion.div>

            {/* Bullet points with animations */}
            <div className="body-serif text-lg text-gray-600 space-y-4 mb-8 text-center">
              {[{
              text: "Build reliable solutions with LLMs, RAG/Hybrid RAG, MCP, Evals, & integrations",
              delay: 0.5
            }, {
              text: "Complex Business requirements → explainable & scalable Outcome-First AI design",
              delay: 0.6
            }, {
              text: "Delivered 80% cost reductions and 75% faster development at Fortune 50 scale",
              delay: 0.7
            }].map((item, i) => <motion.div key={i} initial={{
              opacity: 0,
              x: -30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: item.delay
            }} className="flex items-start gap-3 group">
                  <motion.span className="text-[#1A2A40] text-2xl font-bold mt-0.5 flex-shrink-0" animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }} transition={{
                duration: 2,
                delay: item.delay + 0.8,
                repeat: Infinity,
                repeatDelay: 3
              }}>
                    ✓
                  </motion.span>
                  <span className="group-hover:text-[#1A2A40] transition-colors">{item.text}</span>
                </motion.div>)}
            </div>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{
              scale: 1.08,
              y: -2
            }} whileTap={{
              scale: 0.95
            }}>
                <Button onClick={handleLetsTalkClick} className="bg-[#1A2A40] text-white hover:bg-[#2D3748] ui-sans text-base px-8 py-6 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" initial={{
                  x: '-100%'
                }} whileHover={{
                  x: '100%'
                }} transition={{
                  duration: 0.6
                }} />
                  <MessageCircle className="mr-2 w-5 h-5 relative z-10" />
                  <span className="relative z-10">Let's Talk</span>
                  <motion.div className="ml-2 relative z-10" animate={{
                  x: [0, 4, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.08,
              y: -2
            }} whileTap={{
              scale: 0.95
            }}>
                <Button asChild variant="outline" className="ui-sans border-2 border-[#1A2A40] text-[#1A2A40] hover:bg-[#1A2A40] hover:text-white transition-all cursor-pointer text-base px-8 py-6 shadow-md hover:shadow-xl group" onClick={handleCvClick}>
                  <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    View / Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-b from-transparent via-light-bg/50 to-light-bg pointer-events-none" />
    </section>;
};
export default HeroSection;

