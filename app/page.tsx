import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Project />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}
