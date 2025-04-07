// src/data/projectsData.js
import { IconBrandReact, IconBrandCSharp, IconBrandJavascript, IconBrandTypescript, IconBrandPython, IconBrandNodejs,IconBrandMysql, IconBrandMongodb, IconStack2 } from '@tabler/icons-react';
import dotnet from '../assets/svg/techStackIcons/dotnetIcon.svg';
import GoBearHome from '../assets/images/projectImages/goBear/GoBear home1.png';
import GoBearHome2 from '../assets/images/projectImages/goBear/GoBear home2.png';
import loginRecording from '../assets/images/projectImages/goBear/loginRecording.gif';
import dogAndCatHome from '../assets/images/projectImages/dog&catHomestay/d&cHomeFigma.png';
import PPHome from '../assets/images/projectImages/PP/PPHome.png';
import PPArticles from '../assets/images/projectImages/PP/PPArticles.png';
import PPQuiz from '../assets/images/projectImages/PP/PPQuiz.png';

const iconSize = 50;
const projects = [
    
    {
        id: 1,
        name: 'Parkinsons Pulse',
        image: PPHome,
        description: 'Parkinson’s Pulse is a web application that enables users to track their Parkinson’s symptoms and medication usage, and monitor changes over time through interactive visualizations. The project initially began as a university capstone, aimed at supporting individuals with Parkinson’s in managing their health more effectively. Due to the positive feedback it received, the project secured funding to continue development in collaboration with a real client. It is built using React, Node.js, and MongoDB, forming a robust and scalable full-stack solution.',
        techStack: ['React', 'Dotnet', 'MySQL'],
        techStackImages: [
            <IconBrandReact size={iconSize} color="#61DAFB" />,
            <img src={dotnet} alt="Dotnet" width={iconSize} height={iconSize} />,
            <IconBrandMysql size={iconSize} color="#4479A1" />
            
        ]
        ,
        link: 'ParkinsonsPulse',
        timeRange: 'JUL 2024 to Present',
        role: `As the Full Stack developer in a team of five: \n
        • Built responsive and accessible frontend components using React and TypeScript\n
        • Developed backend functionality and APIs using .NET (C#)\n
        • Implemented features for users to log and track symptoms and medication usage over time\n
        • Collaborated closely with clients to refine features and ensure the app met real-world needs\n
        • Contributed to an agile team environment through regular stand-ups, planning sessions, and code reviews`,
        images:[PPHome,
            PPArticles,
            PPQuiz

        ]
    },
    {
        id: 2,
        name: 'Go Bear',
        image: '',
        description:'Go Bear is an innovative startup dedicated to transforming the job search experience. The platform aggregates job listings from multiple sources, giving users access to a wide range of opportunities in one place. Beyond job search, Go Bear offers AI-powered tools such as a smart CV builder and other features designed to simplify and enhance the application process. The company’s mission is to empower job seekers with a seamless, efficient, and user-friendly experience.'
        ,
        techStack: ['React', 'Python', 'TypeScript', 'PostgreSQL'],
        techStackImages: [
            <IconBrandReact size={iconSize} color="#61DAFB" />,
            <IconBrandPython size={iconSize} color="#3776AB" />,
            <IconBrandTypescript size={iconSize} color="#007ACC" />,
            <img width={iconSize} height={iconSize} src="https://img.icons8.com/color/100/postgreesql.png" alt="postgreesql"/>

        ],
        link: 'GoBear',
        timeRange: 'SEP 2024 to JAN 2025',
        role: `As a frontend developer in a team of seven:	\n
        •	Worked as a Frontend Developer on the complete redesign of the Go Bear website to improve usability and visual appeal.\n
        •	Optimised the user interface for AI-powered features, ensuring they are intuitive, accessible, and high-performing.\n
        •	Collaborated closely with UX/UI designers and backend developers to create a seamless and responsive experience.\n
        •	Contributed to enhancing user engagement through clean design and thoughtful interactions.\n
        •	Gained valuable experience working in a fast-paced startup environment, deepening my skills in frontend frameworks and best practices.\n`,
        images: [
            GoBearHome,
            GoBearHome2,
            loginRecording
        ]
    },
    {
        id: 3,
        name: 'Dog & Cat Homestay',
        image: '',
        description: 'This simple, informative website is being developed to showcase a warm and welcoming dog and cat homestay—not a kennel, but a place where pets have plenty of space to relax and play. It will include photos of the property, contact details, pricing, and drop-off/pick-up times to make booking easy for pet owners. As the site is still in progress, real images aren’t available just yet—but they’re coming soon! ',
        techStack: ['React'],
        techStackImages: [
            <IconBrandReact size={iconSize} color="#61DAFB" />

            
        ],
        link: 'Dog&CatHomestay',
        timeRange: 'APR 2025 to Present',
        role: `Frontend Developer working by myself: \n
        •	Designing the layout and visual style of the website using Figma\n
        •	Developing the entire website from scratch, including structure, styling, and responsive design\n
        •	Writing clean, maintainable code to create a smooth and user-friendly experience\n
        `,
        images: [dogAndCatHome

        ],
    },


];

export default projects;