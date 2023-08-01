import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FaCalendar, FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface PostPageProps {
  params: {
    slug: string[];
  };
}
// TODO: fix any
async function getPostFromParams(params: any) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

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
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }
  return (
    <article className="container relative mx-auto max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className="absolute left-[-200px] top-14 hidden xl:inline-flex items-center hover:text-accent hover:underline"
      >
        <FaChevronLeft className="mr-2 h-4 w-4" />
        <p>See all posts</p>
      </Link>
      <div>
        <h1 className="mb-4 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {post.date && (
          <p className="text-sm mb-2 opacity-60 flex items-center">
            <FaCalendar className="inline-block mr-2" />
            <time dateTime={post.date} className="italic">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </p>
        )}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      {/* TODO: MDX */}
      {/* <Mdx code={post.body.code} /> */}
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
      <hr className="mt-12" />
      <div className="py-6 lg:py-10">
        <Link
          href="/blog"
          className="flex justify-center items-center hover:text-accent hover:underline"
        >
          <FaChevronLeft className="mr-2 h-4 w-4" />
          <p>See all posts</p>
        </Link>
      </div>
    </article>
  );
}
