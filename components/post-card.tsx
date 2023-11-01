import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import { FaCalendar } from "react-icons/fa";
import PostViews from "./mdx/post-views";

export default function PostCard(post: Post) {
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
          <h2 className="text-2xl font-serif font-bold text-accent py-2">
            {post.title}
          </h2>
          <div className="flex gap-5">
            {post.date && (
              <p className="text-sm mb-2 opacity-60 flex items-center">
                <FaCalendar className="inline-block mr-2" />
                <time dateTime={post.date} className="italic">
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </p>
            )}
            {/* @ts-expect-error Async Server Component */}
            <PostViews slug={post.slugAsParams} />
          </div>

          {post.description && (
            <p className="text-muted-foreground">{post.description}</p>
          )}
        </div>
      </Link>
    </article>
  );
}
