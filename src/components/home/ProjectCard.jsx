import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackProjectClick } from '@/lib/analytics';

const ProjectCard = ({ project }) => {
  const { name, description, image, link, techStack, tagType } = project; 

  const getTagBgColor = (type) => {
    switch (type) {
      case 'patent': return 'bg-[#1A2A40]/5 text-[#1A2A40] border-[#1A2A40]';
      case 'winner': return 'bg-[#D4AF37]/5 text-[#D4AF37] border-[#D4AF37]';
      case 'production': return 'bg-[#059669]/5 text-[#059669] border-[#059669]';
      case 'learning': return 'bg-[#6B7280]/5 text-[#6B7280] border-[#6B7280]';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const handleProjectClick = () => {
    trackProjectClick(name, 'project_card');
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm project-card-hover flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          <span 
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getTagBgColor(tagType)}`}
          >
            {project.tag}
          </span>
          {techStack.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 border border-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="heading-serif text-xl font-bold text-[#1A2A40] mb-3">
          {name}
        </h3>
        
        <p className="body-serif text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto">
          <Button 
            asChild 
            variant="outline" 
            className="w-full justify-between group border-[#D4AF37] text-[#1A2A40] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37]"
            onClick={handleProjectClick}
          >
            <Link to={link}>
              View Project
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;