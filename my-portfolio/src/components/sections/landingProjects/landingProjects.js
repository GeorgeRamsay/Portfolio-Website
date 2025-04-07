import React from 'react';
import style from './landingProjects.module.css';
import ProjectCard from '../../cards/projectCard/projectCard';
import projects from '../../../data/projects'
import { IconClipboard } from '@tabler/icons-react';



const LandingProjects = () => {
    return (
        <div className={style.projectsSection}>
             <p className='sectionHeader'><span><IconClipboard size={40} className={style.icon} /></span>Selected Projects</p>

            <div className={style.projectsContent}>
                {projects.map((project) => (
                    <div className={style.projectCard}>
                        <ProjectCard key={project.id} project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default LandingProjects;