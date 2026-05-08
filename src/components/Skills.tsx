import { SKILLS } from '@/lib/constants';
import { Skill } from '@/lib/types';

export default function Skills() {
    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I&apos;m proficient in a wide range of web development and data science tools.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                    {SKILLS.map((skill: Skill) => (
                        <div key={skill.id} className="flex flex-col items-center justify-center space-y-4">
                            <div className="relative w-[100px] h-[100px] overflow-hidden">
                                <img
                                    src={skill.icon}
                                    width="100"
                                    height="100"
                                    alt={`${skill.name} icon`}
                                    className="w-full h-full object-contain animate-spin-slow"
                                />
                            </div>
                            <div className="space-y-2 text-center">
                                <h3 className="text-xl font-bold">{skill.name}</h3>
                                <p className="text-muted-foreground text-sm">{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
