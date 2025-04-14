export interface projectProps {
  id: number;
  title: string;
  images: string[];
  description: string;
  github?: string;
  liveUrl?: string;
  tecnologies: string[];
}

export const Projects: projectProps[] = [
  {
    id: 1,
    images: ["/EGshop.png", "/egMarket.png"],
    title: "EGmarket - Mira las 100 criptomonedas mas importantes",
    description:
      "Pagina web para ver las 100 criptomonedas mas importantes del mercado, con su respectivo precio, capitalizacion de mercado y volumen de 24 horas.",
    tecnologies: ["React"],
    github: "https://google.com",
    liveUrl: "https://google.com",
  },
  {
    id: 2,
    images: ["/egMarket.png"],
    title: "EGshop - Tienda de ropa online",
    description:
      "Tienda en linea con una api de pruebas que devuelve una lista de productos donde puedes filtrar por categoria, ordenar por precio y buscar por su descripcion.",
    tecnologies: ["React"],
  },
  {
    id: 3,
    images: ["/weatherApp.png"],
    title: "WeatherApp - Aplicacion del clima",
    description:
      "Pagina web para ver el clima de cualquier ciudad del mundo, solo tienes que ingresar el nombre de la ciudad y listo.",
    tecnologies: ["React"],
  },
];
