import { MountainIcon } from './components/Icons';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactSection from './components/ContactSection';
import { assetUrl } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header/Navigation */}
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <a href="#" className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Anjana Indunil&apos;s Portfolio</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            href="#projects"
            className="text-sm font-medium hover:underline underline-offset-4 transition-all"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:underline underline-offset-4 transition-all"
          >
            Skills
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4 transition-all"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4 transition-all"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${assetUrl('wall.jpg')})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Crafting Data-Driven Insights
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-white">
                    Hi, I&apos;m Anjana Wickramasinghe, a passionate data scientist with a proven track record of uncovering valuable
                    insights and building impactful data-driven solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[400px] h-[400px] overflow-hidden rounded-xl">
                  <img src={assetUrl('profile.jpg')} alt="Profile photograph" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I am a dedicated <strong>Data Science</strong> enthusiast with over 4 years of experience in the tech industry.
                  My journey began as a passionate <strong>web developer</strong>, where I specialized in creating visually stunning
                  and highly functional websites. My expertise spans a wide range of technologies, including Python, Firebase, Kotlin,
                  JavaScript, React, and Node.js.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
                <img
                  src={assetUrl('p2.png')}
                  width="550"
                  height="300"
                  alt="Anjana working on data science projects"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Background</h3>
                  <p className="text-muted-foreground">
                    Currently, I am a 3rd-year student at SLIIT, specializing in IT. Throughout my academic journey, I have completed
                    four university projects with commendable marks and also taken on <strong>individual projects for small companies</strong>.
                    These experiences have allowed me to hone my skills, expanding my expertise across diverse projects and gaining valuable
                    insights into the field.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Approach</h3>
                  <p className="text-muted-foreground">
                    In my early career, I adopted a collaborative and iterative approach to web development, working closely with clients
                    to understand their needs and deliver solutions that exceeded their expectations. This same approach now drives my work
                    in Data Science. I am always eager to learn and stay up-to-date with the latest trends and technologies, including
                    <strong> Pandas, Power BI,</strong> and <strong> Jupyter Notebook</strong>, which I use to transform raw data into
                    actionable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}
