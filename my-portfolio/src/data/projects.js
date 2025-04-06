// src/data/projectsData.js
import PPDashboard from '../assets/images/projectImages/PP Dashboard.png';

const projects = [
    {
        id: 1,
        name: 'Parkinsons Pulse',
        image: PPDashboard,
        description: 'Parkinsons Pulse is a web application that allows users to track their Parkinsons symptoms and medication usage. The application also allows users to monitor their symptoms and medication usage over time. The application is built using React, Node.js, and MongoDB.',
        techStack: ['React', 'Dotnet', 'MySQL'],
        link: 'ParkinsonsPulse',
        timeRange: 'JUL 2024 to Present',
        role: 'Full Stack Developer',
    },
    {
        id: 2,
        name: 'Go Bear',
        image: '',
        techStack: ['React', 'Python', 'JavaScript', 'PostgreSQL'],
        link: 'GoBear',
        timeRange: 'SEP 2024 to JAN 2025',
        role: 'Frontend Developer',
    },
    {
        id: 3,
        name: 'Project 3',
        image: '',
        techStack: ['React', 'Python', 'JavaScript', 'PostgreSQL'],
        link: 'Project3',
        timeRange: 'SEP 2024 to JAN 2025',
        role: 'Full Stack Developer',
    },


];

export default projects;