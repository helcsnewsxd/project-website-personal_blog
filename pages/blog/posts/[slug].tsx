import type PostType from "../../../interfaces/post";
import { getPostBySlug, getAllPostsCustom } from "../../../lib/getPosts";
import markdownToHtml from "../../../lib/markdownToHtml";

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  return (
    <div className="pt-32 pl-10 pr-10 pb-10 flex flex-row">
      {post.title}
      <br />
      {post.date}
      <br />
      {post.content}
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
