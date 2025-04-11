import React from 'react';
import Tag from '../general/Tag';

function Section({ title, location, description, imageUrl, imageAlt, highlights, tech }) {
    return (
        <div className="section">
            <img src={imageUrl} alt={imageAlt} className="section-image" />
            <div className="section-content">
                <h5>{title}</h5>
                <h7 className='subheader'>{location}</h7>
                <p>{description}</p>
                {
                    highlights ? <p className='highlights'>{highlights}</p> : <></>
                }
                <div>
                {
                    tech ? tech.map(t => <Tag content={t}/>) : <></>
                }
                </div>
            </div>
        </div>
    );
}

export default Section;