import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/projectcard.css';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/read-more/${project.id}`);
  };

  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <h2 className="project-title">{project.title}</h2>
      <div className="project-description">
        <p>{project.description}</p>  
      </div>
      <button className="read-more-btn" onClick={handleReadMore}>
        Read More
      </button>
    </div>
  );
}

export default ProjectCard;
