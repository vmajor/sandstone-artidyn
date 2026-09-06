import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// The previous implementation globbed './blog/*.{md,mdx}', which matches
// nothing — the posts live in src/content/posts — so the feed shipped empty.
export async function GET(context) {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: "Artidyn Robotics — Insights",
    description:
      "Robot barista economics, throughput, and deployment notes from the team that tests the machines.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/posts/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: "<language>en-us</language>",
  });
}
