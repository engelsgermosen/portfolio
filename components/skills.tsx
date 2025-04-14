import { Code, Server, Zap } from "lucide-react";
import { Card } from "./ui/card";

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl gradient-text">
            Skills
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Technologies and tools I work with
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 justify-center gap-8 md:grid-cols-3 md:max-w-[64rem]  mt-16">
          {[
            {
              title: "Frontend",
              icon: <Code className="h-10 w-10 mb-4 text-primary" />,
              skills: [
                "HTML5 & CSS3",
                "JavaScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
              ],
            },
            {
              title: "Backend",
              icon: <Server className="h-10 w-10 mb-4 text-primary" />,
              skills: ["C#", ".Net", "MongoDB", "MSSQL", "RESTful APIs"],
            },
            {
              title: "Tools",
              icon: <Zap className="h-10 w-10 mb-4 text-primary" />,
              skills: ["Git & GitHub", "VS Code", "Vercel", "Terminal"],
            },
          ].map((category, index) => (
            <Card
              key={index}
              className="text-center p-6 shadow-custom hover:shadow-custom-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                {category.icon}
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-muted-foreground text-xl"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
