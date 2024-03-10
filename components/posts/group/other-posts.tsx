import type PostType from "@/interfaces/post";
import PostCard from "../individual/post-card";

export default function OtherPosts({ posts }: { posts: PostType[] }) {
  return (
    <div className="w-auto">
      <p className="text-center text-3xl lg:text-5xl font-semibold mb-10">
        Otros posts
      </p>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} type={false} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl lg:text-2xl text-base-content text-opacity-60 mb-10 italic">
          No hay más posts
        </p>
      )}
    </div>
  );
}
