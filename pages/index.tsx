import { Inter } from "next/font/google";
import LastPosts from "../components/last-posts";
import { getAllPosts } from "../lib/getPosts";
import type PostType from "../interfaces/post";

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
