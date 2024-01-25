// Modal.js
import React from 'react';
import './modal.css';

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <div>
          <img src={project.img} alt={project.name} />
          <h2>{project.name}</h2>
        </div>
        <div>
          <p>{project.description}</p>
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
