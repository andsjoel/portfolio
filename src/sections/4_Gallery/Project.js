// Project.js
import React from 'react';
import './project.css';

const Project = ({ name, img, languages, tools, onClick }) => {
  return (
    <div className="project" onClick={onClick}>
      <img src={img} alt={name} />
      <div className="project-info">
        <h3>{name}</h3>
        <p>{languages}</p>
        <p>{tools}</p>
      </div>
    </div>
  );
};

export default Project;


// ../../assets/images/border-img/1.png