"use client";
import { projectProps, Projects } from "@/app/data/projects";
import ProjectDetails from "@/components/project-details";
import { useTranslation } from "@/components/language-provider";
import { notFound, useParams } from "next/navigation";

const Project = () => {
  const { id } = useParams();
  const { locale } = useTranslation();

  const project: projectProps | undefined = Projects.find(
    (x) => x.id == Number(id)
  );

  if (!project) return notFound();

  return (
    <ProjectDetails
      id={project.id}
      description={project.description[locale]}
      title={project.title[locale]}
      tecnologies={project.tecnologies}
      images={project.images}
      github={project.github}
      liveUrl={project.liveUrl}
    />
  );
};

export default Project;
