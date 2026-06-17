"use client";

import {
  Award,
  ExternalLink,
  Calendar,
  FileCheck,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { certifications } from "@/app/data/certifications";
import { useState } from "react";
import { useTranslation } from "./language-provider";
import SectionHeading from "./section-heading";
import type { Locale } from "@/i18n/dictionaries";
import type { ICertification } from "@/app/data/certifications";

const CertCard = ({
  cert,
  locale,
  labels,
}: {
  cert: ICertification;
  locale: Locale;
  labels: { completed: string; viewDiploma: string; viewCertificate: string };
}) => (
  <div className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-[26px] transition-all duration-200 hover:-translate-y-[3px] hover:border-primary">
    <div className="flex items-start gap-[18px]">
      <div className="grid size-[46px] shrink-0 place-items-center rounded-xl border border-border bg-[var(--accent-soft)] text-primary">
        <Award className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[0.68rem] font-semibold text-primary">
          <span className="text-[0.6rem] leading-none">●</span>
          {labels.completed}
        </div>
        <h3 className="font-display text-[1.12rem] font-semibold leading-snug text-foreground line-clamp-2 transition-colors group-hover:text-primary">
          {cert.title[locale]}
        </h3>
        <div className="mt-1.5 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <FileCheck className="h-4 w-4 shrink-0 text-primary" />
          <span className="truncate">{cert.issuer}</span>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-2 text-sm text-[var(--text-faint)]">
      <Calendar className="h-4 w-4" />
      <span>{cert.date[locale]}</span>
    </div>

    {cert.skills && cert.skills.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {cert.skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-medium text-primary"
          >
            {skill[locale]}
          </span>
        ))}
      </div>
    )}

    <Link
      href={cert.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-[var(--surface-2)] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {labels.viewDiploma}
      <ExternalLink className="h-3.5 w-3.5" />
    </Link>
  </div>
);

const Certifications = () => {
  const { t, locale } = useTranslation();
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [showAllDesktop, setShowAllDesktop] = useState(false);

  const mobileCerts = showAllMobile ? certifications : certifications.slice(0, 5);
  const desktopCerts = showAllDesktop
    ? certifications
    : certifications.slice(0, 10);
  const hasMoreMobile = certifications.length > 5;
  const hasMoreDesktop = certifications.length > 10;

  const labels = {
    completed: t.certifications.completed,
    viewDiploma: t.certifications.viewDiploma,
    viewCertificate: t.certifications.viewCertificate,
  };

  return (
    <section
      id="certifications"
      className="mx-auto max-w-[1160px] px-6 py-[clamp(56px,9vw,108px)]"
    >
      <SectionHeading
        number="04"
        eyebrow={t.certifications.eyebrow}
        title={t.certifications.tagline}
      />

      {/* Mobile */}
      <div className="grid grid-cols-1 gap-5 md:hidden">
        {mobileCerts.map((cert) => (
          <CertCard key={cert.id} cert={cert} locale={locale} labels={labels} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {desktopCerts.map((cert) => (
          <CertCard key={cert.id} cert={cert} locale={locale} labels={labels} />
        ))}
      </div>

      {/* Show more / less — desktop */}
      {hasMoreDesktop && (
        <div className="mt-8 hidden text-center md:block">
          <button
            onClick={() => setShowAllDesktop(!showAllDesktop)}
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            {showAllDesktop
              ? t.certifications.showLess
              : t.certifications.showMore}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showAllDesktop ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            />
          </button>
        </div>
      )}

      {/* Show more / less — mobile */}
      {hasMoreMobile && (
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            {showAllMobile
              ? t.certifications.showLess
              : t.certifications.showMore}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showAllMobile ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            />
          </button>
        </div>
      )}

      {/* Total */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          {t.certifications.total}{" "}
          <span className="font-mono text-xl font-bold text-primary">
            {certifications.length}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Certifications;
