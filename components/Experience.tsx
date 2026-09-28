const experiences = [
  {
    period: "2026 — Present",
    role: "Technical Lead",
    organization: "Youth Evolution Foundation (YEF)",
    type: "Volunteer / Project",
    description:
      "Leading the technical development of a modern organization website while coordinating frontend and backend development across the team.",
    responsibilities: [
      "Designed the overall frontend architecture and project structure",
      "Managed GitHub branches, merges, pull requests, and code reviews",
      "Worked with Next.js, TypeScript, Tailwind CSS, Sanity CMS, and Vercel",
      "Contributed to database and CMS schema planning",
      "Coordinated development tasks across frontend and backend contributors",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "GitHub",
      "Vercel",
    ],
  },

  {
    period: "2026 — Present",
    role: "Full-Stack Developer",
    organization: "Digital Tech (DT)",
    type: "Independent",
    description:
      "Building and managing digital solutions for businesses and organizations, with a focus on practical requirements, responsive interfaces, and maintainable web applications.",
    responsibilities: [
      "Developed full-stack web applications and business websites",
      "Worked with Laravel, PHP, React, JavaScript, and MySQL",
      "Designed responsive interfaces for different screen sizes",
      "Implemented backend functionality and database-driven features",
      "Managed deployment and project development workflows",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "JavaScript",
      "MySQL",
      "Tailwind CSS",
    ],
  },

  {
    period: "2025 — Present",
    role: "Part-Time Teacher",
    organization: "Teaching & Academic Work",
    type: "Part-Time",
    description:
      "Teaching students while continuing my studies and professional software development work.",
    responsibilities: [
      "Explained technical and academic concepts in a clear way",
      "Prepared lessons and practical exercises",
      "Supported students with problem-solving and programming concepts",
      "Developed communication, patience, and presentation skills",
    ],
    technologies: [
      "Programming Fundamentals",
      "Problem Solving",
      "Communication",
      "Teaching",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[var(--background)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            My Journey
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Experience & Leadership
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
            Practical experience building software, leading technical work,
            collaborating with teams, and solving real-world problems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="absolute left-[5px] top-2 hidden h-[calc(100%-8px)] w-px bg-gray-200 md:block dark:bg-white/10" />

          <div className="space-y-8 sm:space-y-10">

            {experiences.map((experience, index) => (
              <article
                key={`${experience.organization}-${index}`}
                className="relative md:grid md:grid-cols-[150px_1fr] md:gap-8"
              >

                {/* Desktop Date */}
                <div className="hidden pt-1.5 md:block">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {experience.period}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 hidden h-3 w-3 rounded-full bg-blue-600 md:block" />

                {/* Experience Card */}
                <div
                  className="
                    rounded-md
                    border border-black/5
                    bg-white
                    p-5
                    shadow-sm
                    transition
                    duration-300
                    hover:shadow-md
                    sm:p-6
                    dark:border-white/5
                    dark:bg-white/[0.025]
                  "
                >

                  {/* Mobile Date */}
                  <p className="mb-2 text-xs font-medium text-blue-600 sm:text-sm md:hidden dark:text-blue-400">
                    {experience.period}
                  </p>

                  {/* Header */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                        {experience.organization}
                      </p>
                    </div>

                    <span
                      className="
                        w-fit
                        rounded-full
                        bg-gray-100
                        px-2.5
                        py-1
                        text-[11px]
                        font-medium
                        text-gray-600
                        dark:bg-white/10
                        dark:text-gray-300
                      "
                    >
                      {experience.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
                      Responsibilities
                    </h4>

                    <ul className="mt-3 space-y-2">
                      {experience.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-5 text-gray-600 dark:text-gray-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          bg-gray-100
                          px-2.5
                          py-1
                          text-[11px]
                          font-medium
                          text-gray-700
                          dark:bg-white/5
                          dark:text-gray-300
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}