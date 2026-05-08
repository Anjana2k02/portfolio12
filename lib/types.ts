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

export interface PortfolioSection {
    id: string;
    number: string;
    label: string;
    title: string;
    marks: number;
}

export interface JournalEntry {
    week: string;
    title: string;
    focus: string;
    reflection: string;
    evidence: string;
}

export interface CareerPlanPhase {
    timeframe: string;
    title: string;
    goal: string;
    actions: string[];
    measure: string;
}

export interface CertificateEvidence {
    title: string;
    provider: string;
    issued: string;
    skillImproved: string;
    image: string;
    priority: 'primary' | 'supporting';
}

export interface CertificateSlide {
    title: string;
    image: string;
}

export interface CvEntry {
    title: string;
    subtitle: string;
    meta: string;
    points: string[];
}

export interface PortfolioContent {
    owner: {
        name: string;
        itNumber: string;
        role: string;
        course: string;
        institution: string;
        location: string;
        email: string;
        phone: string;
        github: string;
        linkedin: string;
    };
    introduction: {
        headline: string;
        summary: string;
        highlights: string[];
    };
    sections: PortfolioSection[];
    journal: JournalEntry[];
    careerPlan: CareerPlanPhase[];
    cv: {
        profile: string;
        education: CvEntry[];
        projects: CvEntry[];
        workExperience: CvEntry[];
        skillGroups: Array<{
            title: string;
            items: string[];
        }>;
    };
    certificates: CertificateEvidence[];
    awsCertificates: CertificateSlide[];
}
