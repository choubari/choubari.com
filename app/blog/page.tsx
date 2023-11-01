import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import PostCard from "@/components/post-card";

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Blog
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>The one and the only place to read my confessions.</p>
      </div>
      {posts?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 mx-4 my-6">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      ) : (
        <p className="flex justify-center">No posts published!</p>
      )}
    </div>
  );
}
