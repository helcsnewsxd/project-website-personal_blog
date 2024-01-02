import type PostType from "../../../interfaces/post";
import { getPostBySlug, getAllPostsCustom } from "../../../lib/getPosts";
import markdownToHtml from "../../../lib/markdownToHtml";
import Image from "next/image";
import markdownStyles from "@/styles/markdown.module.css";
import hljs from "highlight.js/lib/core";
import cpp from "highlight.js/lib/languages/cpp";

hljs.registerLanguage("cpp", cpp);

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  let dateString = new Date(post.date).toLocaleString("es-ar", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  dateString = dateString[0].toUpperCase() + dateString.slice(1);

  return (
    <div className="py-32 px-10">
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

        <div>{post.content}</div>
      </div>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPostsCustom(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
