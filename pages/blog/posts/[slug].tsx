import type PostType from "@/interfaces/post";
import { getPostBySlug, getAllPostsCustom, getAllPosts } from "@/lib/getPosts";
import markdownToHtml from "@/lib/markdownToHtml";
import PostContent from "@/components/posts/individual/post-content";
import OtherPosts from "@/components/posts/group/other-posts";
import Image from "next/image";
import PostTagBadge from "@/components/posts/individual/badges/post-tag";

import Head from "next/head";

type Props = {
  post: PostType;
  allPosts: PostType[];
};

const limitToShow = 3;

export default function Post({ post, allPosts }: Props) {
  const picturePath = `/assets/posts/${post.picture}.svg`;

  const pageTitle = `${post.title} | HelcsnewsXD`;
  const pageDescription = post.description;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <div className="py-32 px-4 lg:px-10">
        <div className="bg-base-100 lg:shadow-2xl lg:rounded-3xl lg:p-10 animatecss animatecss-fadeIn">
          <div className="w-1/2 h-auto mb-4 lg:mb-10">
            <Image
              src={picturePath}
              alt={post.title}
              width={1920}
              height={1080}
            />
          </div>

          <div className="py-10">
            <PostContent post={post} />
          </div>

          <div>
            <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-10">
              Temas relacionados
            </h2>
            <div className="flex flex-wrap">
              {post.tags.map((tag) => (
                <PostTagBadge key={tag} tag={tag} type={false} />
              ))}
            </div>
          </div>

          <div className="divider py-10 px-2 lg:py-20 lg:px-10" />

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
    </>
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
