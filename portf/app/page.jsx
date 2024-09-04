/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BcUVZ7YWTa8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">John Doe s Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center relative" style={{ backgroundImage: 'url(/wall.jpg)' }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
          Crafting Data-Driven Insights
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl text-white">
          Hi, I &apos; m Anjana Wickramasinghe, a passionate data scientist with a proven track record of uncovering valuable 
          insights and building impactful data-driven solutions.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            href="#project"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full max-w-[400px] h-[400px] overflow-hidden rounded-xl">
          <img src="/profile.jpg" alt="Profile" />
        </div>
      </div>
    </div>
  </div>
</section>
                              
                                                



        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of my recent web development projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="group grid gap-4">
                <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
                  <img
                    src="/sample1.jpg"
                    width="550"
                    height="200"
                    alt="Project 1"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">E-commerce Website</h3>
                  <p className="text-muted-foreground">
                    A modern and responsive e-commerce website with a seamless shopping experience.
                  </p>
                </div>
              </div>
              <div className="group grid gap-4">
                <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
                  <img
                    src="/sample2.jpg"
                    width="550"
                    height="200"
                    alt="Project 2"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Portfolio Website</h3>
                  <p className="text-muted-foreground">
                    A visually stunning portfolio website showcasing my design and development skills.
                  </p>
                </div>
              </div>
              <div className="group grid gap-4">
                <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
                  <img
                    src="/sample3.jpg"
                    width="550"
                    height="200"
                    alt="Project 3"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">SaaS Landing Page</h3>
                  <p className="text-muted-foreground">
                    A modern and visually appealing landing page for a SaaS product.
                  </p>
                </div>
              </div>
              <div className="group grid gap-4">
                <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
                  <img
                    src="/sample4.jpg"
                    width="550"
                    height="200"
                    alt="Project 4"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Blog Website</h3>
                  <p className="text-muted-foreground">
                    A responsive and user-friendly blog website with a modern design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>





        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I &apos;m proficient in a wide range of web development and Data Sciense tools.
                </p>
              </div>
            </div>
            


            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">

            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    src="/jupyter.svg"
                    width="100"
                    height="100"
                    alt="javascript"
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Jupyter Notebook</h3>
                  <p className="text-muted-foreground">Proficient in creating and managing interactive data analysis and visualization notebooks using Jupyter.</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    src="/anaconda.svg"
                    width="100"
                    height="100"
                    alt="nodejs"
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Anaconda</h3>
                  <p className="text-muted-foreground">
                  Skilled in utilizing Anaconda for managing Python environments and packages, streamlining data science workflows.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    src="/power.svg"
                    width="100"
                    height="100"
                    alt="react"
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Power BI</h3>
                  <p className="text-muted-foreground">
                  Experienced in creating insightful and interactive business intelligence reports and dashboards using Power BI.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    src="/javascript.svg"
                    width="100"
                    height="100"
                    alt="javascript"
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">JavaScript</h3>
                  <p className="text-muted-foreground">Proficient in writing clean and efficient JavaScript code</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    src="/node.svg"
                    width="100"
                    height="100"
                    alt="nodejs"
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Node.js</h3>
                  <p className="text-muted-foreground">
                  Skilled in building server-side applications using Node.js
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    src="/react.svg"
                    width="100"
                    height="100"
                    alt="react"
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">React</h3>
                  <p className="text-muted-foreground">
                  Experienced in developing interactive user interfaces with React
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    src="/python.svg"
                    width="100"
                    height="100"
                    alt="python"
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Python</h3>
                  <p className="text-muted-foreground">
                  Skilled in writing versatile and high-performance Python scripts
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    src="/kotlin.svg"
                    width="100"
                    height="100"
                    alt="kotlin"
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Kotlin</h3>
                  <p className="text-muted-foreground">Proficient in developing Android applications using Kotlin</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    src="/firebase.svg"
                    width="100"
                    height="100"
                    alt="firebase"
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">FireBase</h3>
                  <p className="text-muted-foreground">Competent in utilizing Firebase for backend services and real-time database management</p>
                </div>
              </div>
            </div>
          </div>
        </section>





        <section id="about"className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a dedicated <b>Data Science </b>enthusiast with over 4 years of experience in the tech industry. My journey began as a 
                passionate <b>web developer</b>, where I specialized in creating visually stunning and highly functional websites. My expertise
                 spanned a wide range of technologies, including Python, Firebase, Kotlin, JavaScript, React, and Node.js.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
                <img
                  src="/p2.png"
                  width="550"
                  height="300"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Background</h3>
                  <p className="text-muted-foreground">
                  Currently, I am a 3rd-year student at SLIIT, specializing in IT. Throughout my academic journey, I have completed four
                   university projects with commendable marks and also taken on <b>individual projects for small companies</b>. These experiences 
                   have allowed me to hone my skills, expanding my expertise across diverse projects and gaining valuable insights into the field
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Approach</h3>
                  <p className="text-muted-foreground">
                  In my early career, I adopted a collaborative and iterative approach to web development, working closely with clients to 
                  understand their needs and deliver solutions that exceeded their expectations. This same approach now drives my work in Data Science.
                   I am always eager to learn and stay up-to-date with the latest trends and technologies, including<b> Pandas, Power BI,</b> 
                   and <b>Jupyter Notebook</b>, which I use to transform raw data into actionable insights.
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </section>





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
      <div className="flex flex-col items-center space-y-4 text-center">
        <img
          src="/profile.jpg"
          width="150"
          height="150"
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full"
        />
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Anjana Indunil</h3>
          <p className="text-muted-foreground">Email: anjanaindu3699@gmail.com.com</p>
          <p className="text-muted-foreground">Mobile: +94 71 24 12 634</p>
        </div>
      </div>
      <div className="w-full space-y-4">
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="topic" className="text-sm font-medium">Topic</label>
            <input
              type="text"
              id="topic"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Topic"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    <div className="mt-12 flex justify-center space-x-6">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80" />
      </a>
      <a href="https://www.linkedin.com/in/anjana2k02/" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
      </a>
      <a href="https://github.com/Anjana2k02" target="_blank" rel="noopener noreferrer">
        <img src="/github-icon.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
      </a>
    </div>
    <div className="mt-8 text-center text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} Anjana Indunil. All rights reserved.
    </div>
  </div>
</section>


      </main>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}