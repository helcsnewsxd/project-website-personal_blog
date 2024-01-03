import Link from "next/link";
import type PostType from "@/interfaces/post";
import PostTypeBadge from "./badges/post-type";
import PostTagBadge from "./badges/post-tag";

type Props = {
  post: PostType;
  type: Boolean;
};

const limitTags = 3;
const limitDescription = 70;

export default function PostCard({ post, type }: Props) {
  const limitedTags = post.tags.slice(0, limitTags);

  let dateString = new Date(post.date).toLocaleString("es-ar", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  dateString = dateString[0].toUpperCase() + dateString.slice(1);

  const isNew = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    return diffDays <= 1;
  };

  let limitedDescription = post.description.slice(0, limitDescription);
  if (post.description.length > limitDescription) {
    limitedDescription += "...";
  }

  return (
    <div className={`card bg-base-100 ${type ? "shadow-xl" : "border"}`}>
      {isNew(new Date(post.date)) && (
        <div className="absolute right-0 top-0">
          <p className="bg-secondary text-sm rounded-lg py-1 px-2 mt-2 mr-2">
            Nuevo
          </p>
        </div>
      )}

      <div className="card-body">
        <h2 className="card-title text-start text-balance text-xl">
          {post.title}
        </h2>
        <p className="text-pretty font-light text-start text-xs p-1">
          {post.author.name}
          <br />
          {dateString}
        </p>
        <div className="flex flex-row justify-start">
          <PostTypeBadge type={post.type} />
        </div>
        <div className="text-start justify-start w-auto">
          {limitedTags.map((tag: string) => (
            <PostTagBadge key={tag} tag={tag} type={true} />
          ))}
        </div>
        <p className="text-pretty text-base p-1 text-start">
          {limitedDescription}
        </p>
        <div className="card-actions justify-end p-1">
          <Link href={`/blog/posts/${post.slug}`}>
            <button className="btn btn-primary hover:scale-105">Leer</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
