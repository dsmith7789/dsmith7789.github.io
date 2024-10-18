import React from "react";

function TopBanner() {
    return (
        <div className="banner">
            <img src="/images/Denver_Headshot.jpg" alt="headshot" className="banner-image" />
            <div className="banner-text">
                    <h1>Dante Smith</h1>
                    <p>Software Engineer</p>
            </div>
        </div>
    );
}

export default TopBanner;