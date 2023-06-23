import NewsletterBox from "@/components/newsletter-box";
import { NEWSLETTER_FEED, getFeed } from "@/lib/rss";
import { format } from "date-fns";
import { FaCalendar } from "react-icons/fa";

export default async function Feed() {
  const detailedFeed = await getFeed(NEWSLETTER_FEED.url);
  const items = detailedFeed.items;
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          {NEWSLETTER_FEED.title}
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>The One Place to Learn, Laugh, and Level Up Your Coding Skills!</p>
        <div className="md:w-96 mt-5">
          <NewsletterBox type={"slim"} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 my-6">
        {items.map((item) => (
          <a
            key={item.link}
            className="p-4 flex flex-col border hover:border-gray-300 border-gray-500 dark:border-gray-300 hover:dark:border-gray-500 rounded-lg bg-lighter dark:bg-dark hover:bg-gradient-to-r from-accent dark:from-accentgrad via-accent to-accentgrad dark:to-accent"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="font-bold flex-grow">{item.title}</div>
            <p className="text-sm mt-2 opacity-75 flex items-center">
              <FaCalendar className="inline-block mr-2" />
              <i>{format(new Date(item.isoDate || ""), "PPP")}</i>
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
