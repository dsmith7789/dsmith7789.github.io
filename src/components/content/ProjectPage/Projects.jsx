import React, { useEffect } from "react";
import TopBanner from "./TopBanner";
import './ProjectPage.css';
import ProjectSection from "./ProjectSection";
import dedent from "dedent";

function Projects() {
    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
    <div>
        <TopBanner />
        <ProjectSection
            title="Comparison of Centralized and Decentralized Storage Services"
            subtitle="Final Project, Advanced Computer Networks (CS 740; Fall 2022)"
            collaborators={"Akshay Raghavan"}
            description={dedent(`
                This was a project that was done for one of my graduate level courses; while it was required for the course, my partner and I defined the goal and requirements.
            `)}
            repoUrl="https://github.com/a-raghavan/CS740"
            imageUrl="/images/project_thumbnails/decentral_storage.png"
            imageAlt="Storage Service Analysis"
            tech={["Python", "Java"]}
        />
        <ProjectSection
            title="Analysis of Popular Song Traits Over Time"
            subtitle="Final Project, Foundations of Data Management (CS 784; Spring 2023)"
            description={dedent(`
                This was a project that was done for one of my graduate level courses; while it was required for the course, I defined the goal and requirements.
            
                I was the only group member for this project.
            `)}
            repoUrl="https://github.com/dsmith7789/CS784_Project"
            imageUrl="/images/project_thumbnails/spotify_analysis.png"
            imageAlt="Spotify Analysis"
            tech={["Python", "Java"]}
        />
    </div>
    );
}

export default Projects;