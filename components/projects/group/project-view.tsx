"use client";

import ProjectType from "@/interfaces/project";

import { ProjectCard } from "../individual/project-card";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  allProjects: ProjectType[];
};

// Constants
const projectsPerPage = 6;

export default function ProjectView({ allProjects }: Props) {
  // URL Parameters
  const router = useRouter();

  const searchParams = useSearchParams();
  let pageParam = "";

  if (searchParams != null) {
    pageParam = searchParams.get("page")?.toString() || "";
  }

  // State variables
  const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);

  useEffect(() => {
    setPage(pageParam ? parseInt(pageParam) : 1);
  }, [pageParam]);

  // Pagination
  const cntPages = Math.ceil(allProjects.length / projectsPerPage);

  // Pagination buttons
  const handleNextPage = () => {
    setPage(Math.min(page + 1, cntPages));

    // Update URL changing only page paramenter
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", (page + 1).toString());
    router.push({ search: searchParams.toString() });
  };

  const handleSetSpecificPage = (pageNumber: number) => {
    setPage(pageNumber);

    // Update URL changing only page paramenter
    const searchParams = new URLSearchParams(window.location.search);
    if (pageNumber === 1) searchParams.delete("page");
    else searchParams.set("page", pageNumber.toString());
    router.push({ search: searchParams.toString() });
  };

  const handlePreviousPage = () => {
    setPage(Math.max(page - 1, 1));

    // Update URL changing only page paramenter
    const searchParams = new URLSearchParams(window.location.search);
    if (page - 1 === 1) searchParams.delete("page");
    else searchParams.set("page", (page - 1).toString());
    router.push({ search: searchParams.toString() });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {allProjects
          .slice((page - 1) * projectsPerPage, page * projectsPerPage)
          .map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>
      <div className="join">
        {page > 1 && (
          <button className="join-item btn" onClick={handlePreviousPage}>
            <p className="text-2xl">«</p>
          </button>
        )}

        <button className="join-item btn btn-active">{page}</button>

        {page + 1 <= cntPages && (
          <button
            className="join-item btn"
            onClick={() => handleSetSpecificPage(page + 1)}
          >
            {page + 1}
          </button>
        )}

        {page + 1 < cntPages && <button className="join-item btn">...</button>}

        {page + 1 < cntPages && (
          <button
            className="join-item btn"
            onClick={() => handleSetSpecificPage(cntPages)}
          >
            {cntPages}
          </button>
        )}

        {page < cntPages && (
          <button className="join-item btn" onClick={handleNextPage}>
            <p className="text-2xl">»</p>
          </button>
        )}
      </div>
    </>
  );
}
