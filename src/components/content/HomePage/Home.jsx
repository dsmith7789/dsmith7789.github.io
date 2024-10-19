import React, { useEffect } from "react";
import TopBanner from "./TopBanner";
import './HomePage.css';
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return <div>
        <TopBanner />
        <About />
        <Experience />
        <Education />
    </div>
}

export default Home;