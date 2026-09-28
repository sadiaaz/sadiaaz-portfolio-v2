
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const certifications = [
  {
    title: "Building The Future: Young Innovators in Pakistan",
    issuer: "IEEE Ziauddin University Student Branch",
    date: "Issued Jul 2026",
    image: "/certificates/building-future.png",
  },
  {
    title: "Artificial Intelligence & Data Science",
    issuer: "S.M.I.T (Saylani Mass I.T Training)",
    date: "Issued May 2025 · Expired Dec 2025",
    credentialId: "SMIT/2025/AI/B8/408189",
    image: "/certificates/ai-data-science.jfif",
    expired: true,
  },
  {
    title: "Backend Development Internship Certificate",
    issuer: "Syntecxhub",
    date: "Issued Feb 2026",
    image: "/certificates/backend-development.jfif",
  },
  {
    title: "Google Advanced Data Analytics",
    issuer: "Coursera",
    credentialId: "C3D0WT4610V2",
    image: "/certificates/google-data-analytics.jfif",
  },
  
  {
    title: "Laravel Certificate",
    issuer: "WebEducatorz",
    date: "Issued Apr 2024",
    skills: ["Laravel"],
    image: "/certificates/laravel.jfif",
  },
  
];

export default function Certifications() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstCard = slider.querySelector<HTMLElement>("article");

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 20;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft + cardWidth + gap >= maxScroll - 10) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: cardWidth + gap,
        behavior: "smooth",
      });
    }
  };

  const scrollPrevious = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstCard = slider.querySelector<HTMLElement>("article");

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 20;

    if (slider.scrollLeft <= 10) {
      slider.scrollTo({
        left: slider.scrollWidth,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certifications"
      className="bg-[var(--background)] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-8">
          <span className="text-xs font-medium text-blue-600 sm:text-sm dark:text-blue-400">
            Credentials
          </span>

          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Licenses & Certifications
          </h2>

          <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm dark:text-gray-400">
            Certifications and professional learning that support my
            software engineering journey.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={scrollPrevious}
            aria-label="Previous certificates"
            className="
              flex h-8 w-8 items-center justify-center
              rounded-md
              border border-black/5
              bg-white
              text-sm text-gray-600
              transition hover:bg-blue-600 hover:text-white
              dark:border-white/5
              dark:bg-white/[0.03]
              dark:text-gray-300
            "
          >
            ←
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next certificates"
            className="
              flex h-8 w-8 items-center justify-center
              rounded-md
              border border-black/5
              bg-white
              text-sm text-gray-600
              transition hover:bg-blue-600 hover:text-white
              dark:border-white/5
              dark:bg-white/[0.03]
              dark:text-gray-300
            "
          >
            →
          </button>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={sliderRef}
          className="
            flex
            snap-x
            snap-mandatory
            gap-5
            overflow-x-auto
            scroll-smooth
            pb-2
            overscroll-x-contain
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {certifications.map((certificate) => (
            <article
              key={`${certificate.title}-${certificate.issuer}`}
              className="
                group
                w-[78%]
                shrink-0
                snap-start
                overflow-hidden
                rounded-lg
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-0.5
                hover:shadow-md
                sm:w-[42%]
                lg:w-[30%]
                dark:bg-white/[0.025]
              "
            >
              {/* Certificate Image */}
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-32 overflow-hidden bg-gray-100 sm:h-40 dark:bg-white/5">
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    fill
                    className="
                      object-contain
                      p-2
                      transition
                      duration-300
                      group-hover:scale-[1.02]
                    "
                    sizes="
                      (max-width: 640px) 78vw,
                      (max-width: 1024px) 42vw,
                      30vw
                    "
                  />

                  {/* Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/10">
                    <span className="rounded-md bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-gray-900 opacity-0 shadow-sm transition group-hover:opacity-100">
                      View ↗
                    </span>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="p-3 sm:p-4">

                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-xs font-semibold leading-4 text-gray-900 sm:text-sm dark:text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-1 line-clamp-1 text-[10px] font-medium text-blue-600 sm:text-xs dark:text-blue-400">
                      {certificate.issuer}
                    </p>
                  </div>

                  {certificate.expired && (
                    <span className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-[9px] text-gray-500 dark:bg-white/5 dark:text-gray-400">
                      Expired
                    </span>
                  )}
                </div>

                {certificate.date && (
                  <p className="mt-1.5 text-[9px] text-gray-500 sm:text-[10px]">
                    {certificate.date}
                  </p>
                )}

                {certificate.credentialId && (
                  <p className="mt-1 break-all text-[9px] leading-3.5 text-gray-400">
                    ID: {certificate.credentialId}
                  </p>
                )}

                {certificate.skills && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded
                          bg-gray-100
                          px-1.5
                          py-0.5
                          text-[8px]
                          font-medium
                          text-gray-600
                          dark:bg-white/5
                          dark:text-gray-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-2.5
                    inline-flex
                    text-[10px]
                    font-semibold
                    text-blue-600
                    transition
                    hover:text-blue-700
                    dark:text-blue-400
                  "
                >
                  View Certificate →
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-3 text-center text-[10px] text-gray-400">
          Swipe or use the arrows to explore
        </p>
      </div>
    </section>
  );
}

