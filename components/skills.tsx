import { Code, Server, Zap, Star } from "lucide-react";
import { Card } from "./ui/card";

const RatingStars = ({ level }: { level: number }) => {
  const max = 5;
  return (
    <div className="flex items-center gap-2" aria-hidden>
      <span className="sr-only">
        Nivel: {level} de {max}
      </span>
      <div className="text-yellow-400 text-lg">
        {Array.from({ length: max }).map((_, i) => (
          <span
            key={i}
            className={`inline-block ${
              i < level ? "opacity-100" : "opacity-30"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Stack principal",
      icon: <Star className="h-8 w-8 mb-3 text-primary" />,
      skills: [
        { name: "C# & .NET", level: 5 },
        { name: "React.js (Front)", level: 4 },
        { name: "Tailwind CSS", level: 5 },
        { name: "SQL Server", level: 5 },
      ],
    },
    {
      title: "Frontend",
      icon: <Code className="h-10 w-10 mb-4 text-primary" />,
      skills: [
        { name: "HTML5 & CSS3", level: 5 },
        { name: "JavaScript & TypeScript", level: 5 },
        { name: "React.js", level: 4 },
        { name: "Next.js", level: 3 },
        { name: "Tailwind CSS", level: 5 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-10 w-10 mb-4 text-primary" />,
      skills: [
        { name: "C# & .NET", level: 5 },
        { name: "Node.js & Express", level: 4 },
        { name: "NestJs", level: 3 },
        { name: "SQL Server & PostgreSQL", level: 4 },
        { name: "MongoDB", level: 3 },
        { name: "RESTful APIs", level: 5 },
      ],
    },
    {
      title: "Tools",
      icon: <Zap className="h-10 w-10 mb-4 text-primary" />,
      skills: [
        { name: "Git & GitHub", level: 4 },
        { name: "Docker", level: 3 },
        { name: "VS Code", level: 5 },
        { name: "Vercel", level: 4 },
        { name: "Terminal", level: 4 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl gradient-text">
            Habilidades
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Tecnologias y herramientas que utilizo para crear aplicaciones web
            modernas y eficientes. Más de 1.5 años desarrollando proyectos
            personales.
          </p>
        </div>

        {/* Primary card centered and smaller */}
        {(() => {
          const primary = categories.find((c) => c.title === "Stack principal");
          const others = categories.filter(
            (c) => c.title !== "Stack principal"
          );
          return (
            <>
              {primary && (
                <div className="mx-auto grid grid-cols-1 md:max-w-[60rem] items-center mt-8 justify-center">
                  <Card
                    className="text-center mx-auto w-full p-4 shadow-custom transition-all duration-300 border-0 bg-card/90 backdrop-blur-sm"
                    style={{ maxWidth: 720 }}
                  >
                    <div className="flex flex-col items-center">
                      {primary.icon}
                      <h3 className="text-lg font-bold mb-2">
                        {primary.title}
                      </h3>
                      <ul className="w-full space-y-2 text-left max-w-xl">
                        {primary.skills.map((skill: any, i: number) => (
                          <li
                            key={i}
                            className="flex items-center justify-between gap-4"
                          >
                            <div>
                              <span className="font-medium">{skill.name}</span>
                              <span className="sr-only">
                                {" "}
                                — Nivel: {skill.level} de 5
                              </span>
                            </div>
                            <RatingStars level={skill.level} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              )}

              {/* Three columns centered for the remaining categories */}
              <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 md:max-w-[80rem] mt-8 justify-center">
                {others.map((category, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 shadow-custom hover:shadow-custom-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center">
                      {category.icon}
                      <h3 className="text-xl font-bold mb-4">
                        {category.title}
                      </h3>
                      <ul className="w-full space-y-3 text-left">
                        {category.skills.map(
                          (skill: any, skillIndex: number) => (
                            <li
                              key={skillIndex}
                              className="flex items-center justify-between gap-4"
                            >
                              <div>
                                <span className="font-medium">
                                  {skill.name}
                                </span>
                                <span className="sr-only">
                                  {" "}
                                  — Nivel: {skill.level} de 5
                                </span>
                              </div>
                              <div className="flex items-center">
                                <RatingStars level={skill.level} />
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </section>
  );
};

export default Skills;
