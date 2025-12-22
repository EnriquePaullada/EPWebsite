/**
 * Innovation Track Record - Project Data
 */

export const projects = [
  {
    id: 'patent',
    slug: 'display-flicker-detection',
    name: 'Display Anomaly Detection',
    businessContext: 'Computer Vision for Automotive Quality Assurance',
    tag: 'US Patent 12,114,080 B2 | Production',
    tagType: 'patent',
    
    description: 'Computer vision system using OpenCV and precision statistical analysis to detect display anomalies in global automotive HMI testing operations.',
    
    challenge: 'Human-led testing of automotive displays was subjective, inconsistent, and time-consuming. Detecting subtle micro-flickers, lighting changes, frame drops, etc. required high-speed cameras and human review, leading to quality escapes and warranty claims.',
    
    solution: 'Developed a fully automated computer vision pipeline using Python and OpenCV. The system analyzes high-frame-rate video feeds in real-time, applying statistical variance analysis to relentlessly detect the most subtle anomalies. Deployed to a variety of global labs enabling entirely new test-suites.',
    
    impact: [
      '200% increase in testing capabilities',
      'Global deployment (US & Europe labs)',
      'Production system supporting global warranty claim reduction',
      'Awarded US Patent 12,114,080 B2'
    ],
    
    techStack: ['Python', 'OpenCV','Business-Driven', 'Statistical Analysis', 'Global Deployment'],
    
    link: '/projects/display-flicker-detection',
    image: 'https://res.cloudinary.com/dzzm0mrjx/image/upload/v1765920228/Patent_Headline_vxjd3w.png',
    imageAlt: 'US Patent Document for Display Screen Flicker Detection'
  },

  {
    id: 'talent-match',
    slug: 'talent-match',
    name: 'Talent Match AI',
    businessContext: 'AI-Powered Internal Mobility for HR Operations',
    tag: '2024 Ford Innovation Winner',
    tagType: 'winner',
    
    description: 'Hybrid RAG system matching employee profiles to opportunities across 4,000-person organization. Led team from business-driven design to executive on-stage pitch.',
    
    challenge: 'In a 4,000+ person organization, promoting employee mobility & matching the right internal talent for the right projects was a manual, network-based process. Skills data was siloed, leading to missed opportunities for internal mobility and high external recruiting costs.',
    
    solution: 'Architected a semantic similarity + keyword search engine using vector embeddings to match employee skill profiles (from resumes and internal bios) against open project & position requirements".',
    
    impact: [
      'Won 2024 Ford Ingenious Minds Summit Innovation Challenge',
      'Architected for 4k+ employee scale',
      'Team leadership: from inception & design to winning pitch',
      'Estimated 30% reduction in time-to-fill for internal roles'
    ],
    
    techStack: ['Hybrid RAG', 'Vector Embeddings', 'System Architecture', 'Leadership', 'Championship Team'],
    
    link: '/projects/talent-match',
    image: 'https://res.cloudinary.com/dzzm0mrjx/image/upload/v1765920318/Talent_Match_Architecture_jkora8.png',
    imageAlt: 'Talent Match AI System Architecture'
  },

  {
    id: 'catalina',
    slug: 'catalina-forecasting',
    name: 'Catalina Sales Forecasting',
    businessContext: 'ML Pipeline for Dealership Inventory Optimization',
    tag: '2022 Global Winner | Production',
    tagType: 'production',
    
    description: 'Production ML pipeline leveraging DataRobot for automotive sales forecasting. Feature engineering across 120-table database, deployed at national scale.',
    
    challenge: 'Dealership inventory allocation was historically mostly based on intuition and trailing averages. This resulted in mounting inventory costs and stockouts of popular models. Our solution included seasonality, economic indicators, local market shifts, and other highly correlated factors.',
    
    solution: 'Built an end-to-end ML pipeline consolidating data from 120+ tables (sales history, demographics, economic data). Engineered 50+ features and utilized DataRobot to train and select optimal forecasting models per region. Automated monthly inference and reporting via BigQuery.',
    
    impact: [
      'Won 2022 Global Ford Business Solutions Innovation Challenge',
      'Production deployment at scale',
      'Reduced inventory holding costs by optimizing allocation',
      'Prescriptive analytics for regional sales managers'
    ],
    
    techStack: ['DataRobot', 'BigQuery', 'Feature Engineering', 'Production ML', 'Data Warehouse'],
    
    link: '/projects/catalina-forecasting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Catalina Sales Forecasting'
  },

  {
    id: 'gp-data',
    slug: 'gp-data',
    name: 'GP Data - Multi-Agent AI for Sales Teams',
    businessContext: 'Multi-Agent AI System for B2B Sales Automation',
    tag: 'Founder Learning | 2025',
    tagType: 'learning',
    
    description: 'Production multi-agent AI platform with specialized agents for lead enrichment, orchestration, and qualification. 95% semantic qualifying accuracy, bilingual support.',
    
    challenge: 'Scaling outbound sales requires handling thousands of conversations simultaneously while maintaining high context quality. Human SDRs burn out, and traditional chatbots lack the tools and reasoning to handle complex B2B qualification and scheduling.',
    
    solution: 'Designed a multi-agent architecture where specialized AI agents (Classifier, Strategist, Executor) collaborate. The system maintains rich state for each lead, orchestrates WhatsApp conversations, and integrates with calendar tools for autonomous scheduling.',
    
    impact: [
      'Relentless Sales Process Adherence & Compliance',
      'Complete architecture evolution (3 iterations)',
      'Reinforced strength: Business Outcomes > Tech Flair',
      'Personal Founding & Lean Startup experience'
    ],
    
    techStack: ['n8n', 'MongoDB', 'Multi-Agent AI', 'Production Deployment', 'Python'],
    
    link: '/projects/gp-data',
    github: 'https://github.com/enriquepaullada/gp-data-architecture-samples',
    image: 'https://res.cloudinary.com/dzzm0mrjx/image/upload/v1765919897/architecture-dkcYe_pwhtqf.svg',
    imageAlt: 'GP Data Multi-Agent Architecture'
  }
];

export const tagColors = {
  patent: '#1A2A40',
  winner: '#D4AF37',
  production: '#059669',
  learning: '#6B7280'
};