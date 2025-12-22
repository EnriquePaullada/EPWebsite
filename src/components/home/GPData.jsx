import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const GPData = () => {
  const techStack = ["Python", "GCP", "n8n", "MongoDB", "LLM APIs", "Context Engineering"];
  
  return (
    <section className="bg-[#1A2A40] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
          >
            <img 
              className="rounded-lg shadow-2xl w-full h-auto" 
              alt="AI Sales Automation Platform dashboard interface" 
              src="https://horizons-cdn.hostinger.com/1ca23cc6-1cd3-4299-88a0-579da72dda60/workflow-F1gMW.png" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="space-y-6"
          >
            <span className="ui-sans text-sm font-semibold text-[#D4AF37] tracking-wider uppercase">
              Featured Project
            </span>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-white">AI Sales Automation Platform</h2>
            <h3 className="heading-serif text-xl font-bold text-gray-300">The Thesis: A High-Stakes Bet on Revenue</h3>
            <div className="body-serif text-gray-300 space-y-4 leading-relaxed">
              <p>My approach was simple: apply the biggest lever in technology (AI) to the biggest lever in business (Sales) to create a powerful Revenue Engine. The resulting product proved the technical side: it holds intelligent, automated conversations via WhatsApp, qualifies leads, and nurtures opportunities 24/7.</p>
              <p>However, this 9-month founder's sprint revealed a harder truth: the most difficult challenge isn't building a functional product, but bridging the gap between a working solution and a market ready to pay for it.</p>
              <p>While the venture didn't become a unicorn company, it forged a unicorn skillset; A rare, ground-level understanding of the entire product lifecycle—from lean architecture and full-stack development to go-to-market strategy and the painful realities of product-market fit. This is the experience I now bring to your organization.</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech, index) => (
                <span key={index} className="ui-sans text-xs px-3 py-1 bg-white bg-opacity-10 text-white rounded-full border border-white border-opacity-20">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="pt-4">
              <Link to="/gp-data">
                <Button className="bg-[#D4AF37] hover:bg-[#b5952f] text-white">
                  Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GPData;