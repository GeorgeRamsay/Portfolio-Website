import React, { useState, useEffect } from 'react';

const FadeLayout = ({ children, scrollTriggerPosition, fadeInDistance, fadeOutDistance }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const baseHeight = getComputedStyle(document.documentElement).getPropertyValue('--nameHeader-height').trim();
            const baseHeightValue = parseInt(baseHeight, 10);
            const rect = document.documentElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const totalTriggerValue = baseHeightValue + (scrollTriggerPosition + 1) * windowHeight;
            if (rect.top <= windowHeight - totalTriggerValue && rect.top >= -totalTriggerValue) {
                // Fade-in calculation
                const distance = windowHeight - totalTriggerValue - rect.top;
                const newOpacity = Math.min(1, distance / fadeInDistance);
                setOpacity(newOpacity);
            } else if (rect.top < -totalTriggerValue) {
                // Fade-out calculation
                const distance = -totalTriggerValue - rect.top;
                const newOpacity = Math.max(0, 1 - distance / fadeOutDistance);
                setOpacity(newOpacity);
            } else {
                setOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollTriggerPosition, fadeInDistance, fadeOutDistance]);

    return (
        <div style={{ opacity: opacity }}>
            {children}
        </div>
    );
};

export default FadeLayout;