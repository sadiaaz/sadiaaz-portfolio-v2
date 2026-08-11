import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profile.png";

export default function Hero() {
    return (

  
<section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 max-w-6xl mx-auto gap-12">

    {/* Left Content */}
    <div className="flex-1 space-y-6 text-center md:text-left">

        {/* Intro */}
        <div>
            <p className="text-blue-600 font-semibold tracking-widest uppercase mb-3">
                Full-Stack Software Engineer
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
                Hi, I'm{" "}
                <span className="text-blue-600">
                    Sadia Saad
                </span>
            </h1>
        </div>


        {/* Tech Stack */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Laravel · Next.js · React · TypeScript
        </h2>


        {/* Description */}
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl">
            I build modern, scalable web applications and backend systems
            that turn real-world requirements into reliable software.
            My work focuses on clean architecture, secure APIs,
            responsive interfaces, and maintainable solutions.
        </p>


        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">

            {["Laravel", "Next.js", "React", "TypeScript", "MySQL"].map(
                (technology) => (
                    <span
                        key={technology}
                        className="px-3 py-1.5 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium"
                    >
                        {technology}
                    </span>
                )
            )}

        </div>


        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">

            <Link
                href="#projects"
                className="px-7 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
                View Projects →
            </Link>

            <Link
                href="/resume.pdf"
                target="_blank"
                className="px-7 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
                Download Resume
            </Link>

        </div>


        {/* Professional Identity */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start pt-3 text-sm text-gray-500 dark:text-gray-400">

            <span>Software Engineering Student</span>

            <span className="hidden sm:inline">•</span>

            <span>Full-Stack Developer</span>

            <span className="hidden sm:inline">•</span>

            <span>Technical Lead</span>

        </div>

    </div>


    {/* Right Visual */}
    <div className="flex-1 flex justify-center">

        <div className="relative w-72 h-72 md:w-96 md:h-96">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>


            {/* Offset Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl rotate-6 opacity-80"></div>


            {/* Main Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-300">

                <Image
                    src={profilePic}
                    alt="Sadia Saad - Full-Stack Software Engineer"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                />

            </div>

        </div>

    </div>

</section>



    );
}