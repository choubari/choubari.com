import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FaCalendar, FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Mdx } from "@/components/mdx/mdx-components";
import { absoluteUrl } from "@/lib/utils";
import PostViews from "@/components/mdx/post-views";
import incrementPostViews from "@/lib/blog/incrementPostViews";

interface PostPageProps {
  params: {
    slug: string[];
  };
}
// TODO: fix any
async function getPostFromParams(params: any) {
  const slug = params?.slug?.join("/");
  const post = allPosts
    .filter((post) => post.published)
    .find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.description,
    authors: [
      {
        name: "Kawtar Choubari",
        url: "https://choubari.com",
      },
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }
  await incrementPostViews(post.slugAsParams);

  return (
    <article className="container relative mx-auto max-w-3xl py-6 px-5 lg:py-10">
      <Link
        href="/blog"
        className="absolute left-[-200px] top-14 hidden xl:inline-flex items-center hover:text-accent hover:underline"
      >
        <FaChevronLeft className="mr-2 h-4 w-4" />
        <p>See all posts</p>
      </Link>
      <div>
        <h1 className="mb-4 inline-block font-heading font-serif font-bold text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
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
      </div>
      {post.image && (
        <Image
          src={post.image}
          placeholder="blur"
          blurDataURL="/blog/placeholder.jpg"
          alt={post.title}
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          width={720}
          height={0}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-20 border-accent" />
      <hr className="mt-1 border-accent" />
      <div className="py-6 lg:py-10 flex items-center justify-between">
        <Link
          href="/blog"
          className="flex justify-center items-center hover:text-accent hover:underline"
        >
          <FaChevronLeft className="mr-2 h-4 w-4" />
          <p>See all posts</p>
        </Link>
        <div className="flex flex-col items-end">
          <p>Liked this post?</p>
          <a
            href="https://www.buymeacoffee.com/choubari"
            aria-label="Buy me a coffee"
            target="_blank"
          >
            <img
              width={150}
              alt="Buy me a coffee link"
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=choubari&button_colour=12c5ca&font_colour=212733&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
