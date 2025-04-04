import React from 'react';
import { IconBrandReact, IconBrandCSharp, IconBrandJavascript, IconBrandPython } from '@tabler/icons-react';
import dotnetIcon from '../../assets/svg/dotnetIcon.svg';

const TechStack = ({ stack = [] }) => {
    const iconSize = 30;

    const renderIcon = (tech) => {
        switch (tech) {
            case 'React':
                return <IconBrandReact size={iconSize} color="#61DAFB" />;
            case 'CSharp':
                return <IconBrandCSharp size={iconSize} color="#239120" />;
            case 'JavaScript':
                return <IconBrandJavascript size={iconSize} color="#F7DF1E" />;
            case 'Dotnet':
                return <img src={dotnetIcon} alt="dotnet" width={iconSize} height={iconSize} />;
            case 'Python':
                return <IconBrandPython size={iconSize} color="#3776AB" />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h3> Tech Stack</h3>
            {stack.map((tech, index) => (
                <span key={index}>{renderIcon(tech)}</span>
            ))}
        </div>
    );
};

export default TechStack;