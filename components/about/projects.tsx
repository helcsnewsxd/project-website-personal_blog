import Link from "next/link";

import { ProjectCard } from "../projects/individual/project-card";
import ProjectType from "@/interfaces/project";

type Props = {
  allProjects: ProjectType[];
};

const cntProjects = 3;

export default function CoolProjects({ allProjects }: Props) {
  return (
    <section className="pb-10">
      <h1 className="text-4xl text-balance font-bold pb-10">
        Últimos proyectos
      </h1>
      <div className="flex flex-col items-center">
        <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 mb-5">
          {allProjects.slice(0, cntProjects).map((project) => (
            <div className="max-w-sm mx-auto" key={project.slug}>
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
