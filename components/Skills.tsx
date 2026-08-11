
export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            description: "Building responsive, modern, and user-focused interfaces.",
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
            description: "Developing structured backend systems and RESTful APIs.",
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
            description: "Designing and working with structured application data.",
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
            description: "Managing development workflows and production deployments.",
            skills: [
                "Git",
                "GitHub",
                "Vercel",
                "Postman",
                "Sanity CMS",
                "cPanel",
                "Hostinger",
               
            ],
        },
        {
            title: "Software Engineering",
            description: "Applying engineering principles to build maintainable software.",
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
    className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
>
    <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-blue-600 font-semibold tracking-widest uppercase mb-3">
                Technical Expertise
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Skills & Technologies
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Technologies and engineering practices I use to design,
                develop, and deploy modern web applications.
            </p>

        </div>


        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {skillCategories.map((category) => (
                <div
                    key={category.title}
                    className="p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >

                    {/* Category Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {category.title}
                    </h3>


                    {/* Description */}
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 mb-5">
                        {category.description}
                    </p>


                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">

                        {category.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2.5 py-1 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium"
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

