import React from 'react';
import { IconBrandReact, IconBrandCSharp, IconBrandJavascript, IconBrandPython } from '@tabler/icons-react';



const TechStack = () => {
    return (
        <div >
            <h3> Tech Stack</h3>
            <span>
                <IconBrandReact size={30} color="#61DAFB" />
                <IconBrandCSharp size={30} color="#239120" />
                <IconBrandJavascript size={30} color="#F7DF1E" />
                <IconBrandPython size={30} color="#3776AB" />
            </span>
        </div>
    );
};
export default TechStack;