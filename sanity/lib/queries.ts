// sanity/lib/queries.ts
import { client } from "./client";

export async function getAboutData() {
  const query = `*[_type == "about"][0]{
    title,
    bio,
    "imageUrl": profileImage.asset->url,
    skills
  }`;

  return await client.fetch(query);
}