/**
 * TypeScript type definitions for portfolio application
 */

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
}

export interface Skill {
    id: string;
    name: string;
    icon: string;
    description: string;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface ContactFormData {
    email: string;
    topic: string;
    message: string;
}

export interface ContactInfo {
    name: string;
    email: string;
    phone: string;
    social: {
        facebook: string;
        instagram: string;
        linkedin: string;
        github: string;
    };
}
