import React, { useState } from "react";
import emailjs from '@emailjs/browser'

import github_Icon from "../../assets/images/github_icon.svg"
import linkedin_Icon from "../../assets/images/linkedin_icon.svg"
import insta_Icon from "../../assets/images/insta_icon.svg"

import "./contact.css";

const Contact = () => {
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
        <div className="contact">
            <div className="icons">
                <a href="https://github.com/andsjoel" target="_blank"><img src={ github_Icon } alt="github"/>github.com/andsjoel</a>
                <a href="https://www.linkedin.com/in/andsjoel/" target="_blank"><img src={ linkedin_Icon } alt="github"/>linkedin.com/in/andsjoel</a>
                <a href="https://www.instagram.com/dimnici/" target="_blank"><img src={ insta_Icon } alt="github"/>instagram.com/dimnici</a>
                <div className="links">
                    <a href="domenico.website/"><span>→</span>voltar ao início</a>
                    <a><span>→</span>veja um resumo</a>
                </div>
            </div>
            <div className="contact-text">
                <p>Olá, estou bastante animado em conhecer o seu projeto. Me fale seu nome, seu email e um pouco sobre o trabalho. Me conte sua proposta e vamos conversar!</p>
                <form className="form" onSubmit={ sendEmail }>
                    <input 
                    className="input"
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                    
                    <input 
                    className="input"
                    type="text"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />

                    <textarea 
                    className="textarea"
                    placeholder="Digite sua mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    />

                    <input className="button" type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}

export default Contact;
