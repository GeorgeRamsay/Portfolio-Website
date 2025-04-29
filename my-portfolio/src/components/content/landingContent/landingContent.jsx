import React from 'react';
import LandingHeader from '../../sections/landingHeader/landingHeader'
import LandingAbout from '../../sections/landingAbout/landingAbout';

import style from './landingContent.module.css';
import LandingProjects from '../../sections/landingProjects/landingProjects';
import WorkExperienceSection from '../../sections/workExperienceSection/workExperienceSection';
import Timeline from '../../animations/timeLine/timeLine';
import TechStack from '../../sections/techStack/techStack.js';


export const LandingContent = () => {
    return (
        <div className={style.margins}>
                <LandingHeader />
                <LandingAbout />
                <TechStack />
                <WorkExperienceSection />
                <LandingProjects />
        </div>
    );
};