import React, { useEffect } from 'react';
import './stars.css';

const Star = () => {
    useEffect(() => {
        const starContainer = document.createElement('div');
        starContainer.className = 'star-container';
        document.body.appendChild(starContainer);

        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * -100}vh`; // Start above the viewport
            star.style.setProperty('--i', Math.random()); // Set a custom property for animation delay
            starContainer.appendChild(star);
        }

        return () => {
            document.body.removeChild(starContainer);
        };
    }, []);

    return null;
};

export default Star;