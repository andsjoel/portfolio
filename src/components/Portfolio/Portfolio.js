import React from "react";
import projectsData from './projectsData';
import "./portfolio.css"

const Portfolio = () => {
    return (
        <section className="portfolio">
    
    <div>
      {Object.keys(projectsData).map((key) => {
        const project = projectsData[key];
        return (
          <div className="project-card" key={key}>
            <img src={project.img} alt={project.name} />
            <div className="card-organization1">
              <div  className="card-organization2">
                <h3>{project.name}</h3>
                <p>{project.languages}</p>
              </div>
              <p>{project.finished ? 'Finalizado' : 'Em Desenvolvimento'}</p>
              <p>{project.description}</p>
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
              <span>→</span>veja o repositório
              </a>
              <a href={project.page} target="_blank" rel="noopener noreferrer">
              <span>→</span>vizualizar página
              </a>
            </div>
          </div>
        );
      })}
    </div>

        </section>
    );
}

export default Portfolio;
