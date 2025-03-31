import React, { useEffect, useRef } from 'react';
import style from './workExperienceSection.module.css';

const WorkExperienceSection = () => {
    const jobRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const middleOfScreen = windowHeight / 2;

            jobRefs.current.forEach((job) => {
                const rect = job.getBoundingClientRect();
                const jobMiddle = rect.top + rect.height / 2;
                const distanceToMiddle = Math.abs(middleOfScreen - jobMiddle);
                const maxDistance = windowHeight / 2;
                const opacity = Math.max(0, 1 - distanceToMiddle / maxDistance);

                job.style.opacity = opacity;
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call to set the opacity based on initial scroll position
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={style.workExperienceSection}>
            <h1>Work Experience</h1>
            <div className={style.jobsContainer}>
                {['Job 1', 'Job 2', 'Job 3', 'Job 4'].map((job, index) => (
                    <div
                        key={index}
                        className={style.job}
                        ref={(el) => (jobRefs.current[index] = el)}
                    >
                        {job}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperienceSection;