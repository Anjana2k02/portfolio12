import { PROJECTS } from '@/lib/constants';
import { Project } from '@/lib/types';

export default function Projects() {
    return (
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Take a look at some of my recent projects.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    {PROJECTS.map((project: Project) => (
                        <a
                            key={project.id}
                            href={project.link ?? '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group grid gap-4 hover:opacity-80 transition-opacity"
                        >
                            <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
                                <img
                                    src={project.image}
                                    width="550"
                                    height="200"
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-muted-foreground">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
