import React from 'react';
import Tag from '../general/Tag';

function ProjectSection({ title, subtitle, repoUrl, collaborators, description, imageUrl, imageAlt, tech }) {
    return (
        <div className="section">
            <img src={imageUrl} alt={imageAlt} className="section-image" />
            <div className="section-content">
                <h4>{title}</h4>
                <h6 className='subheader'>{subtitle}</h6>
                {
                    collaborators ? <p className='subheader highlights'>Partners: {collaborators}</p> : <></>
                }
                <p className="section-description">{description}</p>
                <div>
                    <a className="link" href={repoUrl}>GitHub</a>
                </div>
                <div>
                {
                    tech.map(t => <Tag content={t}/>)
                }
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;