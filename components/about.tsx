import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/20 to-transparent pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative mx-auto">
        <div className="flex flex-col justify-center items-center space-y-6 animate-fade-in">
          <div>
            <div className="max-w-[680px] mb-10">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="gradient-name">Engels Germosen</span>
              </h1>
            </div>
            <div className="max-w-[680px] text-muted-foreground md:text-lg prose prose-invert">
              <p>
                Desarrollador full-stack enfocado en convertir ideas en
                productos web mantenibles y rápidos. Me importan la arquitectura
                limpia, la DX y que cada detalle de la interfaz se sienta fluido
                y accesible.
              </p>

              <h4 className="mt-4 text-base font-semibold">Cómo trabajo</h4>
              <ul>
                <li>
                  Diseño de APIs claras y escalables con .NET/C# o
                  Node.js/JavaScript.
                </li>
                <li>Interfaces accesibles y performantes con React/Next.js.</li>
                <li>
                  Testing básico, control de versiones, CI/CD y documentación
                  útil.
                </li>
              </ul>

              <h4 className="mt-4 text-base font-semibold">Formación</h4>
              <ul>
                <li>Desarrollo de Software — ITLA (2023–2025).</li>
                <li>
                  Complemento con cursos de APIs REST, bases de datos SQL/NoSQL
                  y despliegue en la nube.
                </li>
              </ul>

              <h4 className="mt-4 text-base font-semibold">Ahora mismo</h4>
              <p>
                Profundizando en apps en tiempo real con WebSockets,
                optimización de rendimiento en Next.js (SSR/ISR) y patrones de
                arquitectura limpia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
