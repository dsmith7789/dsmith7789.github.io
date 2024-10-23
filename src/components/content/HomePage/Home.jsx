import React, { useEffect } from "react";
import TopBanner from "./TopBanner";
import './HomePage.css';
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Interests from "./Interests";

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return <div>
        <TopBanner />
        <About />
        <Experience />
        <Education />
        <Interests />
    </div>
}

export default Home;