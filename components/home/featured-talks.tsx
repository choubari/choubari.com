import { Talks } from "@/content/talks";
import TalkCard from "../talk-card";
import Button from "../ui/button";

export default function FeaturedTalks() {
  return (
    <div className="mx-8 my-6 mb-20 md:px-20">
      <div className="flex flex-col mb-5">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Featured Talks
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>Some of the talks and workshops I animated.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {Talks.filter((talk) => talk.featured).map((talk, index) => (
          <TalkCard key={index} talk={talk} />
        ))}
      </div>
      <div className="my-10">
        <Button route={"/talks"} label={"View All Talks"} />
      </div>
    </div>
  );
}
