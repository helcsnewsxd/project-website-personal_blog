import type { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export const config = {
  api: {
    externalResolver: true,
  },
};

async function getPostLikes(postName: string) {
  try {
    const posts: any = await sql`
    SELECT * FROM posts WHERE post_slug = ${postName}
  `;

    if (posts.rowCount === 0) {
      // Create a new post entry
      await sql`
      INSERT INTO posts (post_slug, heart_count, seen_count)
      VALUES (${postName}, ${0}, ${0})
    `;

      return 0;
    }

    return posts.rows[0].heart_count;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

async function updatePostLikes(postName: string, likes: number) {
  try {
    await sql`
    UPDATE posts
    SET heart_count = ${likes}
    WHERE post_slug = ${postName}
  `;
  } catch (error) {
    console.log(error);
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pid } = req.query;

  try {
    if (req.method === "GET") {
      // Get post likes
      getPostLikes(pid as string).then((likes) => {
        res.status(200).json({ likes });
      });
    } else if (req.method === "POST") {
      // Set post likes
      const jsonBody = JSON.parse(req.body);
      const likes = jsonBody.likes;

      updatePostLikes(pid as string, likes).then(() => {
        res.status(200).json({ likes });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
