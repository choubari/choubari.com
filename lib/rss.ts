import Parser from "rss-parser";

export const NEWSLETTER_FEED = {
  slug: "newsletter",
  title: "ChouBytes Newsletter",
  url: "https://rss.beehiiv.com/feeds/zUQw6owdiT.xml",
};

export async function getFeed(feedUrl: string) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}
