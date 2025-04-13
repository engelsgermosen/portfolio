import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#9c5bdb]/15 to-transparent pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm <span className="gradient-name">Engels</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I'm a web developer passionate about creating beautiful and
                functional websites that deliver exceptional user experiences.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button asChild size="lg" className="rounded-full group">
                <Link href="#projects" className="flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="rounded-full gradient-border"
              >
                <Link href="/resume.pdf" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Link
                href="https://github.com/engelsgermosen"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:mrengels2648@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 md:-inset-2 rounded-full lg:rounded-3xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_ease-in-out_infinite] blur-md"></div>
              <div className="relative inline-block p-0.5 rounded-full lg:rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_ease-in-out_infinite] transition-all duration-500 hover:scale-105 group">
                <div className="overflow-hidden rounded-full lg:rounded-xl ring-1 ring-white/10 dark:ring-black/5">
                  <Image
                    src="/yo.jpeg"
                    alt="Engels"
                    quality={100}
                    width={500}
                    height={500}
                    className="rounded-full lg:rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
