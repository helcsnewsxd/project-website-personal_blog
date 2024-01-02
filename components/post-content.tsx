import type PostType from "@/interfaces/post";
import Image from "next/image";
import markdownStyles from "@/styles/markdown.module.css";

type Props = {
  post: PostType;
};

export function PostContent({ post }: Props) {
  let dateString = new Date(post.date).toLocaleString("es-ar", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  dateString = dateString[0].toUpperCase() + dateString.slice(1);

  return (
    <div className="bg-base-100 shadow-2xl rounded-3xl p-10 animatecss animatecss-fadeIn">
      <p className="mb-10 text-balance text-5xl font-semibold text-center">
        {post.title}
      </p>
      <div className="flex justify-start items-center">
        <Image
          src={post.author.picture}
          alt={post.author.name}
          className="w-10 h-10 mr-4"
          width={50}
          height={50}
        />
        <div className="text-lg font-light italic">
          <p>Redactado por {post.author.name}</p>
          <p>{dateString}</p>
        </div>
      </div>

      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
