
import Link from "next/link";

const projects = [
  {
    title: "Chiller Fleet",
    category: "Business Website",
    description:
      "A responsive business website for Chiller Fleet, focused on refrigerated transport and chiller van rental services in Dubai and the UAE.",
    role: "Frontend Developer",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
    liveUrl: "https://chillerfleetwebsitee.vercel.app/",
    githubUrl: "#",
  },

  {
    title: "Digital Tech (DT)",
    category: "Digital Solutions",
    description:
      "A digital technology platform focused on delivering modern web solutions and digital services for businesses, combining technology, design, and practical business requirements.",
    role: "Full-Stack Developer",
    technologies: [
      "React",
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
    ],
    liveUrl: "http://digitaltechdt.com/",
    githubUrl: "YOUR_DIGITAL_TECH_GITHUB_URL",
  },

  {
    title: "CBLA Website",
    category: "Web Application",
    description:
      "A full-stack web application developed to support business operations through structured data management, web interfaces, and backend functionality.",
    role: "Full-Stack Developer",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
    liveUrl: "https://cbla.com.pk/",
    githubUrl: "YOUR_CBLA_GITHUB_URL",
  },

  {
    title: "Gessu Daraz Organics",
    category: "Student Project",
    description:
      "A responsive product website designed for Gessu Daraz Organics, featuring product information, benefits, ingredients, usage guidance, gallery content, and a dedicated order section.",
    role: "Frontend Developer",
    technologies: [
      "HTML",
      "CSS",
      "Responsive Design",
    ],
    liveUrl: "https://gessusherbaloil.vercel.app/",
    githubUrl: "https://github.com/sadiaaz/gessusherbaloil",
  },

  {
    title: "TSELA — The Spoken English Language Academy",
    category: "Education Platform",
    description:
      "Designed and developed a responsive frontend for an English language learning academy, including course sections, student login access, events, reviews, branch information, and mobile-friendly navigation.",
    role: "Frontend Developer",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "Owl Carousel",
      "AOS",
      "Responsive Design",
    ],
    liveUrl: "https://tsela.com.pk/",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50/70 px-4 py-20 text-slate-900 sm:px-6 lg:px-8 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Selected Work
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-400">
            A selection of applications and platforms I've built using modern
            web technologies and software engineering practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-md
                border
                border-slate-200/80
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/25
                hover:shadow-lg
                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-primary/30
              "
            >
              {/* Header */}
              <div className="relative px-5 pt-5">

                {/* Brand Accent */}
                <div className="mb-4 h-1 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-16" />

                {/* Category + Role */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>

                  <span className="text-[10px] text-slate-400">
                    {project.role}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">

                {/* Description */}
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-md
                        bg-primary/10
                        px-2.5
                        py-1
                        text-[10px]
                        font-medium
                        text-primary-dark
                        dark:bg-primary/10
                        dark:text-[#d9a5c0]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center gap-2 pt-6">

                  {/* View Project */}
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      rounded-md
                      bg-primary
                      px-4
                      py-2.5
                      text-xs
                      font-semibold
                      text-white
                      transition-colors
                      duration-200
                      hover:bg-primary-dark
                    "
                  >
                    View Project

                    <svg
                      className="ml-1.5 h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>

                  {/* GitHub */}
                  {project.githubUrl &&
                    project.githubUrl !== "#" &&
                    !project.githubUrl.startsWith("YOUR_") && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-md
                          border
                          border-primary/20
                          text-primary-dark
                          transition-colors
                          hover:border-primary
                          hover:bg-primary/10
                          dark:border-primary/20
                          dark:text-[#d9a5c0]
                          dark:hover:bg-primary/10
                        "
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608 0 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688.1.253-.446 1.272.098 2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                      </Link>
                    )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

