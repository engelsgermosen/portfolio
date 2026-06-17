"use client";
import React from "react";
import { useTranslation } from "./language-provider";

const About = () => {
  const { t } = useTranslation();

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
              <p>{t.about.intro}</p>

              <h4 className="mt-4 text-base font-semibold">
                {t.about.howWorkTitle}
              </h4>
              <ul>
                <li>{t.about.howWork1}</li>
                <li>{t.about.howWork2}</li>
                <li>{t.about.howWork3}</li>
              </ul>

              <h4 className="mt-4 text-base font-semibold">
                {t.about.educationTitle}
              </h4>
              <ul>
                <li>{t.about.education1}</li>
                <li>{t.about.education2}</li>
              </ul>

              <h4 className="mt-4 text-base font-semibold">
                {t.about.nowTitle}
              </h4>
              <p>{t.about.nowText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
