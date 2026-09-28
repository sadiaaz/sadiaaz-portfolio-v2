import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profile.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-12 px-6 py-20 md:flex-row"
    >
      {/* Left Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">

        {/* Intro */}
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-primary">
            Full-Stack Software Engineer
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-6xl">
            Hi, I'm{" "}
            <span className="text-primary">
              Sadia Saad
            </span>
          </h1>
        </div>

        {/* Tech Stack */}
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 md:text-2xl">
          Laravel · Next.js · React · TypeScript
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          I build modern, scalable web applications and backend systems
          that turn real-world requirements into reliable software.
          My work focuses on clean architecture, secure APIs,
          responsive interfaces, and maintainable solutions.
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
          {["Laravel", "Next.js", "React", "TypeScript", "MySQL"].map(
            (technology) => (
              <span
                key={technology}
                className="
                  border
                  border-primary/25
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-primary-dark
                  dark:border-primary/30
                  dark:text-[#d9a5c0]
                "
              >
                {technology}
              </span>
            )
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">

          {/* Projects */}
          <Link
            href="#projects"
            className="
              bg-primary
              px-7
              py-3
              font-semibold
              text-white
              shadow-sm
              transition
              duration-300
              hover:bg-primary-dark
            "
          >
            View Projects →
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/sadiasaad1010/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border
              border-primary-dark/25
              px-7
              py-3
              font-semibold
              text-primary-dark
              transition
              duration-300
              hover:border-primary-dark
              hover:bg-primary-dark
              hover:text-white
              dark:border-white/15
              dark:text-gray-300
              dark:hover:border-primary
              dark:hover:bg-primary
            "
          >
            LinkedIn
          </Link>

          {/* Email */}
          <Link
            href="mailto:sadiasaad1311@gmail.com"
            className="
              border
              border-primary
              px-7
              py-3
              font-semibold
              text-primary
              transition
              duration-300
              hover:bg-primary
              hover:text-white
            "
          >
            Email Me
          </Link>
        </div>

        {/* Professional Identity */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-3 text-sm text-gray-500 dark:text-gray-400 md:justify-start">
          <span>Software Engineering Student</span>

          <span className="hidden sm:inline">•</span>

          <span>Full-Stack Developer</span>

          <span className="hidden sm:inline">•</span>

          <span>Technical Lead</span>
        </div>
      </div>

      {/* Right Visual */}
      <div className="flex flex-1 justify-center">
        <div className="relative h-72 w-72 md:h-96 md:w-96">

          {/* Soft Glow */}
          <div className="absolute inset-4 rounded-full bg-primary/20 blur-3xl" />

          {/* Accent Background */}
          <div className="absolute inset-0 rotate-6 rounded-3xl bg-gradient-to-tr from-primary-dark to-primary opacity-80" />

          {/* Main Image */}
          <div className="relative h-full w-full -rotate-2 overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl transition-transform duration-300 hover:rotate-0">
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