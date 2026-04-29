import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export async function GET(context) {
  return rss({
     title: 'Artidyn Robotics',
    description: 'Artidyn Robotics provides certified beverage automation solutions to unlock new revenue and premium experiences.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}
