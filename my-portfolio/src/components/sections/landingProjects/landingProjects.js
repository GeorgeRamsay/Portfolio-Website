import React from 'react';
import style from './landingProjects.module.css';
import ProjectCard from '../../cards/projectCard/projectCard';
import PPDashboard from '../../../assets/images/projectImages/PP Dashboard.png';
import projects from '../../../data/projects'
import { IconClipboard } from '@tabler/icons-react';



const LandingProjects = () => {
    return (
        <div className={style.projectsSection}>
             <p className='sectionHeader'><span><IconClipboard size={40} className={style.icon} /></span>Selected Projects</p>

            <div className={style.projectsContent}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};
export default LandingProjects;