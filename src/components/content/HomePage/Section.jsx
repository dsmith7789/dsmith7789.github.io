import React from 'react';

function Section({ title, location, description, imageUrl, imageAlt }) {
    return (
        <div className="section">
            <img src={imageUrl} alt={imageAlt} className="section-image" />
            <div className="section-content">
                <h4>{title}</h4>
                <h6 className='subheader'>{location}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Section;