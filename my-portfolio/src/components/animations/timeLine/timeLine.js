import React, { useEffect, useState } from 'react';
import style from './timeLine.module.css';


const Timeline = () => {
    const [opacity, setOpacity] = useState(1); // Track opacity of the timeline

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight; // Height of the viewport
            const middleOfScreen = windowHeight / 2; // The vertical center of the screen

            // Get the timeline element
            const timeline = document.querySelector(`.${style.timeline}`);
            const timelineRect = timeline.getBoundingClientRect(); // Get position of the timeline

            // Calculate the distance between the center of the screen and the timeline
            const distanceFromCenter = Math.abs(middleOfScreen - (timelineRect.top + timelineRect.height / 2));

            // Define how quickly the opacity decreases as the distance increases
            const fadeDistance = windowHeight / 2; // The point where opacity starts to fade
            let newOpacity = 1 - distanceFromCenter / fadeDistance;

            // Ensure opacity stays between 0 and 1
            newOpacity = Math.max(0, Math.min(1, newOpacity));

            setOpacity(newOpacity); // Update opacity
        };

        window.addEventListener('scroll', handleScroll); // Add scroll listener
        handleScroll(); // Initial call to set the starting opacity

        return () => window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    }, []);

    return (
        <div
            className={style.timeline}
            style={{ opacity }} // Dynamically adjust opacity based on scroll position
        />
    );
};

export default Timeline;