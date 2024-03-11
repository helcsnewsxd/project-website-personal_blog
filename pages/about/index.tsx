import Head from "next/head";

import AboutMeBanner from "@/components/banners/about-me-banner";
import WhoAmI from "@/components/about/who-am-i";
import Awards from "@/components/about/awards";
import Skills from "@/components/about/skills";
import LanguagesAndTechnologies from "@/components/about/languages";
import CoolProjects from "@/components/about/projects";

import ProjectType from "@/interfaces/project";
import { getAllProjects } from "@/lib/getProjects";

type Props = {
  allProjects: ProjectType[];
};

export default function About({ allProjects }: Props) {
  return (
    <>
      <Head>
        <title>Sobre mí | HelcsnewsXD</title>
        <meta
          name="description"
          content="Acerca de mí, Emanuel Nicolás Herrador (helcsnewsxd)"
        />
      </Head>

      <AboutMeBanner />

      <div id="content">
        <div className="py-5 px-4 lg:px-10">
          <div className="bg-base-100 lg:shadow-2xl shadow-lg lg:rounded-3xl rounded-xl lg:p-10 p-4 space-y-10">
            <WhoAmI />
            <Awards />
            <Skills />
            <LanguagesAndTechnologies />
            <CoolProjects allProjects={allProjects} />
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
