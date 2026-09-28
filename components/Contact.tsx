
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-muted px-4 py-16 text-gray-900 sm:px-6 sm:py-20 lg:px-8 lg:py-24 dark:text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Work Together
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base dark:text-gray-400">
            Have a project in mind, a software engineering opportunity,
            or simply want to connect? Feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Email */}
          <Link
            href="mailto:sadiasaad1311@gmail.com"
            className="
              group
              rounded-md
              border
              border-gray-200
              bg-white
              p-5
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
              hover:shadow-md
              dark:border-gray-800
              dark:bg-gray-900
              dark:hover:border-primary/40
            "
          >
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Email
            </p>

            <p className="mt-2 break-all text-sm font-semibold text-gray-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary-light">
              sadiasaad1311@gmail.com
            </p>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/sadiasaad1010/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-md
              border
              border-gray-200
              bg-white
              p-5
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
              hover:shadow-md
              dark:border-gray-800
              dark:bg-gray-900
              dark:hover:border-primary/40
            "
          >
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              LinkedIn
            </p>

            <p className="mt-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary-light">
              Connect on LinkedIn ↗
            </p>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/sadiaaz"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-md
              border
              border-gray-200
              bg-white
              p-5
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
              hover:shadow-md
              dark:border-gray-800
              dark:bg-gray-900
              dark:hover:border-primary/40
            "
          >
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              GitHub
            </p>

            <p className="mt-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary-light">
              github.com/sadiaaz ↗
            </p>
          </Link>

        </div>

        {/* Location */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Based in Karachi, Pakistan
          </p>
        </div>

      </div>
    </section>
  );
}

