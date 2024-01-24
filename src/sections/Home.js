import React from "react";
import Apresentation from "./1_Apresentation/Apresentation";
import AboutMe from "./2_AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import Skills from "./3_Skills/Skills";

const Home = () => {
    return (
        <main>
            <Apresentation />
            <AboutMe />
            <Skills />
            <Footer />
        </main>
    );
}

export default Home;
