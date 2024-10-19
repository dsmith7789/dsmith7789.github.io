import React from "react";
import { Button } from "react-bootstrap";

function TopBanner() {
    return (
        <div className="banner">
            <img src="/images/Denver_Headshot.jpg" alt="headshot" className="banner-image" />
            <div className="banner-text">
                    <h1>Dante Smith</h1>
                    <p>Software Engineer</p>
                    <a href="/documents/Dante_Smith_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button className="banner-button">Resume</Button>
                    </a>
            </div>
        </div>
    );
}

export default TopBanner;