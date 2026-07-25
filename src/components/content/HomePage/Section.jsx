import React from 'react';
import Tag from '../general/Tag';

function Section({ title, location, description, imageUrl, imageAlt, highlights, tech }) {
    return (
        <div className="section">
            <img src={imageUrl} alt={imageAlt} className="section-image" />
            <div className="section-content">
                <h2>{title}</h2>
                <p className='subheader'>{location}</p>
                <p className="section-description">{description}</p>
                {
                    highlights ? <p className='highlights'>{highlights}</p> : <></>
                }
                <div>
                {
                    tech ? tech.map(t => <Tag key={t} content={t}/>) : <></>
                }
                </div>
            </div>
        </div>
    );
}

export default Section;
