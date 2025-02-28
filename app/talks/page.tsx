"use client";
import TalkCard from "@/components/talk-card";
import { Talks, TALK_TYPES } from "@/content/talks";
import { useState } from "react";
import { compareDesc } from "date-fns";

export default function TalksPage() {
  const [activeType, setActiveType] = useState<string | null>(null);

  const filteredTalks = activeType
    ? Talks.filter((talk) => talk.talkType === activeType)
    : Talks;

  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Public Talks
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>Wearing my speaker hat because sharing is caring!</p>
      </div>
      <div className="text-center text-base text-dark dark:text-light mb-6">
        <button
          onClick={() => setActiveType(null)}
          className={`hover:underline cursor-pointer ${
            !activeType ? "text-accent underline" : ""
          }`}
        >
          All ({Talks.length})
        </button>
        <span className="mx-2">|</span>
        {TALK_TYPES.filter(
          (type) => Talks.filter((talk) => talk.talkType === type).length > 0
        ).map((type, index, array) => {
          const count = Talks.filter((talk) => talk.talkType === type).length;
          return (
            <span key={type}>
              <button
                onClick={() => setActiveType(activeType === type ? null : type)}
                className={`hover:underline cursor-pointer ${
                  activeType === type ? "text-accent underline" : ""
                }`}
              >
                {`${count} ${type.toLowerCase()}${count > 1 ? "s" : ""}`}
              </button>
              {index !== array.length - 1 && ",  "}
            </span>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-6">
        {filteredTalks
          .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
          .map((talk, index) => (
            <TalkCard key={index} talk={talk} />
          ))}
      </div>
    </div>
  );
}
