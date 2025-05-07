import React from 'react';
import ProjectCard from './projectcard';
import '../styles/project_list.css';
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a brief description of Project One. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam ratione, saepe quod beatae ullam iure enim eveniet voluptas, sit earum accusamus sapiente distinctio quaerat non ex voluptatum consequuntur ducimus, consectetur quia. Molestiae asperiores nisi, voluptates dicta repudiandae enim consectetur rem tenetur temporibus itaque minus suscipit voluptate laborum, accusamus doloribus',
    imageUrl: './assets/images/3d-printer.jpg',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    imageUrl: './assets/images/3d-printer.jpg',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is a brief description of Project One.',
    imageUrl: './assets/images/3d-printer.jpg',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is a brief description of Project Two.',
    imageUrl: './assets/images/3d-printer.jpg',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'This is a brief description of Project One.',
    imageUrl: './assets/images/3d-printer.jpg',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'This is a brief description of Project Two.',
    imageUrl: './assets/images/3d-printer.jpg',
  },
];

function ProjectList() {
  return (
    <div className="homepage">
      <h1 className="homepage-title">My Projects</h1>
      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
