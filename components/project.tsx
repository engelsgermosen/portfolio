import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

const projectos = [
  {
    id: 1,
    image: "/EGshop.png",
    title: "EGmarket - Mira las 100 criptomonedas mas importantes",
    text: "Pagina web para ver las 100 criptomonedas mas importantes del mercado, con su respectivo precio, capitalizacion de mercado y volumen de 24 horas.",
  },
  {
    id: 2,
    image: "/egMarket.png",
    title: "EGshop - Tienda de ropa online",
    text: "Tienda en linea con una api de pruebas que devuelve una lista de productos donde puedes filtrar por categoria, ordenar por precio y buscar por su descripcion.",
  },
  {
    id: 3,
    image: "/weatherApp.png",
    title: "WeatherApp - Aplicacion del clima",
    text: "Pagina web para ver el clima de cualquier ciudad del mundo, solo tienes que ingresar el nombre de la ciudad y listo.",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9c5bdb]/5 to-transparent pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl gradient-text">
            Projects
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Check out some of my recent work
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-8 md:grid-cols-2 md:max-w-[64rem] xl:grid-cols-3 mt-16">
          {projectos.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-custom hover:shadow-custom-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    alt={`${project.title}`}
                    className="aspect-video w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    height="225"
                    src={
                      project.image || "/placeholder.svg?height=400&width=600"
                    }
                    width="400"
                    quality={100}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 grow">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.text}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full group"
                >
                  <Link href="#" className="flex items-center justify-center">
                    More Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
