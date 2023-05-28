import Link from "next/link";
import { Talks } from "@/content/talks";
import TalkCard from "../talk-card";

export default function FeaturedTalks() {
  return (
    <div className="mx-4 my-6 md:px-20">
      <div className="flex flex-col mb-5">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Featured Talks
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>Some of the talks I presented.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {Talks.slice(0, 3).map((talk, index) => (
          <TalkCard key={index} talk={talk} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/talks">
          <p className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-accent to-accentgrad text-white text-sm font-semibold">
            View All Talks
          </p>
        </Link>
      </div>
    </div>
  );
}
