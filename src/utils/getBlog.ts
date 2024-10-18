import { getCollection } from "astro:content";

export async function getBlog() {
  let pages: any[] = await getCollection("blog");
  // if (process.env.NODE_ENV !== "development") {
  //   pages = pages.filter(
  //     (page) => page.data.tags.indexOf("development") === -1
  //   );
  // }
  pages.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return pages;
}
