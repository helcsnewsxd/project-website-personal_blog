import { getAllPosts } from "@/lib/getPosts";
import type PostType from "@/interfaces/post";
import PostCard from "@/components/post-card";
import { useState } from "react";

type Props = {
  allPosts: PostType[];
};

const postsPerPage = 6;

export default function Blog({ allPosts }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [postType, setPostType] = useState("");

  // Filter posts by search value for title, description and tags
  const filteredPosts = allPosts.filter((post: PostType) => {
    if (postType !== "" && postType !== post.type) {
      return null;
    }

    let searchContent = post.title + post.description;
    for (let tag of post.tags) {
      searchContent += tag;
    }

    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const cntPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    setPage(1);
  };

  // Handle search by type
  const handleSearchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPostType(
      (e.currentTarget.textContent !== "Todos" &&
        e.currentTarget.textContent) ||
        ""
    );

    setPage(1);
  };

  // Handle pagination buttons
  const handleNextPage = () => {
    setPage(Math.min(page + 1, cntPages));
  };

  const handleSetSpecificPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  // Component
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center mt-20 mb-20">
        <div className="max-w-screen">
          <h1 className="text-5xl text-balance font-bold py-6 mt-10">
            Todos mis blogs
          </h1>

          <div className="flex flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Buscar"
              className="input input-bordered w-full max-w-xs"
              onChange={handleSearchChange}
            />
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-base-100 shadow-sm"
              >
                Buscar por tipo
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button
                    onClick={handleSearchByType}
                    className={postType === "" ? "bg-accent text-base-100" : ""}
                  >
                    Todos
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSearchByType}
                    className={
                      postType === "Programación Competitiva"
                        ? "bg-accent text-base-100"
                        : ""
                    }
                  >
                    Programación Competitiva
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSearchByType}
                    className={
                      postType === "Ciberseguridad"
                        ? "bg-accent text-base-100"
                        : ""
                    }
                  >
                    Ciberseguridad
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10">
            {filteredPosts
              .slice((page - 1) * postsPerPage, page * postsPerPage)
              .map((post: PostType) => (
                <PostCard key={post.slug} post={post} />
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

            {page + 1 < cntPages && (
              <button className="join-item btn">...</button>
            )}

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
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
