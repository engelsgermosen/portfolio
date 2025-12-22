"use client";

import {
  Award,
  ExternalLink,
  Calendar,
  FileCheck,
  ChevronDown,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { certifications } from "@/app/data/certifications";
import { useState } from "react";

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  // En mobile mostrar solo 5, en desktop todas
  const displayedCerts = showAll ? certifications : certifications.slice(0, 5);
  const hasMore = certifications.length > 5;

  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-2">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Certificaciones
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Formación continua y certificaciones que respaldan mis
              conocimientos en desarrollo de software
            </p>
          </div>
        </div>

        {/* Mobile: mostrar según el estado */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {displayedCerts.map((cert) => (
            <Card
              key={cert.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-muted hover:border-primary/50"
            >
              <div className="p-6 space-y-4">
                {/* Header con icono */}
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Ver certificado</span>
                    </Link>
                  </Button>
                </div>

                {/* Título y emisor */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    <p className="text-sm text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Fecha */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>

                {/* Skills */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Botón de verificación */}
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full mt-4"
                >
                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver diploma completo
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop: mostrar todas */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-muted hover:border-primary/50"
            >
              <div className="p-6 space-y-4">
                {/* Header con icono */}
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Ver certificado</span>
                    </Link>
                  </Button>
                </div>

                {/* Título y emisor */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    <p className="text-sm text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Fecha */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>

                {/* Skills */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Botón de verificación */}
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full mt-4"
                >
                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver diploma completo
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Botón Ver más - solo en mobile */}
        {hasMore && !showAll && (
          <div className="mt-8 text-center md:hidden">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="rounded-full group"
            >
              Ver más certificaciones
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        )}

        {/* Contador */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Total de certificaciones:{" "}
            <span className="font-bold text-primary text-xl">
              {certifications.length}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
