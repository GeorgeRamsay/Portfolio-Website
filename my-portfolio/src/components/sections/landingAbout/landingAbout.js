import React, { useEffect, useState } from 'react';
import style from './landingAbout.module.css';
import ProfileImage from '../../../assets/images/projectImages/example profile photo.jpg'

const LandingAbout = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const aboutBody = document.querySelector(`.${style.aboutBody}`);
            const rect = aboutBody.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Get the CSS variable value
            const scrollTrigger = getComputedStyle(document.documentElement).getPropertyValue('--nameHeader-height').trim();
            const scrollTriggerValue = parseInt(scrollTrigger, 10);

            // Calculate the total trigger value
            const totalTriggerValue = scrollTriggerValue + windowHeight * 0.8;

            // Calculate the opacity based on scroll position
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
    }, []);

    return (
        <div className={style.aboutBody}>
            <div
                className={style.aboutContent}
                style={{
                    opacity: opacity,
                }}
            >   
                <div className={style.aboutImageContainer}>
                    <img className={style.aboutImage} src={ProfileImage} alt="profile" />
                </div>
                <div className={style.aboutText}>
                    <h1>About Me</h1>
                    <p>Dedicated Computer Science graduate with a strong passion for Front-End and Back-End development, as well as UI/UX design, seeking opportunities to contribute as a Full-Stack developer or Front-End developer. I am eager to apply my skills and creativity to build user-friendly applications and enhance overall user experiences.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingAbout;