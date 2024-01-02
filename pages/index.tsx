import { Inter } from "next/font/google";
import { getAllPosts } from "@/lib/getPosts";
import type PostType from "@/interfaces/post";

import LastPosts from "@/components/posts/group/last-posts";
import WelcomeBanner from "@/components/welcome-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "helcsnewsxd | Home",
};

type Props = {
  allPosts: PostType[];
};

export default function Home({ allPosts }: Props) {
  const limitPosts = allPosts.slice(0, 3);

  return (
    <div className={`pt-16 ${inter.className}`}>
      <WelcomeBanner />
      <LastPosts posts={limitPosts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
