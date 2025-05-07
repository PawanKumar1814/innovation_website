import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/read-more-project.css';

const projectDetails = {
  1: {
    title: 'Project One',
    details: 'This is a detailed explanation of Project One. It covers all the features and technologies used.',
    features: [
      'Feature 1: High performance',
      'Feature 2: Scalable architecture',
      'Feature 3: User-friendly interface',
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoLink: '#', // Add your demo link here
  },
  2: {
    title: 'Project Two',
    details: 'This is a detailed explanation of Project Two. It covers all the features and technologies used.',
    features: [
      'Feature 1: AI integration',
      'Feature 2: Real-time collaboration',
      'Feature 3: Easy deployment',
    ],
    technologies: ['Python', 'TensorFlow', 'Django'],
    demoLink: '#', // Add your demo link here
  },
};

const ReadMoreProject = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  return (
    <div className="readmore-page">
      <div className="project-intro">
        <h1 className="readmore-title">{project.title}</h1>
        <p className="readmore-details">{project.details}</p>
      </div>

      <div className="project-section features">
        <h2>Key Features</h2>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index} className="feature-item">{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-section technologies">
        <h2>Technologies Used</h2>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index} className="tech-item">{tech}</li>
          ))}
        </ul>
      </div>

      <div className="project-section demo">
        <h2>See the Demo</h2>
        <a href={project.demoLink} className="demo-link">Watch Demo</a>
      </div>
    </div>
  );
};

export default ReadMoreProject;
