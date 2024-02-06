import React from "react";
import "./studies.css"

import FullStack from "../../assets/certificates/FullStack.pdf"
import Python from "../../assets/certificates/Python.pdf"
import ComputerScience from "../../assets/certificates/ComputerScience.pdf"

const Studies = () => {
    return (
        <div className="studies">
            
            <div className="exp">
                <h3>Janeiro de 2022 - Presente (Previsto Maio 2024)</h3>
                <div>
                    <h4>Graduação - Inteligência Artificial</h4>
                    <p className="title">Faculdade Uninassau</p>
                    <p>Com o curso de Inteligência Artificial da UNINASSAU DIGITAL, em parceria com a IBM, você terá oportunidade de conhecer os mais diversos métodos aplicados na área de tecnologia, utilizando inteligência artificial como ferramenta de trabalho.</p>
                    <div>
                        <a href='https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjgzNQ==/c1b85ea4d704f246bcced664fdaeddb6/SU5URUxJR8pOQ0lBIEFSVElGSUNJQUw=' target="_blank">E-MEC</a>
                    </div>
                </div>
            </div>

            <div className="exp">
                <h3>Janeiro de 2023 - Dezembro de 2023</h3>
                <div>
                    <h4>Formação em Desenvolvedor Full-Stack</h4>
                    <p className="title">Trybe</p>
                    <p>Concluiu com sucesso a Formação em Desenvolvimento Web Full-Stack da Trybe, com duração mínima de 12 meses e carga horária de 1.500 horas/aula. Durante esse período, aprofundou-se e aplicou de forma prática conteúdos de: Fundamentos do Desenvolvimento Web, Front-End e Back-End em Javascript; Ciência da Computação em Python; Habilidades de Soft-skills; Metodologias Ágeis e complementou sua formação com uma Certificação Eletiva em Python.</p>
                    <div>
                        <p>Certificados: </p>
                        <a href={ FullStack } target="_blank">Full-Stack</a>
                        <a href={ Python } target="_blank">Python</a>
                        <a href={ ComputerScience } target="_blank">Computer Science</a>
                    </div>
                </div>
            </div>

            <div className="exp">
                <h3>Março de 2023 - Maio de 2023</h3>
                <div>
                    <h4>Monitor - Student Summer Job</h4>
                    <p className="title">Trybe</p>
                    <p>Como Monitor em um curso de Desenvolvimento Web, desenvolvi hard skills ao aprimorar conhecimentos técnicos, especialmente em linguagens e ferramentas web. Participei ativamente de monitorias, fornecendo suporte em projetos, fortalecendo minhas habilidades técnicas. Além disso, a experiência contribuiu para o desenvolvimento de soft skills.</p>
                    <div className="skills-organization">
                        <span>HardSkills</span>
                        <span>SoftSkills</span>
                        <span>Comunicação</span>
                        <span>Liderança</span>
                    </div>
                </div>
            </div>

            <div className="exp">
                <h3>Dezembro de 2018 - Junho de 2019</h3>
                <div>
                    <h4>Analista de Sistema Junior</h4>
                    <p className="title">EletroLucas - Elétrica, Hidráulica e Utilidades</p>
                    <p>Desempenhei um papel multifuncional na gestão de tecnologia. Fui designado para manutenção de uma API eficiente para o gerenciamento de estoques e produtos. Além disso, otimizei o programa da empresa, aprimorando a experiência do vendedor com o cliente. Como parte das minhas responsabilidades, também cuidei das mídias sociais, implementando estratégias para divulgação.</p>
                    <div>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Banco de Dados</span>
                    </div>
                </div>
            </div>

            <div className="exp">
                <h3>Janeiro de 2017 - Abril de 2018</h3>
                <div>
                    <h4>Estagiário de Tecnologia</h4>
                    <p className="title">CAESB - Administração do Centro Cultural Caesb</p>
                    <p>Durante meu estágio na área de tecnologia nesta companhia, aprimorei minhas competências em UX, desenvolvendo interfaces web, aplicativos e banners digitais de forma eficiente. Além disso, assumi a responsabilidade pelo gerenciamento e aprimoramento do banco de dados do almoxarifado, demonstrando habilidades práticas e contribuindo para a eficiência operacional.</p>
                    <div>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Design</span>
                        <span>MySQL</span>
                        <span>WordPress</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Studies;
