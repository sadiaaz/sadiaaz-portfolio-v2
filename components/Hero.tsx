import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profile.png";

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 max-w-6xl mx-auto gap-8">
            {/* Left Text Content */}
            {/* Left Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                    <p className="text-blue-600 font-semibold tracking-widest uppercase mb-3">
                        Full-Stack Web Developer
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        Hi, I'm{" "}
                        <span className="text-blue-600">
                            Sadia Saad
                        </span>
                    </h1>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    Laravel • Next.js • React • TypeScript
                </h2>

                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl">
                    I build modern, scalable, and responsive web applications using
                    Laravel, Next.js, React, TypeScript, and MySQL. Passionate about
                    creating clean architecture, secure backend systems, and intuitive
                    user experiences that solve real business problems.
                </p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">

                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
                        Laravel
                    </span>

                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
                        Next.js
                    </span>

                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
                        React
                    </span>

                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
                        TypeScript
                    </span>

                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
                        MySQL
                    </span>

                </div>

                {/* <div className="flex flex-wrap gap-4 justify-center md:justify-start">

                    <Link
                        href="#projects"
                        className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        View Projects
                    </Link>

                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className="px-7 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Download Resume
                    </Link>

                    <Link
                        href="#contact"
                        className="px-7 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        Hire Me
                    </Link>

                </div>

                {/* <div className="grid grid-cols-3 gap-6 pt-8">

                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">10+</h3>
                        <p className="text-gray-500">Projects</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">5+</h3>
                        <p className="text-gray-500">Technologies</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">100%</h3>
                        <p className="text-gray-500">Responsive</p>
                    </div>

                </div> */} 

            </div>

            {/* Right Visual Image */}
            <div className="flex-1 flex justify-center">
                <div className="relative">

                    <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
                        <Image
                            src={profilePic}
                            alt="Sadia Saad"
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