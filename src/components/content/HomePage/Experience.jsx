import React from "react";
import './HomePage.css';
import Section from "./Section";

function Experience() {
    return <div className="home-section">
        <h1>Experience</h1>
        <Section 
            title="Spectrum"
            location="Madison, Wisconsin"
            description="Software Engineer"
            imageUrl="/images/Spectrum.jpg"
            imageAlt="Spectrum"
        />
        <Section 
            title="Epic"
            location="Madison, Wisconsin"
            description="Technical Solutions Engineer"
            imageUrl="/images/Epic_Systems.png"
            imageAlt="Epic"
        />
    </div>
}

export default Experience;