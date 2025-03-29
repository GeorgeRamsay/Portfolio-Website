import React from 'react';
import style from './projectColumn.module.css';

const ProjectColumn = ({ project }) => {

    return (
        <div className={style.projectColumn}>
            {project.image && <img src={project.image} alt={project.name} className={style.backgroundImage} />}
            <div className={style.projectContent}>
                <div className={style.projectName}>
                    {project.name}
                </div>

            </div>
        </div>
    );
};

export default ProjectColumn;