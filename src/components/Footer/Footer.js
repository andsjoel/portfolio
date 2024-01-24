import React from "react";
import "./footer.css"
import Clouds from "./Clouds";

const Footer = () => {
    return (
        <footer>
            <Clouds />
            <nav>
                <ul>
                    <li>Olá</li>
                    <li>Sobre Mim</li>
                    <li>Skills</li>
                    <li>Projetos</li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
