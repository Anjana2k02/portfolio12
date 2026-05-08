import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { CONTACT_INFO } from '@/lib/constants';
import { ContactFormData } from '@/lib/types';
import { assetUrl } from '@/lib/utils';

export default function ContactSection() {
    const [formData, setFormData] = useState<ContactFormData>({
        email: '',
        topic: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Validate form data
            if (!formData.email || !formData.topic || !formData.message) {
                setStatus('error');
                setMessage('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setStatus('error');
                setMessage('Please enter a valid email address');
                return;
            }

            // Simulate form submission (In production, connect to EmailJS or your backend)
            await new Promise(resolve => setTimeout(resolve, 500));

            setStatus('success');
            setMessage('Thank you for your message! I\'ll get back to you soon.');
            setFormData({ email: '', topic: '', message: '' });

            // Reset message after 5 seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        } catch {
            setStatus('error');
            setMessage('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Feel free to reach out to me for any inquiries or collaborations.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    {/* Contact Info Card */}
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <img
                            src={assetUrl('profile.jpg')}
                            width="150"
                            height="150"
                            alt={`${CONTACT_INFO.name} profile`}
                            className="w-32 h-32 object-cover rounded-full"
                        />
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">{CONTACT_INFO.name}</h3>
                            <p className="text-muted-foreground">
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="hover:underline"
                                    aria-label={`Email: ${CONTACT_INFO.email}`}
                                >
                                    Email: {CONTACT_INFO.email}
                                </a>
                            </p>
                            <p className="text-muted-foreground">
                                <a
                                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                                    className="hover:underline"
                                    aria-label={`Phone: ${CONTACT_INFO.phone}`}
                                >
                                    Mobile: {CONTACT_INFO.phone}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full space-y-4">
                        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium mb-1">
                                    Email <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Your email"
                                    required
                                    aria-required="true"
                                    aria-describedby="email-error"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="topic" className="text-sm font-medium mb-1">
                                    Topic <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="topic"
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="What is this about?"
                                    required
                                    aria-required="true"
                                    aria-describedby="topic-error"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-medium mb-1">
                                    Message <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Your message"
                                    rows={5}
                                    required
                                    aria-required="true"
                                    aria-describedby="message-error"
                                />
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div
                                    className="p-3 bg-green-100 text-green-700 rounded flex items-center gap-2"
                                    role="alert"
                                >
                                    <span>✓</span>
                                    <span>{message}</span>
                                </div>
                            )}
                            {status === 'error' && (
                                <div
                                    className="p-3 bg-red-100 text-red-700 rounded flex items-center gap-2"
                                    role="alert"
                                >
                                    <span>✕</span>
                                    <span>{message}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                aria-busy={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 flex justify-center space-x-6">
                    <a
                        href={CONTACT_INFO.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60 transition-opacity"
                        aria-label="Facebook"
                    >
                        <img src={assetUrl('facebook-icon.svg')} alt="" className="w-6 h-6" />
                    </a>
                    <a
                        href={CONTACT_INFO.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60 transition-opacity"
                        aria-label="Instagram"
                    >
                        <img src={assetUrl('instagram-icon.svg')} alt="" className="w-6 h-6" />
                    </a>
                    <a
                        href={CONTACT_INFO.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60 transition-opacity"
                        aria-label="LinkedIn"
                    >
                        <img src={assetUrl('linkedin-icon.svg')} alt="" className="w-6 h-6" />
                    </a>
                    <a
                        href={CONTACT_INFO.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60 transition-opacity"
                        aria-label="GitHub"
                    >
                        <img src={assetUrl('github-icon.svg')} alt="" className="w-6 h-6" />
                    </a>
                </div>

                {/* Copyright */}
                <CopyrightYear />
            </div>
        </section>
    );
}

/**
 * Separate component to handle dynamic year without hydration mismatch
 */
function CopyrightYear() {
    const [year, setYear] = useState<string>('');

    // Use useEffect to avoid hydration mismatch
    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, []);

    return (
        <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; {year} {CONTACT_INFO.name}. All rights reserved.
        </div>
    );
}
