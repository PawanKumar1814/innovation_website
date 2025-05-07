import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProjectList from '../components/projects_list';

const Projects = () => {
    return (
      <div>
        <Header />
        <main>   
          <ProjectList />
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default Projects;

