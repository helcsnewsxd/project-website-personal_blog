import type PostType from "@/interfaces/post";
import PostCard from "@/components/post-card";
import Link from "next/link";

export default function OtherPosts({ posts }: { posts: PostType[] }) {
  return (
    <div>
      <p className="text-center text-3xl lg:text-5xl font-semibold mb-10">
        Otros posts
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/blog">
          <button className="btn btn-primary hover:scale-105">Ver más</button>
        </Link>
      </div>
    </div>
  );
}
