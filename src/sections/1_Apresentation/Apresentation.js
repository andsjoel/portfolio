import React from "react";
import "./apresentation.css"

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
                <span>Admirado pelo futuro e apaixonado por tecnologias.</span>
                <p>Sou um desenvolver web de front-end, back-end e estudante de</p>
                <p>Inteligência Artificial.</p>
            </div>
        </section>
    );
}

export default Apresentation;
