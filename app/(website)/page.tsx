import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
     <>
   <Hero />
    <Skills />
    <Certifications />
    
        <Experience />

    <Projects />
    
</>
      );
}
