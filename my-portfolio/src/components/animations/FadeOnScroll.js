import React, { useState, useEffect } from 'react';

const FadeOnScroll = ({ children, scrollTriggerValue }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const aboutBody = document.querySelector(`.${children.props.className}`);
            const rect = aboutBody.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const totalTriggerValue = scrollTriggerValue + windowHeight * 0.8;

            if (rect.top <= windowHeight - totalTriggerValue && rect.top >= -totalTriggerValue) {
                // Fade-in calculation
                const distance = windowHeight - totalTriggerValue - rect.top;
                const maxDistance = windowHeight * 0.5; // Adjust this value to control fade-in speed
                const newOpacity = Math.min(1, distance / maxDistance);
                setOpacity(newOpacity);
            } else if (rect.top < -totalTriggerValue) {
                // Fade-out calculation
                const distance = -totalTriggerValue - rect.top;
                const maxDistance = windowHeight; // Adjust this value to control fade-out speed
                const newOpacity = Math.max(0, 1 - distance / maxDistance);
                setOpacity(newOpacity);
            } else {
                setOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollTriggerValue]);

    return (
        <div style={{ opacity: opacity }}>
            {children}
        </div>
    );
};

export default FadeOnScroll;