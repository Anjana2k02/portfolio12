/**
 * Constants for portfolio data
 */

import {
    ContactInfo,
    PortfolioContent,
    Project,
    Skill
} from './types';
import { assetUrl } from './utils';

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

export const PORTFOLIO_CONTENT: PortfolioContent = {
    owner: {
        name: 'Anjana Indunil',
        itNumber: 'IT22002624',
        role: 'Aspiring Full-Stack Developer',
        course: 'Sri Lanka Institute of Information Technology',
        institution: 'Sri Lanka Institute of Information Technology',
        location: 'Sri Lanka',
        email: CONTACT_INFO.email,
        phone: CONTACT_INFO.phone,
        github: CONTACT_INFO.social.github,
        linkedin: CONTACT_INFO.social.linkedin
    },
    introduction: {
        headline: 'Building useful digital products with full-stack craft, data curiosity, and professional discipline.',
        summary:
            'I am an IT undergraduate at SLIIT preparing for a career as a full-stack developer. My work combines React, JavaScript, Node.js, Firebase, Python, and AI/ML fundamentals, supported by a growing interest in data-driven problem solving. This portfolio brings together my background, reflections, career direction, CV, and technical growth in a clear and modern format.',
        highlights: [
            'Full-stack development path with React, Node.js, JavaScript, and Firebase',
            'Data and AI/ML interests supported by Python and AI/ML certificates',
            'Professional growth focus: communication, employability, self-review, and career planning'
        ]
    },
    sections: [
        { id: 'introduction', number: '01', label: 'Introduction', title: 'Personal Introduction', marks: 10 },
        { id: 'journal', number: '02', label: 'Journal', title: 'Reflective Journal', marks: 20 },
        { id: 'career', number: '03', label: 'Career Plan', title: 'Career Development Plan', marks: 20 },
        { id: 'cv', number: '04', label: 'CV', title: 'Curriculum Vitae', marks: 10 },
        { id: 'certificates', number: '05', label: 'Certificates', title: 'Certificates and Skill Evidence', marks: 10 }
    ],
    journal: [
        {
            week: 'Reflection 01',
            title: 'Understanding my professional identity',
            focus: 'Self-awareness and career direction',
            reflection:
                'This reflection helped me look beyond technical ability and think about the kind of professional I want to become. I recognized that my strongest direction is full-stack development because it allows me to build complete solutions, understand user needs, and connect frontend experience with backend logic. It gave me a clearer sense of purpose and helped me position my data science and AI/ML interests as valuable supporting strengths.',
            evidence:
                'I revised my portfolio introduction to communicate a specific full-stack career goal instead of presenting a broad list of skills.'
        },
        {
            week: 'Reflection 02',
            title: 'Improving communication and employability',
            focus: 'Professional communication',
            reflection:
                'I learned that employability is shaped by how clearly I present my work, not only by what I can build. I became more aware of the importance of concise explanations, organized evidence, and professional tone. This changed the way I describe projects, skills, and achievements so that a recruiter, client, or collaborator can quickly understand my value.',
            evidence:
                'The CV section now uses short, outcome-focused statements and groups skills into practical categories.'
        },
        {
            week: 'Reflection 03',
            title: 'Connecting learning evidence with career goals',
            focus: 'Continuous learning',
            reflection:
                'The certificate evidence reminded me that career development is continuous. Courses in Python, AI/ML, JavaScript, and Java strengthened different parts of my technical foundation. They helped me connect technical learning to a realistic career plan instead of treating those achievements as isolated milestones.',
            evidence:
                'The certificates are presented with the specific skill improved and how each skill supports my development path.'
        },
        {
            week: 'Reflection 04',
            title: 'Planning the next professional step',
            focus: 'Action planning and confidence',
            reflection:
                'By preparing this portfolio, I learned to convert ambition into measurable actions. My next step is to improve my full-stack project quality, prepare for internship opportunities, and practice interview communication. The process increased my confidence because I can now see a clearer connection between my current abilities and the professional standard I am working toward.',
            evidence:
                'The career development plan defines short-term, mid-term, and long-term goals with clear measures of progress.'
        }
    ],
    careerPlan: [
        {
            timeframe: '0-6 months',
            title: 'Foundation and employability readiness',
            goal: 'Strengthen the practical full-stack foundation needed for internship and junior developer opportunities.',
            actions: [
                'Improve React, TypeScript, Node.js, and Firebase through focused project work',
                'Refine CV, GitHub profile, and portfolio explanations for professional presentation',
                'Practice interview answers using project examples, communication skills, and personal reflections'
            ],
            measure: 'Publish two polished full-stack projects with clear README files and portfolio case summaries.'
        },
        {
            timeframe: '6-18 months',
            title: 'Industry exposure and specialization',
            goal: 'Gain real development experience while building a stronger identity as a full-stack developer with data awareness.',
            actions: [
                'Apply for internships, freelance work, and university project opportunities',
                'Build APIs, dashboards, and database-backed applications using real user requirements',
                'Continue Python and AI/ML learning to support data-driven product features'
            ],
            measure: 'Complete at least one industry-style project with authentication, database usage, deployment, and documentation.'
        },
        {
            timeframe: '2-3 years',
            title: 'Professional contribution and growth',
            goal: 'Become a dependable full-stack developer capable of owning product features from planning to delivery.',
            actions: [
                'Develop deeper backend, cloud, testing, and deployment skills',
                'Contribute to team projects with professional communication and code review habits',
                'Use AI/ML and analytics knowledge to add smarter features to web applications'
            ],
            measure: 'Build a portfolio of deployed products that show business value, technical quality, and continuous growth.'
        }
    ],
    cv: {
        profile:
            'Motivated IT undergraduate and aspiring full-stack developer with experience across React, JavaScript, Node.js, Firebase, Python, Kotlin, and data-oriented tools. Interested in building useful web applications, learning from professional feedback, and growing into a reliable developer who can communicate clearly and deliver practical solutions.',
        education: [
            {
                title: 'BSc (Hons) in Information Technology',
                subtitle: 'Sri Lanka Institute of Information Technology - SLIIT',
                meta: 'Undergraduate',
                points: [
                    'Focused on software development, web technologies, database systems, and professional project implementation.'
                ]
            },
            {
                title: 'Advanced Level - Mathematics Stream',
                subtitle: "Boys' Model School",
                meta: '',
                points: [
                    'Completed Advanced Level studies in the Mathematics stream.'
                ]
            }
        ],
        projects: [
            {
                title: 'Personalized Map Navigation App for Museum',
                subtitle: 'University research project',
                meta: 'Python | Flutter ',
                points: [
                    'Developed a museum navigation app with personalized route suggestions based on user interest.',
                    'Built live interest scoring using dwell time, movement tracking, and user interactions.',
                    'Worked with coordinate-based map drawing, QGIS maps, Flutter UI, PostgreSQL, and Spring Boot.'
                ]
            },
            {
                title: 'Task Management System with Emotional Tracking',
                subtitle: 'ITPM project',
                meta: 'Python | ML  ',
                points: [
                    'Created an employee task management system with emotional status tracking.',
                    'Used machine learning, image processing, and YOLO detection to support emotion analysis.',
                    'Built backend services with FastAPI and managed data using MongoDB.'
                ]
            },
            {
                title: 'Asset Management System',
                subtitle: 'Enterprise-level project',
                meta: 'React  | Spring Boot | PostgreSQL',
                points: [
                    'Developed an enterprise asset management system for different company types.',
                    'Implemented asset acquisition, depreciation, tax calculation, and lifecycle tracking.',
                    'Built a React frontend with Spring Boot backend and PostgreSQL database.'
                ]
            }
        ],
        workExperience: [
            {
                title: 'Intern Software Engineer',
                subtitle: 'Nexeyo Solutions, Madiwela',
                meta: '6 months | 2005-02-14',
                points: []
            },
            {
                title: 'Associate Software Engineer',
                subtitle: 'Nexeyo Solutions, Madiwela',
                meta: '6 months | 2025-08-20',
                points: []
            },
            {
                title: 'Permanent Software Engineer',
                subtitle: 'Nexeyo Solutions, Madiwela',
                meta: 'Current',
                points: []
            }
        ],
        skillGroups: [
            {
                title: 'Frontend',
                items: ['React', 'JavaScript', 'TypeScript basics', 'Tailwind CSS', 'Responsive UI']
            },
            {
                title: 'Backend and Data',
                items: ['Node.js', 'Firebase', 'Python', 'Jupyter Notebook', 'Power BI']
            },
            {
                title: 'Professional Skills',
                items: ['Communication', 'Career planning', 'Reflective writing', 'Teamwork', 'Self-directed learning']
            }
        ]
    },
    certificates: [
        {
            title: 'Getting Started with Playwright with TypeScript',
            provider: 'Simplilearn SkillUp',
            issued: '8 May 2026',
            skillImproved: 'End-to-end testing with Playwright and TypeScript',
            image: assetUrl('certificate/playwrite.png'),
            priority: 'primary'
        },
        {
            title: 'AI/ML Engineer - Stage 1',
            provider: 'SLIIT UNI - Centre for Open and Distance Education',
            issued: '19 July 2024',
            skillImproved: 'Artificial intelligence and machine learning fundamentals',
            image: assetUrl('certificate/1721379869490.jpg'),
            priority: 'primary'
        },
        {
            title: 'Python for Beginners',
            provider: 'University of Moratuwa - CODL',
            issued: '8 July 2024',
            skillImproved: 'Python programming fundamentals for problem solving',
            image: assetUrl('certificate/1720448546141.jpg'),
            priority: 'primary'
        },
        {
            title: 'Introduction to JavaScript',
            provider: 'Sololearn',
            issued: '6 July 2024',
            skillImproved: 'Client-side scripting and web development fundamentals',
            image: assetUrl('certificate/1720292272824.jpg'),
            priority: 'supporting'
        },
        {
            title: 'Java Intermediate',
            provider: 'Sololearn',
            issued: '3 January 2024',
            skillImproved: 'Object-oriented programming and intermediate Java concepts',
            image: assetUrl('certificate/1704271652577.jpg'),
            priority: 'supporting'
        }
    ],
    awsCertificates: [
        {
            title: 'AWS Certificate 01',
            image: assetUrl('certificate/aws/Screenshot 2026-05-08 151036.png')
        },
        {
            title: 'AWS Certificate 02',
            image: assetUrl('certificate/aws/Screenshot 2026-05-08 151111.png')
        },
        {
            title: 'AWS Certificate 03',
            image: assetUrl('certificate/aws/Screenshot 2026-05-08 151133.png')
        },
        {
            title: 'AWS Certificate 04',
            image: assetUrl('certificate/aws/Screenshot 2026-05-08 151201.png')
        },
        {
            title: 'AWS Certificate 05',
            image: assetUrl('certificate/aws/Screenshot 2026-05-08 151225.png')
        },
        {
            title: 'AWS Certificate 06',
            image: assetUrl('certificate/aws/Screenshot 2026-05-08 151311.png')
        }
    ]
};

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'E-commerce Website',
        description: 'A modern and responsive e-commerce website with seamless shopping experience, product filtering, and secure checkout process.',
        image: assetUrl('sample1.jpg'),
        link: CONTACT_INFO.social.github
    },
    {
        id: '2',
        title: 'Portfolio Website',
        description: 'A portfolio website redesigned into a modern editorial presentation with polished structure and strong visual hierarchy.',
        image: assetUrl('sample2.jpg'),
        link: CONTACT_INFO.social.github
    },
    {
        id: '3',
        title: 'SaaS Landing Page',
        description: 'A modern landing page concept with conversion-focused structure and responsive visual hierarchy.',
        image: assetUrl('sample3.jpg'),
        link: CONTACT_INFO.social.github
    },
    {
        id: '4',
        title: 'Blog Website',
        description: 'A responsive blog website concept with readable content structure and user-friendly layout.',
        image: assetUrl('sample4.jpg'),
        link: CONTACT_INFO.social.github
    }
];

