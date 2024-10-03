import React from 'react';
import '../css/Heading.css';

const Heading = ({ title, description }) => {
    return (
        <div className="headings">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Heading;
