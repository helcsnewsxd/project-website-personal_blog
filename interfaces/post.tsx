import type Author from "./author";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  description: string;
  type: string;
  tags: string[];
  content: string;
};

export default PostType;
