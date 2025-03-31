import React from 'react';
import style from './landingProjects.module.css';
import ProjectColumn from '../../cards/projectCard/projectColumn';
import PPDashboard from '../../../assets/images/projectImages/PP Dashboard.png';
import projects from '../../../data/projects'



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