export const SKILLS: Skill[] = [
    {
        id: 'jupyter',
        name: 'Jupyter Notebook',
        icon: assetUrl('jupyter.svg'),
        description: 'Creating and managing interactive notebooks for analysis and learning.'
    },
    {
        id: 'anaconda',
        name: 'Anaconda',
        icon: assetUrl('anaconda.svg'),
        description: 'Managing Python environments and packages for data workflows.'
    },
    {
        id: 'powerbi',
        name: 'Power BI',
        icon: assetUrl('power.svg'),
        description: 'Creating business intelligence reports and dashboards.'
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        icon: assetUrl('javascript.svg'),
        description: 'Writing client-side logic for modern web applications.'
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        icon: assetUrl('node.svg'),
        description: 'Building backend logic and server-side application features.'
    },
    {
        id: 'react',
        name: 'React',
        icon: assetUrl('react.svg'),
        description: 'Developing component-based user interfaces.'
    },
    {
        id: 'python',
        name: 'Python',
        icon: assetUrl('python.svg'),
        description: 'Solving problems and exploring data-oriented programming.'
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        icon: assetUrl('kotlin.svg'),
        description: 'Developing Android application concepts.'
    },
    {
        id: 'firebase',
        name: 'Firebase',
        icon: assetUrl('firebase.svg'),
        description: 'Using backend services and real-time database features.'
    }
];
