import React, { useEffect, useRef } from 'react';
import style from './workExperienceSection.module.css';
import JobCard from '../../cards/jobCard/jobCard';
import jobData from '../../../data/jobData';

import { IconBriefcase } from '@tabler/icons-react';


const WorkExperienceSection = () => {
    const jobRefs = useRef([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const middleOfScreen = windowHeight / 2;
            const fadeDistance = windowHeight / 2; // Controls fade gradient spread

            jobRefs.current.forEach((job) => {
                if (!job) return;
                const rect = job.getBoundingClientRect();
                const jobMiddle = rect.top + rect.height / 2;
                const distanceToMiddle = Math.abs(middleOfScreen - jobMiddle);

                // Calculate opacity (closer to center = higher opacity)
                let opacity = Math.max(0.2, 1 - distanceToMiddle / fadeDistance);
                job.style.opacity = opacity;
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial opacity update
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={style.workExperienceSection} ref={sectionRef}>
                <p className='sectionHeader'><span><IconBriefcase size={40} className={style.icon} /></span>Work Experience</p>
            <div className={style.jobsContainer}>
                {jobData.map((job, index) => (
                    <JobCard
                        key={index}
                        ref={(el) => (jobRefs.current[index] = el)}
                        title={job.title}
                        duration={job.duration}
                        description={job.description}
                        company={job.company}
                        location={job.location}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkExperienceSection;