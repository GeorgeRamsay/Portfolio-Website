import React from 'react';
import style from './landingProjects.module.css';
import ProjectColumn from '../../cards/projectCard/projectColumn';
import PPDashboard from '../../../assets/images/projectImages/PP Dashboard.png';

const projects = [
    { id: 1, name: 'Parkinsons Pulse', image: PPDashboard },
    { id: 2, name: 'Project 2', image: '' },
    { id: 3, name: 'Project 3', image: '' },
    // Add more projects as needed
];

const LandingProjects = () => {
    return (
        <div className={style.projectsSection}>
            <h2>Recent Projects</h2>
            <div className={style.projectsContent}>
                {projects.map((project) => (
                    <ProjectColumn key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};
export default LandingProjects;