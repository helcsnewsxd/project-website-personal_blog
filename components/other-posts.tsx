import type PostType from "@/interfaces/post";
import PostCard from "@/components/post-card";

export default function OtherPosts({ posts }: { posts: PostType[] }) {
  return (
    <div className="w-auto">
      <p className="text-center text-3xl lg:text-5xl font-semibold mb-10">
        Otros posts
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} type={false} />
        ))}
      </div>
    </div>
  );
}
