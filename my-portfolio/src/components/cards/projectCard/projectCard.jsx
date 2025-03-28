import React from 'react';
import style from './projectCard.module.css';
import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ image, title, text, link }) => {
    const navigate = useNavigate();

    return (
        <div className={style.card}>
            <img className={classNames(style.imageContainer)} src={image} alt={title} />
            <div className={classNames(style.cardCover, style.gradientBlur)}>
                <h3>{title}</h3>
                <p>{text}</p>
            
                <button onClick={() => navigate(link)}>View Project</button>
            </div>
        </div>
    );
}

export default ProjectCard;
