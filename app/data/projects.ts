import type { Localized } from "@/i18n/dictionaries";

export interface projectProps {
  id: number;
  title: Localized;
  images: string[];
  description: Localized;
  github?: string;
  liveUrl?: string;
  tecnologies: string[];
}

export const Projects: projectProps[] = [
  {
    id: 0,
    images: [
      "/rappix/rappix_portada.png",
      "/rappix/rappix_architecture_v5.png",
      "/rappix/rappix_docker_ps.png",
      "/rappix/rappix_orders_scalar.png",
      "/rappix/rappix_payments_scalar.png",
      "/rappix/rappix_rabbitMq.png",
      "/rappix/rappix_seq.png",
    ],
    title: {
      es: "Rappix — Plataforma de Delivery con Microservicios",
      en: "Rappix — Multi-Vertical Delivery Platform",
    },
    description: {
      es: "Backend de delivery multi-vertical (comida, farmacia, supermercado, paquetería) construido con arquitectura de microservicios en .NET 10. 9 servicios independientes orquestados con sagas, pagos con Stripe hold+capture, tracking en tiempo real con SignalR, geolocalización con PostGIS y API Gateway con YARP.",
      en: "Multi-vertical delivery backend (food, pharmacy, grocery, parcels) built with a microservices architecture on .NET 10. 9 independent services orchestrated with sagas, Stripe hold+capture payments, real-time tracking with SignalR, geolocation with PostGIS, and an API Gateway powered by YARP.",
    },
    tecnologies: [
      ".NET 10",
      "Docker",
      "RabbitMQ",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "SignalR",
      "YARP",
      "gRPC",
      "Next.js 15",
    ],
    github: "https://github.com/engelsgermosen/Rappix",
  },
  {
    id: 1,
    images: ["/microcommerce/architecture.png", "/microcommerce/docker.png"],
    title: {
      es: "MicroCommerce - Plataforma E-Commerce con Microservicios",
      en: "MicroCommerce - Microservices E-Commerce Platform",
    },
    description: {
      es: "Backend de e-commerce construido con arquitectura de microservicios en .NET 10. 9 servicios independientes comunicados via RabbitMQ, con bases de datos dedicadas por servicio (SQL Server, PostgreSQL, MongoDB, Redis), pagos con Stripe, emails con SendGrid y API Gateway con YARP.",
      en: "E-commerce backend built with a microservices architecture on .NET 10. 9 independent services communicating via RabbitMQ, with dedicated databases per service (SQL Server, PostgreSQL, MongoDB, Redis), payments with Stripe, emails with SendGrid and an API Gateway with YARP.",
    },
    tecnologies: [
      ".NET 10",
      "Docker",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Stripe",
      "YARP",
    ],
    github: "https://github.com/engelsgermosen/microservices-app",
  },
  {
    id: 2,
    images: [
      "/netbank/login.png",
      "/netbank/admin.png",
      "/netbank/users.png",
      "/netbank/user.png",
      "/netbank/client.png",
      "/netbank/bene.png",
      "/netbank/advance.png",
    ],
    title: {
      es: "NetBank - Tu socio financiero digital",
      en: "NetBank - Your digital financial partner",
    },
    description: {
      es: "Descubre NetBank, la plataforma web revolucionaria para una banca digital segura e intuitiva. Gestiona tus finanzas, accede a servicios personalizados y disfruta de la experiencia bancaria del futuro.",
      en: "Discover NetBank, the revolutionary web platform for secure and intuitive digital banking. Manage your finances, access personalized services and enjoy the banking experience of the future.",
    },
    tecnologies: ["C#", ".NET", "MSSQL", "Razor"],
    github: "https://github.com/engelsgermosen/NetBank",
  },

  {
    id: 3,
    images: [
      "/egShop/home.png",
      "/egShop/by.png",
      "/egShop/product.png",
      "/egShop/cart.png",
      "/egShop/mobile.png",
      "/egShop/details.png",
      "/egShop/mobile-cart.png",
    ],
    title: {
      es: "EGshop - Tienda de ropa online",
      en: "EGshop - Online clothing store",
    },
    description: {
      es: "Tienda en linea con una api de pruebas que devuelve una lista de productos donde puedes filtrar por categoria, ordenar por precio y buscar por su descripcion.",
      en: "Online store using a test API that returns a list of products where you can filter by category, sort by price and search by description.",
    },
    tecnologies: ["React", "Tailwind"],
    liveUrl: "https://egshop.vercel.app/",
    github: "https://github.com/engelsgermosen/Shop",
  },
  {
    id: 4,
    images: [
      "/egMarket/home.png",
      "/egMarket/crytos.png",
      "/egMarket/by.png",
      "/egMarket/mobile.png",
      "/egMarket/mobile-by.png",
    ],
    title: {
      es: "EGmarket - Mira las 100 criptomonedas mas importantes",
      en: "EGmarket - Track the top 100 cryptocurrencies",
    },
    description: {
      es: "Pagina web para ver las 100 criptomonedas mas importantes del mercado, con su respectivo precio, capitalizacion de mercado y volumen de 24 horas.",
      en: "Web page to view the top 100 cryptocurrencies on the market, with their respective price, market capitalization and 24-hour volume.",
    },
    tecnologies: ["React", "Tailwind"],
    github: "https://github.com/engelsgermosen/CriptoApp",
    liveUrl: "https://egmarket.vercel.app/",
  },
];
