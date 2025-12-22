import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projectsData';
import ProjectCard from '@/components/home/ProjectCard';
import './FeaturedProjects.css';
const FeaturedProjects = () => {
  return <section className="py-20 md:py-32 bg-gray-50" id="featured-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="ui-sans text-sm font-semibold text-[#D4AF37] tracking-wider uppercase block mb-3">
            Portfolio
          </motion.span>
          
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="heading-serif text-4xl md:text-5xl font-bold text-[#1A2A40]">Featured Solutions</motion.h2>
        </div>

        <div className="featured-projects-grid">
          {projects.map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <ProjectCard project={project} />
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default FeaturedProjects;