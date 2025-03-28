import React from 'react';
import PPDashboard from '../../../assets/images/projectImages/PP Dashboard.png'

import ProjectCard from '../../cards/projectCard/projectCard';

export const LandingContent = () => {

    return (
        <div>
            
            <ProjectCard
                image={PPDashboard}
                title="Project 1"
                text="This is a project"
                link="/project1"/>

        </div>
    )
}
