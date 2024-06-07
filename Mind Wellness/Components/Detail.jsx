// src/components/Details.js
import React from 'react';

const Detail = ({ description }) => {
    return (
        <div className="ans">
            {description.map((desc, index) => (
                <p key={index}>{desc}</p>
            ))}
        </div>
    );
};

export default Detail;
