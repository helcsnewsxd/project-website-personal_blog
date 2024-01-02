"use client";

import type PostType from "@/interfaces/post";
import PostCard from "@/components/posts/individual/post-card";
import { useState, useEffect } from "react";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

type Props = {
  allPosts: PostType[];
  allTags: string[];
  allTypes: string[];
};

function filterPosts(posts: PostType[], searchValue: string) {
  // Filter posts by search value for title, description and tags and sort for more occurrences
  return posts
    .map((post: PostType) => {
      let searchContent = post.title + " " + post.description;
      for (let tag of post.tags) {
        searchContent += " " + tag;
      }

      let occurrences = 0;
      let searchValueList = searchValue.split(" ").filter((value) => value);

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

export default function SearchPosts({ allPosts, allTags, allTypes }: Props) {
  // URL Parameters
  const router = useRouter();

  const searchParams = useSearchParams();
  const searchValueParam = searchParams.get("searchValue");
  const pageParam = searchParams.get("page");
  const postTypeParam = searchParams.get("postType");

  // State variables
  const [searchValue, setSearchValue] = useState(searchValueParam || "");
  const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
  const [postType, setPostType] = useState(postTypeParam || "");

  useEffect(() => {
    setSearchValue(searchValueParam || "");
    setPage(pageParam ? parseInt(pageParam) : 1);
    setPostType(postTypeParam || "");
  }, [searchValueParam, pageParam, postTypeParam]);

  // Filter posts by search value and get pages count
  const filteredPosts = filterPosts(allPosts, searchValue);
  const cntPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setPage(1);

    // Update URL changing only searchValue parameter and keeping the rest
    const searchParams = new URLSearchParams(window.location.search);

    if (e.target.value) searchParams.set("searchValue", e.target.value);
    else searchParams.delete("searchValue");

    searchParams.delete("page");
    router.push({ search: searchParams.toString() });
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
    <div>
      <div className="flex flex-row justify-center items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-base-100 shadow-sm"
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

        <input
          type="text"
          placeholder="Buscar"
          className="input input-bordered w-auto p-2"
          onChange={handleSearchChange}
          defaultValue={searchValue}
        />
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