import React, { useState } from "react";
import Apresentation from "./1_Apresentation/Apresentation";
import AboutMe from "./2_AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import Skills from "./3_Skills/Skills";

import "../App.css"

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      setCursorPosition({ x: posX, y: posY });
    };

      window.addEventListener("mousemove", handleMouseMove);

    return (
        <main>
            <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className="cursor-dot"></div>
            <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className="cursor-outline"></div>
            <Apresentation />
            <AboutMe />
            <Skills />
            {/* <Gallery /> */}
            <Footer />
        </main>
    );
}

export default Home;
