import React, { useEffect } from "react";
import TopBanner from "./TopBanner";
import './ProjectPage.css';

function Projects() {
    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
    <div>
        <TopBanner />
    </div>
    );
}

export default Projects;