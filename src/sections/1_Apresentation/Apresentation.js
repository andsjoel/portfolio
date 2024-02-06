import React from "react";
import "./apresentation.css"
import CvAnderson from "../../assets/certificates/CvAnderson.pdf"

const Apresentation = () => {
    return (
        <section id="ola" className="apresentation">
            <div>
                <div className="myName">
                    <p>Olá, meu nome é</p>
                    <h2>Anderson Joel</h2>
                </div>
                <div className="myName">
                    <p>mas pode me chamar de</p>
                    <h2>Domenico</h2>
                    <p>se preferir.</p>
                </div>
            </div>
            <div className="itsMe">
                <span>Curioso sobre o que o futuro reserva, e apaixonado por explorar novas tecnologias.</span>
                <p>Sou um desenvolver web de front-end, back-end e estudante de</p>
                <p>Inteligência Artificial.</p>
            </div>
            <div className="apresentation-links">
                <a href={ CvAnderson } target="_blank"><span>→</span>veja um resumo</a>
                {/* <a href={ CvAnderson } target="_blank">Full-Stack</a> */}
                <a href="#about-me"><span>↓</span>vem me conhecer mais</a>
            </div>
        </section>
    );
}

export default Apresentation;
