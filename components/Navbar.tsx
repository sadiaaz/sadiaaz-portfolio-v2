import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home", icon: "H" },
  { label: "Skills", href: "#skills", icon: "S" },
  { label: "Projects", href: "#projects", icon: "P" },
  { label: "Experience", href: "#experience", icon: "E" },
  { label: "Certifications", href: "#certifications", icon: "C" },
  { label: "Contact", href: "#contact", icon: "✉" },
];

export default function Navbar() {
  return (
    <>
      {/* Desktop Vertical Navigation */}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[64px] border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:flex">
        <div className="flex h-full w-full flex-col items-center">

          {/* Logo */}
          <Link
            href="#home"
            aria-label="Sadia Saad"
            className="mt-5 flex h-10 w-10 items-center justify-center"
          >
            <Image
              src="/logo.jpg"
              alt="Sadia Saad"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="mt-20 flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="group relative flex h-8 w-8 items-center justify-center"
              >
                {/* Icon / Letter */}
                <span className="text-[10px] font-bold text-slate-500 transition-colors group-hover:text-primary dark:text-slate-400 dark:group-hover:text-primary">
                  {item.icon}
                </span>

                {/* Hover Label */}
                <span className="pointer-events-none absolute left-10 whitespace-nowrap rounded-md bg-primary px-2.5 py-1.5 text-[10px] font-medium text-white opacity-0 shadow-sm transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom Email */}
          <Link
            href="mailto:sadiasaad1311@gmail.com"
            aria-label="Email"
            className="
              mb-5
              mt-auto
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              border
              border-primary/20
              text-xs
              text-primary-dark
              transition
              hover:border-primary
              hover:bg-primary
              hover:text-white
              dark:border-primary/20
              dark:text-[#d9a5c0]
              dark:hover:border-primary
              dark:hover:bg-primary
              dark:hover:text-white
            "
          >
            ↗
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 md:hidden">

        {/* Mobile Logo */}
        <Link
          href="#home"
          aria-label="Sadia Saad"
          className="flex items-center"
        >
          <Image
            src="/logo.jpg"
            alt="Sadia Saad"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
            priority
          />
        </Link>

        {/* Contact */}
        <Link
          href="#contact"
          className="
            rounded-md
            border
            border-primary/20
            px-3
            py-2
            text-[10px]
            font-semibold
            text-primary-dark
            transition
            hover:border-primary
            hover:bg-primary
            hover:text-white
            dark:border-primary/20
            dark:text-[#d9a5c0]
            dark:hover:border-primary
            dark:hover:bg-primary
            dark:hover:text-white
          "
        >
          Contact
        </Link>
      </header>
    </>
  );
}