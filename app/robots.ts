import { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

export default function robots(): MetadataRoute.Robots {
  // Find all unpublished posts.
  const disallowedPaths = allPosts
    .filter((post) => !post.published)
    .map((post) => `/${post.slugAsParams}`);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: disallowedPaths,
    },
  };
}
