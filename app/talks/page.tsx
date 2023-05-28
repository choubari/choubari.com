import TalkCard from "@/components/talk-card";
import { Talks } from "@/content/talks";

export default function TalksPage() {
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Public Talks
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>Because Sharing is Caring!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-6">
        {Talks.map((talk, index) => (
          <TalkCard key={index} talk={talk} />
        ))}
      </div>
    </div>
  );
}
