import { getAllPosts } from "@/lib/getPosts";
import type PostType from "@/interfaces/post";
import SearchPosts from "@/components/posts/group/search-posts";
import { Suspense } from "react";

import Head from "next/head";

type Props = {
  allPosts: PostType[];
};

function getAllTypes(allPosts: PostType[]) {
  let types: string[] = ["Todos"];

  for (let post of allPosts) {
    if (!types.includes(post.type)) types.push(post.type);
  }

  return types;
}

export default function Blog({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>Blog | HelcsnewsXD</title>
        <meta
          name="description"
          content="Listado de posts de Emanuel Nicolás Herrador (helcsnewsxd)"
        />
      </Head>

      <div className="hero min-h-full bg-base-200">
        <div className="hero-content text-center mt-20 mb-20 animatecss animatecss-fadeIn">
          <div className="max-w-screen">
            <h1 className="text-5xl text-balance font-bold py-6 mt-10">
              Todos mis blogs
            </h1>

            <Suspense>
              <SearchPosts
                allPosts={allPosts}
                allTypes={getAllTypes(allPosts)}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
