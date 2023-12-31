import Link from "next/link";
import PostCard from "./post-card";
import type PostType from "../interfaces/post";

type Props = {
  posts: PostType[];
};

export default function LastPosts({ posts }: Props) {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center mt-20 mb-20 animatecss animatecss-fadeInUp">
        <div className="max-w-screen">
          <h1 className="text-5xl text-balance font-bold py-6">Last Posts</h1>

          <div className="grid grid-cols-1 gap-4 py-6 lg:grid-cols-3">
            {posts.map((post: PostType) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <Link href="/blog">
            <button className="btn btn-primary hover:scale-105">
              Show more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
