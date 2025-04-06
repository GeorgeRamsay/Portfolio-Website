import { useEffect, useState } from 'react';
import style from './projectDescription.module.css';
import ProjectCard from '../../cards/projectCard/projectCard';
import projects from '../../../data/projects'
import { IconClipboard } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';





const ProjectDescription = () => {
    const [project, setProject] = useState(null);
    const navigate = useNavigate(); 
    useEffect(() => {
        // Get the project ID from the URL
        const url = window.location.href;
        const projectId = url.substring(url.lastIndexOf('/') + 1);
        console.log(projectId);

        // Find the project with the link equal to the projectId
        const foundProject = projects.find(proj => proj.link === projectId);
        setProject(foundProject);
    }, []);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.projectsSection}>
            <button className={style.backButton} onClick={() => navigate(-1)}>
                ← Back
            </button>
            <p className={style.projectHeader}>
                {project.name}
            </p>
            <p className={style.projectSubHeader}>
                Time Period
            </p>
            <p className={style.text}>
                {project.timeRange}
            </p>

            <p className={style.projectSubHeader}>
                Tech
            </p>
            <div className={style.techStack}>
                {project.techStack.map((tech, index) => (
                    <span key={index} className={style.techName}>
                        {tech}
                    </span>
                ))}
            </div>

            <p className={style.projectSubHeader}>
                Description
            </p>
             <p className={style.text}>
                {project.description}
            </p>

            <p className={style.projectSubHeader}>
                My Role
            </p>
            <p className={style.text}>
                {project.role}
            </p>


        </div>
    );
};

export default ProjectDescription;