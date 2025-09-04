import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container flex flex-col items-center justify-around gap-4 md:flex-row mx-auto">
        <div className="flex items-center gap-2 md:items-start">
          <Link href="/" className="font-bold text-xl flex items-center">
            <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] text-transparent bg-clip-text animate-[gradient_8s_ease-in-out_infinite]">
              Engels<strong className="font-extrabold">DEV</strong>
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/engelsgermosen"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:mrengels2648@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
