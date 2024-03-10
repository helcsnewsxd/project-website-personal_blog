const { sql } = require("@vercel/postgres");

// Create the post table with post_slug as primary key
// and with heart_count with default value 0

async function createPostTable(client) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS posts (
      post_slug text PRIMARY KEY,
      heart_count integer DEFAULT 0
    );
  `;
}

async function main() {
  const client = await sql.connect();

  await createPostTable(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "Unexpected error occurred during database initialization",
    err
  );
});
