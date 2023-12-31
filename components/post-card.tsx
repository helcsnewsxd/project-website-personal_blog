import Link from "next/link";
import type PostType from "../interfaces/post";

type Props = {
  post: PostType;
};

const limitTags = 3;
const limitDescription = 70;

export default function PostCard({ post }: Props) {
  const limitedTags = post.tags.slice(0, limitTags);

  let dateString = new Date(post.date).toLocaleString("es-ar", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  dateString = dateString[0].toUpperCase() + dateString.slice(1);

  let limitedDescription = post.description.slice(0, limitDescription);
  if (post.description.length > limitDescription) {
    limitedDescription += "...";
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-balance text-xl">{post.title}</h2>
        <p className="text-pretty font-light text-start text-xs p-1">
          {post.author.name}
          <br />
          {dateString}
        </p>
        <div className="flex flex-row justify-start">
          <span className="badge badge-accent rounded-md text-pretty text-xs m-1 text-current	text-base-100">
            {post.type}
          </span>
        </div>
        <div className="flex flex-row justify-start">
          {limitedTags.map((tag: string) => (
            <span
              key={tag}
              className="badge badge-outline badge-accent text-pretty text-xs m-1"
            >
              {tag}
            </span>
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
