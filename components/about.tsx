"use client";
import { useTranslation } from "./language-provider";
import Reveal from "./reveal";

const About = () => {
  const { t } = useTranslation();

  const infoRows = [
    { label: t.about.info.locationLabel, value: t.about.info.locationValue },
    { label: t.about.info.focusLabel, value: t.about.info.focusValue },
    { label: t.about.info.levelLabel, value: t.about.info.levelValue },
    {
      label: t.about.info.languagesLabel,
      value: t.about.info.languagesValue,
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-[1160px] px-6 py-[clamp(56px,9vw,108px)]"
    >
      <Reveal className="grid items-start gap-[clamp(36px,6vw,72px)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {/* Left — prose */}
        <div>
          <div className="eyebrow mb-3.5">05 — {t.about.eyebrow}</div>
          <h2 className="mb-6 font-display text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.04] tracking-tight text-foreground">
            {t.about.tagline}
          </h2>

          <p className="mb-[18px] text-[1.05rem] leading-[1.74] text-muted-foreground">
            {t.about.intro}
          </p>

          <h4 className="mt-6 mb-2 font-display text-base font-semibold text-foreground">
            {t.about.howWorkTitle}
          </h4>
          <ul className="space-y-1.5">
            {[t.about.howWork1, t.about.howWork2, t.about.howWork3].map(
              (item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[0.98rem] leading-relaxed text-muted-foreground"
                >
                  <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>

          <h4 className="mt-6 mb-2 font-display text-base font-semibold text-foreground">
            {t.about.educationTitle}
          </h4>
          <ul className="space-y-1.5">
            {[t.about.education1, t.about.education2].map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-[0.98rem] leading-relaxed text-muted-foreground"
              >
                <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 mb-2 font-display text-base font-semibold text-foreground">
            {t.about.nowTitle}
          </h4>
          <p className="text-[0.98rem] leading-[1.74] text-muted-foreground">
            {t.about.nowText}
          </p>
        </div>

        {/* Right — info cards */}
        <div className="flex flex-col gap-3.5">
          {infoRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-3 rounded-[14px] border border-border bg-card p-5"
            >
              <span className="font-mono text-[0.8rem] text-[var(--text-faint)]">
                {row.label}
              </span>
              <span className="text-right font-medium text-foreground">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default About;
