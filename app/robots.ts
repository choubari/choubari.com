import { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

const home = process.env.NEXT_PUBLIC_APP_URL;

export default function robots(): MetadataRoute.Robots {
  // Find all unpublished posts.
  const disallowedPosts = allPosts
    .filter((post) => !post.published)
    .map((post) => `${post.slug}`);

  const disallowedPaths = [...disallowedPosts, "/api/contact"];

  return {
    sitemap: `${home}/sitemap.xml`,
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: disallowedPaths,
    },
  };
}
