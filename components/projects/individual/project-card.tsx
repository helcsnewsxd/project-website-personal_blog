import Image from "next/image";

import ProjectType from "@/interfaces/project";

type Props = {
  project: ProjectType;
};

export function ProjectCard({ project }: Props) {
  let dateString = new Date(project.date).toLocaleString("es-ar", {
    year: "numeric",
    month: "long",
  });
  dateString = dateString[0].toUpperCase() + dateString.slice(1);

  return (
    <a href={`${project.link}`} target="_blank">
      <div className="card bg-base-100 shadow-xl hover:scale-105">
        <div className="card-body">
          <h2 className="card-title lg:text-xl text-lg">{project.title}</h2>
          <p className="text-pretty font-light text-start text-sm p-1">
            {dateString}
          </p>
          <p className="lg:text-base text-md">{project.description}</p>
        </div>
        <figure>
          <Image
            src={`/assets/images/projects/${project.picture}.png`}
            alt={project.picture}
            width={400}
            height={300}
          />
        </figure>
        <div className="p-2 flex flex-row space-x-3 justify-center">
          {project.tools.map((tool) => (
            <Image
              key={tool}
              src={`/assets/images/tech-icons/${tool}.svg`}
              alt={tool}
              width={30}
              height={30}
              priority={true}
            />
          ))}
        </div>
      </div>
    </a>
  );
}
