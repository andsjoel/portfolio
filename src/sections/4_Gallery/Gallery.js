import React, { useState } from 'react';
import Project from './Project';
import Modal from './Modal';
import projectsData from './projectsData';
import './gallery.css';

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id='gallery' className="gallery">
      <h2 className='galleryTitle'>Galeria</h2>
      <div className='grid'>
        {Object.keys(projectsData).map((key, index) => (
          <Project
            key={index}
            img={projectsData[key].img}
            name={projectsData[key].name}
            languages={projectsData[key].languages}
            onClick={() => openModal(projectsData[key])}
          />
        ))}
        {selectedProject && (
          <Modal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </section>
  );
};

export default Gallery;
