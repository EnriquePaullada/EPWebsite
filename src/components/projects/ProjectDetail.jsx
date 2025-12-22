import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Layers, Lightbulb, ExternalLink } from 'lucide-react';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import FinalCTA from '@/components/home/FinalCTA';

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  const { name, businessContext, description, challenge, solution, impact, techStack, image, imageAlt, github } = project;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-[#1A2A40] text-white py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-[#D4AF37] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-serif text-4xl md:text-6xl font-bold mb-4">{name}</h1>
            <p className="ui-sans text-lg text-[#D4AF37] font-medium mb-6">{businessContext}</p>
            <p className="body-serif text-xl text-gray-300 leading-relaxed max-w-3xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-sm border border-gray-500 text-gray-200 bg-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-overlay opacity-10 blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Image Section - Moved outside grid to span full width */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-12"
        >
          <img src={image} alt={imageAlt || name} className="w-full h-auto object-cover" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Challenge & Solution */}
            <section>
              <div className="flex items-start mb-4">
                <div className="p-2 bg-red-100 rounded-lg mr-4">
                  <Layers className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="heading-serif text-2xl font-bold text-[#1A2A40] mb-3">The Challenge</h3>
                  <p className="body-serif text-gray-700 text-lg leading-relaxed">{challenge}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="heading-serif text-2xl font-bold text-[#1A2A40] mb-3">The Solution</h3>
                  <p className="body-serif text-gray-700 text-lg leading-relaxed">{solution}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-28">
              <h3 className="heading-serif text-xl font-bold text-[#1A2A40] mb-6">Key Impact</h3>
              <ul className="space-y-4">
                {impact.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {github && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                   <Button asChild variant="outline" className="w-full border-[#1A2A40] text-[#1A2A40] hover:bg-[#1A2A40] hover:text-white">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Code / Repo
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Final CTA Section */}
      <FinalCTA />
    </div>
  );
};

export default ProjectDetail;