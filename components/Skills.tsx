export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, modern, and user-focused interfaces.",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Developing structured backend systems and RESTful APIs.",
      skills: [
        "Laravel",
        "PHP",
        "REST APIs",
        "MVC",
        "JWT Authentication",
      ],
    },
    {
      title: "Database & Data",
      description:
        "Designing and working with structured application data.",
      skills: [
        "MySQL",
        "Database Design",
        "SQL",
        "Relationships",
        "CRUD Operations",
      ],
    },
    {
      title: "Tools & Deployment",
      description:
        "Managing development workflows and production deployments.",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Postman",
        "cPanel",
        "Hostinger",
      ],
    },
    {
      title: "Software Engineering",
      description:
        "Applying engineering principles to build maintainable software.",
      skills: [
        "Authentication",
        "Authorization",
        "API Design",
        "Responsive Design",
        "Clean Architecture",
        "Code Review",
        "Debugging",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-50 px-4 py-16 text-gray-900 sm:px-6 sm:py-20 lg:px-8 dark:bg-gray-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Technical Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base dark:text-gray-400">
            Technologies and engineering practices I use to design,
            develop, and deploy modern web applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                border
                border-gray-200
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-md
                dark:border-gray-800
                dark:bg-gray-900
                dark:hover:border-primary/40
              "
            >

              {/* Category Title */}
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>

              {/* Accent Line */}
              <div className="mb-3 h-0.5 w-8 bg-primary" />

              {/* Description */}
              <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {category.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      border
                      border-primary/20
                      px-2.5
                      py-1
                      text-[11px]
                      font-medium
                      text-primary-dark
                      transition-colors
                      hover:border-primary
                      hover:bg-primary
                      hover:text-white
                      dark:border-primary/30
                      dark:text-[#d9a5c0]
                      dark:hover:border-primary
                      dark:hover:bg-primary
                      dark:hover:text-white
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}