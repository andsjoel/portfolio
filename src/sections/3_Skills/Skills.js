import React from "react";
import "./skills.css"
import Technical from "../../components/Skills/Technical";
import Portfolio from "../../components/Portfolio/Portfolio";

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="skills-title">
                <p><span>←</span>veja alguns dos meus projetos</p>
            </div>
            <Portfolio />
            {/* <Technical /> */}
        </section>
    );
}

export default Skills;
