import React from 'react';
import style from './projectCard.module.css';
import dotnetIcon from '../../../assets/svg/dotnetIcon.svg';
import { ReactSVG } from 'react-svg';
import TechStack from '../../techStack/techStack.js';
import classNames from 'classnames';


const ProjectCard = ({ project }) => {
    const iconSize = 30;

    return (
        
        <div className={style.projectColumn}>
            

            <div className={style.projectContent}>

                <div className={style.projectName}>
                    {project.name}
                </div>


            </div>
        </div>
    );
};

export default ProjectCard;