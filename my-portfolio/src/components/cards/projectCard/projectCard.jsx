import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './projectCard.module.css';
import dotnetIcon from '../../../assets/svg/dotnetIcon.svg';
import { ReactSVG } from 'react-svg';
import TechStack from '../../techStack/techStack.js';
import classNames from 'classnames';

import TransitionSquares from '../../animations/transitionSquares/TransitionSquares.js'; // Import the new component

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const navigate = useNavigate();
    const [showTransition, setShowTransition] = useState(false);

    const handleMouseEnter = () => {
        const cards = document.querySelectorAll(`.${style.projectCard}`);
        cards.forEach(card => {
            card.style.opacity = '0.5';
        });
        cardRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
        const cards = document.querySelectorAll(`.${style.projectCard}`);
        cards.forEach(card => {
            card.style.opacity = '1';
        });
    };

    const handleNavigation = (e) => {
        e.preventDefault();
        setShowTransition(true);
    };

    return (
        <>
            {showTransition && <TransitionSquares onComplete={() => navigate(`projects/${project.link}`)} />}
            <div
                className={classNames(style.projectCard, 'hover')}
                ref={cardRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleNavigation}
            >
                <div className={style.projectContent}>
                    <div className={style.projectName} data-text={project.name}>
                        {project.name}
                    </div>
                    <div className={style.techStack}>
                        {project.techStack.map((tech, index) => (
                            <span key={index} className={style.techName}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;