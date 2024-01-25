// Modal.js
import React from 'react';
import './modal.css';

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={project.img} alt={project.name} />
        <div>
          <div>
            <h2>{project.name}</h2>
            { project.finished ? <h3>Concluído.</h3> : <h3>Em Desenvolvimento...</h3> }
          </div>
          <p>{project.description}</p>
          <button className='close' onClick={onClose}>x</button>
        <div>
          <ul>
            <li><a href={ project.repository } rel="noopener noreferrer" target="_blank">Repositório</a></li>
            <li><a href={ project.page } rel="noopener noreferrer" target="_blank">Visualizar</a></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
