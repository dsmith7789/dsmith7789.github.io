import React from 'react';
import './general.css';

function Tag({ content }) {
    return (
        <div className="tag">
            <p>{content}</p>
        </div>
    );
}

export default Tag;