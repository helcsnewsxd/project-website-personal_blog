"use client";

import type PostType from "@/interfaces/post";
import PostCard from "@/components/posts/individual/post-card";
import { useState, useEffect } from "react";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

type Props = {
  allPosts: PostType[];
  allTypes: string[];
};

function filterPosts(posts: PostType[], searchValue: string) {
  // Filter posts by search value for title, description and tags and sort for more occurrences
  return posts
    .map((post: PostType) => {
      let searchContent =
        post.title + " " + post.description + post.content + " ";
      for (let tag of post.tags) {
        searchContent += " " + tag;
      }

      let occurrences = 0;
      let searchValueList = searchValue
        .split(" ")
        .filter((value) => value)
        .map((value) => value.toLowerCase());

      if (searchValueList.length === 0) return { post, occurrences: 1 }; // Withour search value, return all posts

      for (let value of searchValueList) {
        occurrences += searchContent.toLowerCase().split(value).length - 1;
      }

      return { post, occurrences };
    })
    .filter((post) => post.occurrences > 0)
    .sort((a, b) => b.occurrences - a.occurrences)
    .map((post) => post.post);
}

// Constants
const postsPerPage = 6;

export default function SearchPosts({ allPosts, allTypes }: Props) {
  // URL Parameters
  const router = useRouter();

  const searchParams = useSearchParams();
  let searchValueParam = "";
  let pageParam = "";
  let postTypeParam = "";

  if (searchParams != null) {
    searchValueParam = searchParams.get("searchValue")?.toString() || "";
    pageParam = searchParams.get("page")?.toString() || "";
    postTypeParam = searchParams.get("postType")?.toString() || "";
  }

  // State variables
  const [searchValue, setSearchValue] = useState(searchValueParam || "");
  const [searchValueAuxiliar, setSearchValueAuxiliar] = useState(
    searchValueParam || ""
  );

  const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
  const [postType, setPostType] = useState(postTypeParam || "");

  useEffect(() => {
    setSearchValue(searchValueParam || "");
    setSearchValueAuxiliar(searchValueParam || "");

    setPage(pageParam ? parseInt(pageParam) : 1);
    setPostType(postTypeParam || "");
  }, [searchValueParam, pageParam, postTypeParam]);

  // Filter posts by search value and get pages count
  const filteredPosts = filterPosts(allPosts, searchValue);
  const cntPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValueAuxiliar(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Remove extra spaces
    const newSearchValue = searchValueAuxiliar
      .split(" ")
      .filter((value) => value)
      .join(" ");

    console.log(newSearchValue);

    setSearchValue(newSearchValue);
    setPage(1);

    // Update URL changing only searchValue parameter and keeping the rest
    const searchParams = new URLSearchParams(window.location.search);

    if (newSearchValue) searchParams.set("searchValue", newSearchValue);
    else searchParams.delete("searchValue");

    searchParams.delete("page");
    router.push({ search: searchParams.toString() });
  };

  const handleSearchSubmitFromInput = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") handleSearchSubmit();
  };

  // Handle search by type
  const handleSearchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPostType(
      (e.currentTarget.textContent !== "Todos" &&
        e.currentTarget.textContent) ||
        ""
    );
    setPage(1);

    // Update URL changing only postType parameter and keeping the rest
    const searchParams = new URLSearchParams(window.location.search);

    if (e.currentTarget.textContent !== "Todos" && e.currentTarget.textContent)
      searchParams.set("postType", e.currentTarget.textContent);
    else searchParams.delete("postType");

    searchParams.delete("page");

    router.push({ search: searchParams.toString() });
  };

  // Handle pagination buttons
  const handleNextPage = () => {
    setPage(Math.min(page + 1, cntPages));

    // Update URL changing only page parameter and keeping the rest
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("page", (page + 1).toString());

    router.push({ search: searchParams.toString() });
  };

  const handleSetSpecificPage = (pageNumber: number) => {
    setPage(pageNumber);

    // Update URL changing only page parameter and keeping the rest
    const searchParams = new URLSearchParams(window.location.search);

    if (pageNumber === 1) searchParams.delete("page");
    else searchParams.set("page", pageNumber.toString());

    router.push({ search: searchParams.toString() });
  };

  const handlePreviousPage = () => {
    setPage(Math.max(page - 1, 1));

    // Update URL changing only page parameter and keeping the rest
    const searchParams = new URLSearchParams(window.location.search);

    if (page - 1 === 1) searchParams.delete("page");
    else searchParams.set("page", (page - 1).toString());

    router.push({ search: searchParams.toString() });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <input
          type="text"
          placeholder="Buscar"
          className="input input-bordered w-auto p-2"
          defaultValue={searchValue}
          onChange={handleSearchChange}
          onKeyDown={handleSearchSubmitFromInput}
        />
        <button
          className="btn bg-base-100 shadow-lg ml-4 hover:scale-105"
          onClick={handleSearchSubmit}
        >
          <svg
            id="SEARCH"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              fillRule="evenodd"
              clipRule={"evenodd"}
              d="M0.5 9.86705C0.5 4.38884 5.11846 0 10.75 0C16.3815 0 21 4.38884 21 9.86705C21 12.3289 20.0673 14.5707 18.5291 16.2931L21.7693 19.4027C22.0682 19.6895 22.0779 20.1642 21.7911 20.4631C21.5043 20.762 21.0295 20.7717 20.7307 20.4849L17.4488 17.3353C15.6481 18.832 13.3031 19.7341 10.75 19.7341C5.11846 19.7341 0.5 15.3453 0.5 9.86705ZM10.75 1.5C5.88813 1.5 2 5.27484 2 9.86705C2 14.4593 5.88813 18.2341 10.75 18.2341C15.6119 18.2341 19.5 14.4593 19.5 9.86705C19.5 5.27484 15.6119 1.5 10.75 1.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="dropdown mt-4">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-base-100 shadow-lg hover:scale-105"
        >
          Elegir tema
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
        >
          {allTypes.map((type) => (
            <li key={type}>
              <button
                onClick={handleSearchByType}
                className={
                  postType === type || (postType === "" && type === "Todos")
                    ? "bg-accent text-base-100"
                    : ""
                }
              >
                {type}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-xl lg:text-2xl text-base-content text-opacity-60 mt-10 mb-10 italic">
          No se encontraron resultados
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 py-6 lg:grid-cols-3 mt-10 mb-10">
          {filteredPosts
            .slice((page - 1) * postsPerPage, page * postsPerPage)
            .map((post: PostType) => (
              <PostCard key={post.slug} post={post} type={true} />
            ))}
        </div>
      )}

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
    </div>
  );
}
