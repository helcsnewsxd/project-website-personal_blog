import type PostType from "../../../interfaces/post";
import {
  getPostBySlug,
  getAllPostsCustom,
  getAllPosts,
} from "../../../lib/getPosts";
import markdownToHtml from "../../../lib/markdownToHtml";
import { PostContent } from "@/components/post-content";
import OtherPosts from "@/components/other-posts";

type Props = {
  post: PostType;
  allPosts: PostType[];
};

const limitToShow = 3;

export default function Post({ post, allPosts }: Props) {
  return (
    <div className="py-32 px-10">
      <div className="bg-base-100 lg:shadow-2xl lg:rounded-3xl lg:p-10 animatecss animatecss-fadeIn min-w-fit">
        <PostContent post={post} />

        <div className="divider p-10 lg:p-20" />

        <div>
          <OtherPosts
            posts={allPosts
              .filter((p) => p.slug !== post.slug)
              .sort((a, b) => 0.5 - Math.random())
              .slice(0, limitToShow)}
          />
        </div>
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

  const allPosts = getAllPosts();

  return {
    props: {
      post: {
        ...post,
        content,
      },
      allPosts,
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
