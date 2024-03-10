import type PostType from "@/interfaces/post";
import { getPostBySlug, getAllPostsCustom, getAllPosts } from "@/lib/getPosts";
import markdownToHtml from "@/lib/markdownToHtml";
import PostContent from "@/components/posts/individual/post-content";
import OtherPosts from "@/components/posts/group/other-posts";
import Image from "next/image";
import PostTagBadge from "@/components/posts/individual/badges/post-tag";
import { useState } from "react";

import Head from "next/head";

type Props = {
  post: PostType;
  otherPosts: PostType[];
};

const limitToShow = 3;

export default function Post({ post, otherPosts }: Props) {
  const [picturePath, setPicturePath] = useState(
    `/assets/posts/${post.picture}`
  );

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
          <div
            className="mb-4 lg:mb-10 lg:h-96 h-60 bg-cover bg-center rounded-3xl relative overflow-hidden"
            style={{
              backgroundImage: `url(${picturePath}.svg), url(${picturePath}.png), url(${picturePath}.jpg)`,
            }}
          ></div>

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
            <OtherPosts posts={otherPosts} />
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
  const otherPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, limitToShow);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      otherPosts,
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
