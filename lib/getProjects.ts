import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const projectsDirectory = join(process.cwd(), "_data/_projects");

const fields = [
  "slug",
  "title",
  "description",
  "date",
  "picture",
  "link",
  "tools"
];

// ------------------------------------------------------------

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(projectsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    type Items = {
      [key: string]: string;
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }

      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });

    return items;
}

export function getAllProjects() {
    const slugs = getProjectSlugs();
    const projects = slugs
      .map((slug) => getProjectBySlug(slug, fields))
      // sort projects by date in descending order
      .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
    return projects;
}