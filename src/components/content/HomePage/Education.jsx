import React from "react";
import './HomePage.css';
import Section from "./Section";

function Education() {
    return <div className="home-section">
        <h1>Education</h1>
        <Section 
            title="University of Wisconsin-Madison"
            location="Madison, Wisconsin"
            description="M.S., Computer Science"
            imageUrl="/images/w_crest.jpg"
            imageAlt="UW-Madison"
        />
        <Section 
            title="University of Cincinnati"
            location="Cincinnati, Ohio"
            description="B.S., Chemical Engineering"
            imageUrl="/images/uc_crest.png"
            imageAlt="Cincinnati"
        />
    </div>
}

export default Education;