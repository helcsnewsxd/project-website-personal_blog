import Link from "next/link";
import type PostType from "@/interfaces/post";
import PostCard from "../individual/post-card";

type Props = {
  posts: PostType[];
};

export default function LastPosts({ posts }: Props) {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center mt-20 mb-20 animatecss animatecss-fadeIn">
        <div className="max-w-screen">
          <h1 className="text-5xl text-balance font-bold py-6">
            Últimos posteos
          </h1>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 py-6 lg:grid-cols-3">
              {posts.map((post: PostType) => (
                <PostCard key={post.slug} post={post} type={true} />
              ))}
            </div>
          ) : (
            <div className="py-6">
              <p className="text-2xl text-base-content text-opacity-60 italic">
                No hay posteos para mostrar.
              </p>
            </div>
          )}

          <Link href="/blog">
            <button className="btn btn-primary hover:scale-105">Ver más</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
