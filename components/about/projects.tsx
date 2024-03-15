import Link from "next/link";

import { ProjectCard } from "../projects/individual/project-card";
import ProjectType from "@/interfaces/project";

type Props = {
  allProjects: ProjectType[];
};

const projectList = ["website", "assembly_animation", "process_scheduling"];

export default function CoolProjects({ allProjects }: Props) {
  return (
    <section className="pb-10">
      <h1 className="text-4xl text-balance font-bold pb-10">
        Mejores proyectos
      </h1>
      <div className="flex flex-col items-center">
        <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
          {allProjects
            .filter((project) => projectList.includes(project.slug))
            .map((project) => (
              <div key={project.slug}>
                <ProjectCard project={project} />
              </div>
            ))}
        </div>
        <Link href="/projects">
          <button className="btn btn-primary hover:scale-105">Ver más</button>
        </Link>
      </div>
    </section>
  );
}
