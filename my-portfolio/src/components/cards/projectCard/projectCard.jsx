import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import style from './projectCard.module.css';
import dotnetIcon from '../../../assets/svg/dotnetIcon.svg';
import { ReactSVG } from 'react-svg';
import TechStack from '../../techStack/techStack.js';
import classNames from 'classnames';

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);

    const handleMouseEnter = () => {
        const cards = document.querySelectorAll(`.${style.projectCard}`);
        cards.forEach(card => {
            if (card !== cardRef.current) {
                card.style.opacity = '0.5';
            }
        });
    };

    const handleMouseLeave = () => {
        const cards = document.querySelectorAll(`.${style.projectCard}`);
        cards.forEach(card => {
            card.style.opacity = '1';
        });
    };

    return (
        <Link
            to={`projects/${project.link}`}
            className={style.projectCard}
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
        </Link>
    );
};

export default ProjectCard;