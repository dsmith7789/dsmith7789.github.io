import React from 'react';

function ProjectSection({ title, description, imageUrl, imageAlt, tech }) {
    return (
        <div className="section">
            <img src={imageUrl} alt={imageAlt} className="section-image" />
            <div className="section-content">
                <h4>{title}</h4>
                <h6 className='subheader'>{description}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectSection;