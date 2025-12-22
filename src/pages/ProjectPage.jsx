import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '@/data/projectsData';
import ProjectDetail from '@/components/projects/ProjectDetail';
import usePageEngagement from '@/hooks/usePageEngagement';

const ProjectPage = () => {
  usePageEngagement();
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
        <title>{project.name} | Enrique Paullada</title>
        <meta name="description" content={project.description} />
      <ProjectDetail project={project} />
    </>
  );
};

export default ProjectPage;