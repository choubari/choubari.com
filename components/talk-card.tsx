import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import { Talk } from "@/types";

type TalkCardProps = {
  talk: Talk;
};

const TalkCard: React.FC<TalkCardProps> = ({ talk }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-lg dark:bg-dark bg-lighter p-4 transform transition-all duration-300 ease-in-out overflow-visible group">
      <div className="relative h-52 w-full rounded-t-lg">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={`/talks/${talk.pictures[0]}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            alt={talk.title}
            className="transition-all duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <div className="absolute -bottom-5 right-2 rounded-full bg-accent p-2 text-dark font-medium">
          ⏱️{talk.duration}
        </div>
        <div className="absolute top-2 right-2 rounded-md bg-gray-300 px-2 py-1 text-black font-medium text-xs">
          {talk.talkType}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold font-serif mt-5 dark:text-light text-darker">
          {talk.hostLink ? (
            <a
              href={talk.hostLink}
              className="hover:text-accent underline"
              target="_blank"
              rel="noreferrer"
            >
              {talk.host}
            </a>
          ) : (
            talk.host
          )}
          ,
          <span className="text-base font-normal ml-2">
            {talk.country} {talk.city}
          </span>
        </h2>

        <p className="text-sm mt-2 opacity-75 flex items-center">
          <FaCalendar className="inline-block mr-2" />
          <i>{talk.date}</i>
        </p>

        <p className="text-md font-medium mt-5 dark:text-light text-darker opacity-90">
          🎤 {talk.title}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-3 mt-2">
          {talk.video && (
            <a
              className="text-sm flex items-center gap-1"
              href={talk.video}
              target="_blank"
              rel="noreferrer"
              title="Video Recording"
            >
              📽️
              <span className="underline">Video</span>
            </a>
          )}

          {talk.slides && (
            <a
              className="text-sm flex items-center gap-1"
              href={talk.slides}
              target="_blank"
              rel="noreferrer"
              title="Slides"
            >
              📝
              <span className="underline">Slides</span>
            </a>
          )}

          {talk.docs && (
            <a
              className="text-sm flex items-center gap-1"
              href={talk.docs}
              target="_blank"
              rel="noreferrer"
              title="Docs"
            >
              📖
              <span className="underline">Docs</span>
            </a>
          )}

          {talk.demoCode && (
            <a
              className="text-sm flex items-center gap-1"
              href={talk.demoCode}
              target="_blank"
              rel="noreferrer"
              title="Open Source Code"
            >
              💻
              <span className="underline">Code</span>
            </a>
          )}

          {talk.demoLink && (
            <a
              className="text-sm flex items-center gap-1"
              href={talk.demoLink}
              target="_blank"
              rel="noreferrer"
              title="Demo Link"
            >
              🔗
              <span className="underline">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalkCard;
