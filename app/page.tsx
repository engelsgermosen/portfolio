import Contact from "@/components/contact";
import Footer from "@/components/footer";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
