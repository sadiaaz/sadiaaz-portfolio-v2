// components/About.tsx
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getAboutData } from "@/sanity/lib/queries";

export default async function About() {
  const about = await getAboutData();

  if (!about) return null;

  return (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">{about.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {about.imageUrl && (
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={about.imageUrl}
              alt={about.title || "About image"}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="prose dark:prose-invert">
            {about.bio && <PortableText value={about.bio} />}
          </div>

          {about.skills && (
            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-2">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2">
                {about.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}