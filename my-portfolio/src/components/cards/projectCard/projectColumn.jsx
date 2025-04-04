import React from 'react';
import style from './projectColumn.module.css';
import { IconCalendar, IconBrandReact, IconBrandCSharp,IconBrandJavascript } from '@tabler/icons-react';
import dotnetIcon from '../../../assets/svg/dotnetIcon.svg';
import { ReactSVG } from 'react-svg';
import TechStack from '../../techStack/techStack.js';
import classNames from 'classnames';


const ProjectColumn = ({ project }) => {
    const iconSize = 30;

    return (
        
        <div className={style.projectColumn}>
            
            {project.image && <img src={project.image} alt={project.name} className={style.backgroundImage} />}

            <div className={style.projectContent}>

                <div className={style.projectName}>
                    {project.name}
                </div>
                <div className={classNames(style.projectDescription, )}>
                    
                    <p className={style.projectDescriptionText}>
                        {project.description}
                        
                    </p>
                    <TechStack stack={project.techStack} />

                </div>

            </div>
        </div>
    );
};

export default ProjectColumn;