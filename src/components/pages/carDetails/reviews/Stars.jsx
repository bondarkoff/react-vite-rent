import React from 'react';

const Stars = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img key={i} src='./images/starred.svg' alt='Star' />);
        } else {
            stars.push(<img key={i} src='./images/unstarred.svg' alt='Star' />);
        }
    }

    return <div>{stars}</div>;
};

export default Stars;
