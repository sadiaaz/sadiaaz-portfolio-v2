
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
    role: "Founder / Full-Stack Developer",
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


];

export default function Projects() {
    return (
      
<section
    id="projects"
    className="py-20 px-6 bg-white dark:bg-gray-950"
>
    <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-blue-600 font-semibold tracking-widest uppercase mb-3">
                Selected Work
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Featured Projects
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
                A selection of applications and platforms I've built
                using modern web technologies and software engineering
                practices.
            </p>

        </div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project) => (
                <article
                    key={project.title}
                    className="group flex flex-col border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >

                    {/* Project Header */}
                    <div className="relative h-44 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center overflow-hidden">

                        <div className="absolute inset-0 bg-black/10" />

                        <div className="relative text-center px-6">

                            <span className="text-blue-100 text-xs font-semibold uppercase tracking-widest">
                                {project.category}
                            </span>

                            <h3 className="mt-2 text-2xl font-bold text-white">
                                {project.title}
                            </h3>

                        </div>

                    </div>


                    {/* Project Content */}
                    <div className="flex flex-col flex-1 p-6">

                        {/* Role */}
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                            {project.role}
                        </p>


                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 leading-7">
                            {project.description}
                        </p>


                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-5">

                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="px-2.5 py-1 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium"
                                >
                                    {technology}
                                </span>
                            ))}

                        </div>


                        {/* Live Demo */}
                        <div className="mt-auto pt-6">

                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                            >
                                View Project →
                            </Link>

                        </div>

                    </div>

                </article>
            ))}

        </div>

    </div>
</section>


    );
}

