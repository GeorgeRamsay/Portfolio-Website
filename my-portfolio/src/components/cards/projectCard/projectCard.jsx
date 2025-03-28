import React from 'react';
import style from './projectCard.module.css';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ image, title, text, link }) => {
    const navigate = useNavigate();

    return (
        <div>
            <img className={style.imageContainer} src={image} alt={title} />
            
            <h3>{title}</h3>
            <p>{text}</p>
            <button onClick={() => navigate(link)}>View Project</button>
        </div>
    );
}

export default ProjectCard;
