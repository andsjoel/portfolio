import React from "react";
import Apresentation from "./1_Apresentation/Apresentation";
import AboutMe from "./2_AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import Skills from "./3_Skills/Skills";
import Gallery from "./4_Gallery/Gallery";
// import Clouds from "../components/Footer/Clouds";
import Contact from "./5_Contact/Contact";

const Home = () => {
    return (
        <main>
            <Apresentation />
            <AboutMe />
            <Skills />
            <Gallery />
            <Contact />
            {/* <Clouds /> */}
            <Footer />
        </main>
    );
}

export default Home;
