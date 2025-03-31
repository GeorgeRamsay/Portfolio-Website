import React from 'react';
import style from './jobCard.module.css';

const Job = React.forwardRef(({ title, duration, description, company, location }, ref) => (
    <div className={style.job} ref={ref}>
        <h2>{title}</h2>
        <h3>{company} - {location}</h3>
        <p>{duration}</p>
        <p>{description}</p>
    </div>
));

export default Job;