/**
 * Constants for portfolio data
 */

import { Project, Skill, ContactInfo } from './types';
import { assetUrl } from './utils';

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'E-commerce Website',
        description: 'A modern and responsive e-commerce website with seamless shopping experience, product filtering, and secure checkout process.',
        image: assetUrl('sample1.jpg'),
        link: 'https://github.com/Anjana2k02'
    },
    {
        id: '2',
        title: 'Portfolio Website',
        description: 'A visually stunning portfolio website showcasing design and development skills with smooth animations and responsive layout.',
        image: assetUrl('sample2.jpg'),
        link: 'https://github.com/Anjana2k02'
    },
    {
        id: '3',
        title: 'SaaS Landing Page',
        description: 'A modern and visually appealing landing page for a SaaS product with conversion-focused design and interactive elements.',
        image: assetUrl('sample3.jpg'),
        link: 'https://github.com/Anjana2k02'
    },
    {
        id: '4',
        title: 'Blog Website',
        description: 'A responsive and user-friendly blog website with modern design, markdown support, and optimized SEO.',
        image: assetUrl('sample4.jpg'),
        link: 'https://github.com/Anjana2k02'
    }
];

export const SKILLS: Skill[] = [
    {
        id: 'jupyter',
        name: 'Jupyter Notebook',
        icon: assetUrl('jupyter.svg'),
        description: 'Proficient in creating and managing interactive data analysis and visualization notebooks using Jupyter.'
    },
    {
        id: 'anaconda',
        name: 'Anaconda',
        icon: assetUrl('anaconda.svg'),
        description: 'Skilled in utilizing Anaconda for managing Python environments and packages, streamlining data science workflows.'
    },
    {
        id: 'powerbi',
        name: 'Power BI',
        icon: assetUrl('power.svg'),
        description: 'Experienced in creating insightful and interactive business intelligence reports and dashboards using Power BI.'
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        icon: assetUrl('javascript.svg'),
        description: 'Proficient in writing clean and efficient JavaScript code for modern web applications.'
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        icon: assetUrl('node.svg'),
        description: 'Skilled in building scalable server-side applications using Node.js and Express frameworks.'
    },
    {
        id: 'react',
        name: 'React',
        icon: assetUrl('react.svg'),
        description: 'Experienced in developing interactive user interfaces with React and modern state management patterns.'
    },
    {
        id: 'python',
        name: 'Python',
        icon: assetUrl('python.svg'),
        description: 'Skilled in writing versatile and high-performance Python scripts for data processing and automation.'
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        icon: assetUrl('kotlin.svg'),
        description: 'Proficient in developing Android applications using Kotlin and modern development practices.'
    },
    {
        id: 'firebase',
        name: 'Firebase',
        icon: assetUrl('firebase.svg'),
        description: 'Competent in utilizing Firebase for backend services and real-time database management.'
    }
];

export const CONTACT_INFO: ContactInfo = {
    name: import.meta.env.VITE_AUTHOR_NAME || 'Anjana Indunil',
    email: import.meta.env.VITE_CONTACT_EMAIL || 'anjanaindu3699@gmail.com',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+94 71 24 12 634',
    social: {
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com/in/anjana2k02/',
        github: 'https://github.com/Anjana2k02'
    }
};
