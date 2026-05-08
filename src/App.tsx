import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Code2,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Printer,
  Target
} from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/lib/constants';
import { assetUrl } from '@/lib/utils';

const content = PORTFOLIO_CONTENT;

function SectionHeader({
  id,
  eyebrow,
  title
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 border-b border-border pb-6">
      <div>
        <p className="text-xs font-semibold uppercase text-accent">{eyebrow}</p>
        <h2 id={id} className="mt-2 text-3xl font-semibold leading-tight text-foreground md:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeAwsCertificate, setActiveAwsCertificate] = useState(0);
  const awsCertificates = content.awsCertificates;
  const currentAwsCertificate = awsCertificates[activeAwsCertificate];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveAwsCertificate((current) => (current === awsCertificates.length - 1 ? 0 : current + 1));
    }, 1500);

    return () => window.clearInterval(intervalId);
  }, [awsCertificates.length]);

  const showPreviousAwsCertificate = () => {
    setActiveAwsCertificate((current) => (current === 0 ? awsCertificates.length - 1 : current - 1));
  };

  const showNextAwsCertificate = () => {
    setActiveAwsCertificate((current) => (current === awsCertificates.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="portfolio-shell min-h-screen bg-background text-foreground">
      <header className="site-header sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <a href="#introduction" className="flex items-center gap-3 font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-foreground text-sm text-background">
              AI
            </span>
            <span className="hidden sm:inline">{content.owner.name}</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground lg:flex">
            {content.sections.slice(0, 5).map((section) => (
              <a key={section.id} href={`#${section.id}`} className="transition hover:text-foreground">
                {section.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => window.print()}
            className="print-button inline-flex h-10 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-accent hover:text-accent-foreground"
          >
            <Printer className="h-4 w-4" />
            PDF
          </button>
        </div>
      </header>

      <main>
        <section id="introduction" className="data-grid relative overflow-hidden border-b border-border">
          <div className="hero-grid mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-accent" />
                {content.owner.course}
              </div>
              <p className="mb-4 text-sm font-semibold uppercase text-accent">Portfolio 2026</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-none text-foreground md:text-7xl">
                {content.owner.role}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
                {content.introduction.headline}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
                {content.introduction.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#journal"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
                >
                  Explore Portfolio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#cv"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-semibold transition hover:border-accent hover:text-accent"
                >
                  Curriculum Vitae
                  <FileText className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <img
                  src={assetUrl('profile.jpeg')}
                  alt={`${content.owner.name} profile photograph`}
                  className="h-[560px] w-[420px] max-w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="portfolio-content-grid mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[240px_1fr]">
          <aside className="section-index site-header hidden lg:block">
            <div className="sticky top-24 rounded-lg border border-border bg-card p-4">
              <p className="mb-4 text-xs font-semibold uppercase text-muted-foreground">Sections</p>
              <nav className="grid gap-2">
                {content.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-between rounded-md px-3 py-2 text-sm transition hover:bg-muted"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-accent">{section.number}</span>
                      {section.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition group-hover:text-foreground" />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-20">
            <section className="print-section">
              <SectionHeader id="journal" eyebrow="02 / Reflective Journal" title="What I Learned Through Reflection" />
              <div className="relative grid gap-5">
                {content.journal.map((entry, index) => (
                  <article key={entry.title} className="relative rounded-lg border border-border bg-card p-6 shadow-sm">
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-sm font-semibold text-background">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-accent">{entry.week}</p>
                          <h3 className="text-xl font-semibold">{entry.title}</h3>
                        </div>
                      </div>
                      <span className="w-fit rounded-md bg-muted px-3 py-1 text-xs font-semibold uppercase text-muted-foreground">
                        {entry.focus}
                      </span>
                    </div>
                    <p className="leading-8 text-muted-foreground">{entry.reflection}</p>
                    <div className="mt-5 flex gap-3 rounded-lg border border-border bg-background p-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                      <p className="text-sm leading-6 text-muted-foreground">
                        <span className="font-semibold text-foreground">Evidence: </span>
                        {entry.evidence}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="print-section career-section">
              <SectionHeader id="career" eyebrow="03 / Career Development Plan" title="Full-Stack Developer Roadmap" />
              <div className="career-grid grid gap-5 md:grid-cols-3">
                {content.careerPlan.map((phase) => (
                  <article key={phase.timeframe} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Target className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-accent">{phase.timeframe}</p>
                        <h3 className="text-xl font-semibold">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="min-h-[96px] leading-7 text-muted-foreground">{phase.goal}</p>
                    <ul className="mt-5 space-y-3">
                      {phase.actions.map((action) => (
                        <li key={action} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {action}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 rounded-lg border border-border bg-background p-4 text-sm leading-6">
                      <span className="font-semibold">Progress measure: </span>
                      {phase.measure}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="print-section">
              <SectionHeader id="cv" eyebrow="04 / Curriculum Vitae" title="Embedded CV" />
              <div className="cv-grid grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <aside className="rounded-lg border border-border bg-foreground p-6 text-background">
                  <div className="flex items-center gap-4">
                    <img
                      src={assetUrl('profile.jpeg')}
                      alt=""
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold">{content.owner.name}</h3>
                      <p className="text-sm text-background/70">{content.owner.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 leading-7 text-background/80">{content.cv.profile}</p>
                  <div className="mt-6 grid gap-3 text-sm text-background/80">
                    <a href={`mailto:${content.owner.email}`} className="flex items-center gap-3">
                      <Mail className="h-4 w-4" />
                      {content.owner.email}
                    </a>
                    <a href={`tel:${content.owner.phone.replace(/\s/g, '')}`} className="flex items-center gap-3">
                      <Phone className="h-4 w-4" />
                      {content.owner.phone}
                    </a>
                    <p className="flex items-center gap-3">
                      <MapPin className="h-4 w-4" />
                      {content.owner.location}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="mb-4 flex items-center gap-3">
                      <BriefcaseBusiness className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Skills</h3>
                    </div>
                    <div className="grid gap-5">
                      {content.cv.skillGroups.map((group) => (
                        <div key={group.title}>
                          <p className="text-sm font-semibold uppercase tracking-wide text-background/70">{group.title}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <span
                                key={item}
                                className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-background/85"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>

                <div className="grid gap-5">
                  <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-semibold">Education</h3>
                    </div>
                    {content.cv.education.map((item) => (
                      <CvBlock key={item.title} item={item} />
                    ))}
                  </article>

                  <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <Code2 className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-semibold">Projects and Practice</h3>
                    </div>
                    <div className="grid gap-5">
                      {content.cv.projects.map((item) => (
                        <CvBlock key={item.title} item={item} />
                      ))}
                    </div>
                  </article>

                  <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <BriefcaseBusiness className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-semibold">Work Experience</h3>
                    </div>
                    <div className="grid gap-4">
                      {content.cv.workExperience.map((item) => (
                        <div key={`${item.title}-${item.meta}`} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                            </div>
                            {item.meta ? (
                              <span className="w-fit rounded-md bg-muted px-3 py-1 text-xs font-semibold uppercase text-muted-foreground">
                                {item.meta}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>

                </div>
              </div>
            </section>

            <section className="print-section">
              <SectionHeader id="certificates" eyebrow="05 / Certificates" title="Certificates and Skill Evidence" />
              <div className="grid gap-6">
                {content.certificates.map((certificate) => (
                  <article
                    key={certificate.title}
                    className={`certificate-card grid gap-6 rounded-lg border bg-card p-4 shadow-sm lg:grid-cols-[1fr_360px] ${certificate.priority === 'primary' ? 'border-primary' : 'border-border'
                      }`}
                  >
                    <div className="overflow-hidden rounded-lg border border-border bg-background">
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        className="h-full max-h-[420px] w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-2">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Award className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-semibold uppercase text-accent">
                        {certificate.priority === 'primary' ? 'Priority evidence' : 'Supporting evidence'}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold">{certificate.title}</h3>
                      <p className="mt-3 leading-7 text-muted-foreground">{certificate.provider}</p>
                      <div className="mt-5 grid gap-3 text-sm">
                        <p className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-accent" />
                          Issued {certificate.issued}
                        </p>
                        <p className="flex items-start gap-3 leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                          Improved skill: {certificate.skillImproved}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}

                <article className="screen-aws-slider rounded-lg border border-border bg-card p-6 shadow-sm">
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase text-accent">AWS Certificates</p>
                      <h3 className="mt-2 text-2xl font-semibold">AWS Certificate</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={showPreviousAwsCertificate}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition hover:border-accent hover:text-accent"
                        aria-label="Previous AWS certificate"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextAwsCertificate}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition hover:border-accent hover:text-accent"
                        aria-label="Next AWS certificate"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg border border-border bg-background">
                    <img
                      src={currentAwsCertificate.image}
                      alt={currentAwsCertificate.title}
                      className="h-full max-h-[520px] w-full object-contain"
                    />
                  </div>

                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-medium text-muted-foreground">
                      {currentAwsCertificate.title} ({activeAwsCertificate + 1}/{awsCertificates.length})
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {awsCertificates.map((certificate, index) => (
                        <button
                          key={certificate.title}
                          type="button"
                          onClick={() => setActiveAwsCertificate(index)}
                          className={`h-2.5 w-8 rounded-full transition ${index === activeAwsCertificate ? 'bg-accent' : 'bg-border hover:bg-muted-foreground/40'
                            }`}
                          aria-label={`Show ${certificate.title}`}
                        />
                      ))}
                    </div>
                  </div>
                </article>

                <article className="print-aws-grid hidden rounded-lg border border-border bg-card p-6 shadow-sm">
                  <div className="mb-6">
                    <p className="text-sm font-semibold uppercase text-accent">AWS Certificates</p>
                    <h3 className="mt-2 text-2xl font-semibold">AWS Certificates</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {awsCertificates.map((certificate) => (
                      <figure key={certificate.title} className="rounded-lg border border-border bg-background p-3">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full object-contain"
                        />
                        <figcaption className="mt-2 text-sm font-medium text-muted-foreground">{certificate.title}</figcaption>
                      </figure>
                    ))}
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            <span className="font-semibold text-foreground">{content.owner.name}</span> | {content.owner.role}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={content.owner.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
              GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={content.owner.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
              LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CvBlock({ item }: { item: { title: string; subtitle: string; meta: string; points: string[] } }) {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
        </div>
        {item.meta ? (
          <span className="w-fit rounded-md bg-muted px-3 py-1 text-xs font-semibold uppercase text-muted-foreground">
            {item.meta}
          </span>
        ) : null}
      </div>
      <ul className="mt-3 grid gap-2">
        {item.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
