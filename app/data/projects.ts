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
    images: [
      "/netbank/login.png",
      "/netbank/admin.png",
      "/netbank/users.png",
      "/netbank/user.png",
      "/netbank/client.png",
      "/netbank/bene.png",
      "/netbank/advance.png",
    ],
    title: "NetBank - Tu socio financiero digital",
    description:
      "Descubre NetBank, la plataforma web revolucionaria para una banca digital segura e intuitiva. Gestiona tus finanzas, accede a servicios personalizados y disfruta de la experiencia bancaria del futuro.",
    tecnologies: ["C#", ".NET", "MSSQL", "Razor"],
    github: "https://github.com/engelsgermosen/NetBank",
  },

  {
    id: 2,
    images: [
      "/egShop/home.png",
      "/egShop/by.png",
      "/egShop/product.png",
      "/egShop/cart.png",
      "/egShop/mobile.png",
      "/egShop/details.png",
      "/egShop/mobile-cart.png",
    ],
    title: "EGshop - Tienda de ropa online",
    description:
      "Tienda en linea con una api de pruebas que devuelve una lista de productos donde puedes filtrar por categoria, ordenar por precio y buscar por su descripcion.",
    tecnologies: ["React", "Tailwind"],
    liveUrl: "https://egshop.vercel.app/",
    github: "https://github.com/engelsgermosen/Shop",
  },
  {
    id: 3,
    images: [
      "/egMarket/home.png",
      "/egMarket/crytos.png",
      "/egMarket/by.png",
      "/egMarket/mobile.png",
      "/egMarket/mobile-by.png",
    ],
    title: "EGmarket - Mira las 100 criptomonedas mas importantes",
    description:
      "Pagina web para ver las 100 criptomonedas mas importantes del mercado, con su respectivo precio, capitalizacion de mercado y volumen de 24 horas.",
    tecnologies: ["React", "Tailwind"],
    github: "https://github.com/engelsgermosen/CriptoApp",
    liveUrl: "https://egmarket.vercel.app/",
  },
];
