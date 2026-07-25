import React from 'react';
import Tag from '../general/Tag';

function ProjectSection({ title, subtitle, repoUrl, collaborators, description, imageUrl, imageAlt, tech }) {
    return (
        <div className="section project-card">
            <img src={imageUrl} alt={imageAlt} className="section-image" />
            <div className="section-content">
                <h2>{title}</h2>
                <h6 className='subheader'>{subtitle}</h6>
                {
                    collaborators ? <p className='subheader highlights'>Partners: {collaborators}</p> : <></>
                }
                <p className="section-description">{description}</p>
                <div>
                    <a className="link" href={repoUrl}>View on GitHub</a>
                </div>
                <div>
                {
                    tech.map(t => <Tag key={t} content={t}/>)
                }
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
