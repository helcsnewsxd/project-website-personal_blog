import { Inter } from "next/font/google";
import { getAllPosts } from "@/lib/getPosts";
import type PostType from "@/interfaces/post";

import LastPosts from "@/components/posts/group/last-posts";
import WelcomeBanner from "@/components/banners/welcome-banner";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  allPosts: PostType[];
};

export default function Home({ allPosts }: Props) {
  const limitPosts = allPosts.slice(0, 3);

  return (
    <>
      <Head>
        <title>Principal | HelcsnewsXD</title>
        <meta
          name="description"
          content="Sitio web de Emanuel Nicolás Herrador (helcsnewsxd)"
        />
      </Head>

      <div className={`pt-16 ${inter.className}`}>
        <WelcomeBanner />
        <LastPosts posts={limitPosts} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
