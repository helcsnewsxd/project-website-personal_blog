import type PostType from "../../../interfaces/post";
import { getPostBySlug, getAllPostsCustom } from "../../../lib/getPosts";
import markdownToHtml from "../../../lib/markdownToHtml";
import { PostContent } from "@/components/post-content";

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  return (
    <div className="py-32 px-10">
      <PostContent post={post} />
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
