import React from 'react';
import style from './landingProjects.module.css';

const projects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
    // Add more projects as needed
];

const LandingProjects = () => {
    return (
        <div className={style.projectsSection}>
            <div className={style.projectsContent}>

            {projects.map((project) => (
                <div key={project.id} className={style.projectColumn}>
                    {/* Empty column for now */}
                    {project.name}dewcfwfwfecw
                </div>
            ))}
            </div>
        </div>
    );
};

export default LandingProjects;