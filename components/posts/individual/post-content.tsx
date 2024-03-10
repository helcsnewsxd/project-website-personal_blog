import type PostType from "@/interfaces/post";
import Image from "next/image";
import markdownStyles from "@/styles/markdown.module.css";
import Heart from "@/components/posts/individual/properties/heart";
import Share from "./properties/share";

type Props = {
  post: PostType;
};

export default function PostContent({ post }: Props) {
  const authorPicturePath = `/assets/authors/${post.author.picture}.png`;

  let dateString = new Date(post.date).toLocaleString("es-ar", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  dateString = dateString[0].toUpperCase() + dateString.slice(1);

  return (
    <div>
      <p className="mb-10 text-pretty font-semibold text-3xl lg:text-5xl">
        {post.title}
      </p>

      <div className="font-light text-lg lg:text-xl my-10">
        <p>{post.description}</p>
      </div>

      <div className="flex justify-start items-center">
        <Image
          src={authorPicturePath}
          alt={post.author.name}
          className="w-10 h-10 mr-4"
          width={50}
          height={50}
        />

        <div className="font-light italic text-base lg:text-lg">
          <p>Redactado por {post.author.name}</p>
          <p>{dateString}</p>
        </div>
      </div>

      <div className="flex justify-start items-center my-10 gap-4">
        <Heart postName={post.slug} />
        <Share post={post} />
      </div>

      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
