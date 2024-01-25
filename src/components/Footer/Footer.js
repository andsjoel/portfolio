import React from "react";
import "./footer.css"
import github_Icon from "../../assets/images/github_icon.svg"
import linkedin_Icon from "../../assets/images/linkedin_icon.svg"
import insta_Icon from "../../assets/images/insta_icon.svg"
import chat_Icon from "../../assets/images/chat_icon.svg"
// import Clouds from "./Clouds";

const Footer = () => {
    return (
        <footer>
            {/* <Clouds /> */}
            <nav>
                <div className="icons">
                    <a href="https://github.com/andsjoel" target="_blank"><img src={ github_Icon } alt="github"/></a>
                    <a href="https://www.linkedin.com/in/andsjoel/" target="_blank"><img src={ linkedin_Icon } alt="github"/></a>
                    <a href="https://www.instagram.com/dimnici/" target="_blank"><img src={ insta_Icon } alt="github"/></a>
                </div>
                <button><img src={ chat_Icon }></img></button>
                <ul>
                    <li><a href="#ola">Olá</a></li>
                    <li><a href="#about-me">Sobre</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#gallery">Galeria</a></li>
                    <li><a href="#gallery">Até Logo</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
