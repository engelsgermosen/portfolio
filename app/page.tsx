import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
