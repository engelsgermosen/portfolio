"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { projectProps, Projects } from "@/app/data/projects";

const ProjectDetails = ({
  id,
  images,
  description,
  title,
  github,
  liveUrl,
  tecnologies,
}: projectProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-5xl mx-auto mt-3 md:mt-6">
      <div className="overflow-hidden rounded-xl bg-card shadow-xl shadow-foreground/5">
        {/* Image Carousel */}
        <div className="relative aspect-video w-full overflow-hidden">
          <div className="relative h-full w-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 h-full w-full transition-opacity duration-500",
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={image || "/placeholder.svg?height=600&width=1200"}
                  alt={`Project image ${index + 1}`}
                  className="object-cover"
                  priority={index === 0}
                  height={600}
                  width={1200}
                  quality={100}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/30 text-foreground backdrop-blur-sm transition-all hover:bg-background/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/30 text-foreground backdrop-blur-sm transition-all hover:bg-background/50"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentImageIndex
                    ? "w-8 bg-primary"
                    : "bg-foreground/50 hover:bg-foreground/80"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-card-foreground">{title}</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {tecnologies.map((tech) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                <Code className="mr-1 h-3 w-3" />
                {tech}
              </motion.span>
            ))}
          </div>

          <p className="mt-4 text-muted-foreground">{description}</p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-secondary-foreground transition-all hover:border-primary/50 hover:bg-secondary/80"
              >
                <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                View Code
                <span className="ml-1 block h-1.5 w-1.5 rounded-full bg-primary"></span>
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground shadow-md shadow-primary/10 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <ExternalLink className="h-5 w-5 transition-transform group-hover:scale-110" />
                Live Demo
                <span className="ml-1 block h-1.5 w-1.5 rounded-full bg-primary-foreground"></span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
