import { useEffect, useState } from 'react';
import style from './projectDescription.module.css';
import ProjectCard from '../../cards/projectCard/projectCard';
import projects from '../../../data/projects'
import { IconClipboard } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import TransitionSquares from '../../animations/transitionSquares/TransitionSquares.js'; // Import the TransitionSquares component




const ProjectDescription = () => {
    const [project, setProject] = useState(null);
    const [showTransition, setShowTransition] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Get the project ID from the URL
        const url = window.location.href;
        const projectId = url.substring(url.lastIndexOf('/') + 1);
        console.log(projectId);

        // Find the project with the link equal to the projectId
        const foundProject = projects.find(proj => proj.link === projectId);
        setProject(foundProject);
    }, []);

    const handleBackNavigation = () => {
        setShowTransition(true);
    };

    if (!project) {
        return <div>Loading...</div>;
    }


    return (
        <>
            {showTransition && <TransitionSquares onComplete={() => navigate(-1)} />}
            <div className={style.projectsSection}>
                <button className={style.backButton} onClick={handleBackNavigation}>
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
                    <span key={index} className={style  .techName}>
                        {project.techStackImages[index]} 
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
            {project.role.split('\n').map((line, index) => (
                    <span key={index} className={style.roleItem}>
                        {line}
                    </span>
                ))}

                {project.images && project.images.length > 0 && (
                    <div className={style.imageContainer}>
                        {project.images.map((image, index) => (
                            <img key={index} src={image} alt={`Project ${index}`} className={style.projectImage} />
                        ))}
                    </div>
                )}
                
        </div>
        </>
    );
};

export default ProjectDescription;