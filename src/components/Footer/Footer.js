import React, { useState } from "react";
import emailjs from '@emailjs/browser'
import "./footer.css"
import github_Icon from "../../assets/images/github_icon.svg"
import linkedin_Icon from "../../assets/images/linkedin_icon.svg"
import insta_Icon from "../../assets/images/insta_icon.svg"
import chat_Icon from "../../assets/images/chat_icon.svg"
import Clouds from "./Clouds";
import Contact from "./Contact";

const Footer = () => {
    const [opened, setOpened] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert('Preencha todos os campos')
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_vtkdpbo', 'template_9zl2poi', templateParams, 'Ii53jX84lKelMMnOW')
        .then((response) => {
            console.log("Email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, () => {
            console.log("ERRO");
        })
    }

    return (
        <footer className={ opened ? 'email-open' : 'email-close' }>
            <Clouds />
            <button className="contact-btn" onClick={ () => opened ? setOpened(false) : setOpened(true) } ><img src={ chat_Icon }></img></button>
            <nav>
                <div className="icons">
                    <a href="https://github.com/andsjoel" target="_blank"><img src={ github_Icon } alt="github"/></a>
                    <a href="https://www.linkedin.com/in/andsjoel/" target="_blank"><img src={ linkedin_Icon } alt="github"/></a>
                    <a href="https://www.instagram.com/dimnici/" target="_blank"><img src={ insta_Icon } alt="github"/></a>
                </div>
                <ul>
                    <li><a href="#ola">olá</a></li>
                    <li><a href="#about-me">sobre</a></li>
                    <li><a href="#skills">habilidades</a></li>
                </ul>
            </nav>
            <Contact />
        </footer>
    );
}

export default Footer;
