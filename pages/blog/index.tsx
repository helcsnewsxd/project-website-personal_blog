import { getAllPosts } from "@/lib/getPosts";
import type PostType from "@/interfaces/post";
import SearchPosts from "@/components/posts/group/search-posts";

type Props = {
  allPosts: PostType[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <div className="hero min-h-full bg-base-200">
      <div className="hero-content text-center mt-20 mb-20 animatecss animatecss-fadeIn">
        <div className="max-w-screen">
          <h1 className="text-5xl text-balance font-bold py-6 mt-10">
            Todos mis blogs
          </h1>

          <SearchPosts allPosts={allPosts} />
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
