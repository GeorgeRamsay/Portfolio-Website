import React from 'react';
import style from './jobCard.module.css';
import { IconMapPinFilled, IconBuildings }  from '@tabler/icons-react';

const Job = React.forwardRef(({ title, duration, description, company, location }, ref) => (
    <div className={style.job} ref={ref}>
        <p className={style.role}>{title}</p>
        <h4>
            <IconBuildings size={20} />
            {company}
        </h4>
        <h4>
            <IconMapPinFilled size={20} />
            {location}
        </h4>
        <p>{duration}</p>
    </div>
));

export default Job;