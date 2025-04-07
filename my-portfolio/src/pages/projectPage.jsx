import Star from '../components/backgrounds/stars.js';
import React, { useEffect } from 'react';
import ProjectDescription from '../components/sections/projectDescription/projectDescription.js'

function ProjectPage() {

    return (
        <div>
           
            <ProjectDescription />
           <Star />
         
        </div>
    );
}

export default ProjectPage;