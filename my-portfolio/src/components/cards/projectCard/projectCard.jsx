import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './projectCard.module.css';
import dotnetIcon from '../../../assets/svg/dotnetIcon.svg';
import { ReactSVG } from 'react-svg';
import TechStack from '../../techStack/techStack.js';
import classNames from 'classnames';


const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const navigate = useNavigate();

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
        const greySquare = document.createElement('div');
        greySquare.className = 'greySquare';
        document.body.appendChild(greySquare);
    
        setTimeout(() => {
            const purpleSquare = document.createElement('div');
            purpleSquare.className = 'purpleSquare';
            document.body.appendChild(purpleSquare);
    
            // Navigate after 0.3 seconds
            setTimeout(() => {
                navigate(`projects/${project.link}`);
            }, 300); // 0.3 seconds delay
        }, 200); // Reduced delay to start purple square animation after grey square
    };

    return (
        <Link
            to={`projects/${project.link}`}
            className={style.projectCard}
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
        </Link>
    );
};

export default ProjectCard;