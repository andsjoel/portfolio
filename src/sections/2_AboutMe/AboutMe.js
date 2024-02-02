import React, { useState } from "react";
import "./aboutme.css"
import Studies from "../../components/Studies/Studies";

const AboutMe = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
      };


    return (
        <section id="about-me" className="aboutme">
            <div className="about-1">
                <h2>SOBRE MIM</h2>

                <p>
                Sou um entusiasta estudante de tecnologias que esta sempre em busca de novos conhecimentos, atento ao futuro digital e suas necessidades. Me chamo Anderson Joel e costumo usar Domênico como apelido em minhas redes sociais.
                </p>
                <p>
                Conheci o front-end quando Tumblr era uma rede social bastante conhecida e me aprofundei em criar temas personalizados, foi quando caí de cabeça no mundo de desenvolvimento web. Desde então, como Desenvolvedor Web, encontro prazer em criar interfaces intuitivas e esteticamente agradáveis, priorizando a ergonomia digital para proporcionar experiências naturais e eficientes aos usuários. 
                </p>
                <div className="curious" onClick={ handleToggle }><p><span>→</span>Uma curiosidade?</p></div>
                {isOpen && (
                    <p className="curiosity">
                    O que faço quando não estou programando? Geralmente fico conversando com amigos no Discord e procurando algum jogo coop pela Steam. Estudando sobre IA, astronomia ou assitindo alguma série. Também jogo vôlei quase todo dia e mensalmente tentando marcar uma sessão de RPG.
                    </p>
                )}
                <p className="final">
                Neste meu portfólio, compartilho meu progresso constante e projetos que refletem minha abordagem prática e criativa. Estou aberto a colaborações, aprendizado e projetos inovadores. Se tiver uma oportunidade que corresponda às minhas competências e conhecimento, não hesite em me contatar.
                </p>
            </div>
            <div className="about-2">
                <Studies />
            </div>
        </section>
    );
}

export default AboutMe;
