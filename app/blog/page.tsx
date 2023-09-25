import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { FaCalendar } from "react-icons/fa";

export const metadata = {
  title: "Blog",
};

function PostCard(post: Post) {
  return (
    <article
      key={post._id}
      className="mb-8 shadow-lg rounded-lg dark:bg-dark bg-lighter transform transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-accent"
    >
      <Link href={post.slug}>
        {post.image && (
          <Image
            src={post.image}
            placeholder="blur"
            blurDataURL="/blog/placeholder.jpg"
            alt={post.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            width={804}
            height={452}
            className="rounded-md border bg-muted transition-colors"
          />
        )}
        <div className="px-5 pt-2 pb-5">
          <h2 className="text-2xl font-serif font-bold text-accent">
            {post.title}
          </h2>
          <p className="text-sm mb-2 opacity-60 flex items-center">
            <FaCalendar className="inline-block mr-2" />
            <time dateTime={post.date} className="italic">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </p>
          {post.description && (
            <p className="text-muted-foreground">{post.description}</p>
          )}
        </div>
      </Link>
    </article>
  );
}

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
