import { allPosts } from "contentlayer/generated";

const home = process.env.NEXT_PUBLIC_APP_URL;

export default async function sitemap() {
  const dynamicRoutes = allPosts
    .filter((post) => post.published)
    .map((post) => ({
      url: `${home}/blog/${post.slugAsParams}`,
      lastModified: new Date().toISOString(),
    }));

  const staticRoutes = [
    "",
    "/",
    "about",
    "work",
    "talks",
    "blog",
    "contact",
    "testimonials",
    "oss",
    "creator",
    "newsletter",
  ].map((route) => ({
    url: `${home}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...dynamicRoutes, ...staticRoutes];
}
