import React from "react";
import Apresentation from "./1_Apresentation/Apresentation";
import AboutMe from "./2_AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <main>
            <Apresentation />
            <AboutMe />
            <Footer />
        </main>
    );
}

export default Home;
