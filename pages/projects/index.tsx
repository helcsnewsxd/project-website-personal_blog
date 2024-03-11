import Head from "next/head";
import { Suspense } from "react";

import ProjectType from "@/interfaces/project";
import { getAllProjects } from "@/lib/getProjects";

import ProjectView from "@/components/projects/group/project-view";

type Props = {
  allProjects: ProjectType[];
};

export default function Projects({ allProjects }: Props) {
  return (
    <>
      <Head>
        <title>Proyectos | HelcsnewsXD</title>
        <meta
          name="description"
          content="Proyectos de Emanuel Nicolás Herrador (helcsnewsxd)"
        />
      </Head>

      <div className="hero min-h-full bg-base-200">
        <div className="hero-content text-center mt-20 mb-20 animatecss animatecss-fadeIn">
          <div className="max-w-screen">
            <h1 className="text-5xl text-balance font-bold py-6 mt-10">
              Mis proyectos
            </h1>

            <Suspense>
              <ProjectView allProjects={allProjects} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects();

  return {
    props: { allProjects },
  };
};
