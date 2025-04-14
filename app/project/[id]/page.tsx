"use client";
import { projectProps, Projects } from "@/app/data/projects";
import ProjectDetails from "@/components/project-details";
import { notFound, useParams } from "next/navigation";

const Project = () => {
  const { id } = useParams();

  const project: projectProps | undefined = Projects.find(
    (x) => x.id == Number(id)
  );

  if (!project) return notFound();

  return (
    <ProjectDetails
      id={project.id}
      description={project.description}
      title={project.title}
      tecnologies={project.tecnologies}
      images={project.images}
      github={project.github}
      liveUrl={project.liveUrl}
    />
  );
};

export default Project;
