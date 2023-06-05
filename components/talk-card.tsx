import Image from "next/image";
import {
  FaCalendar,
  FaPlay,
  FaFilePowerpoint,
  FaLaptopCode,
} from "react-icons/fa";
import { Talk } from "@/types";

type TalkCardProps = {
  talk: Talk;
};

const TalkCard: React.FC<TalkCardProps> = ({ talk }) => {
  const isTextLong = talk.description.length > 150;
  const trimmedText = isTextLong
    ? `${talk.description.substring(0, 150)}...`
    : talk.description;

  return (
    <div className="flex flex-col shadow-lg rounded-lg dark:bg-dark bg-lighter p-4 transform transition-all duration-300 ease-in-out">
      <div className="relative h-60 w-full rounded-t-lg">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={`/talks/${talk.thumbnail}`}
            fill
            style={{ objectFit: "cover" }}
            alt={talk.title}
            className="transition-all duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <div className="absolute -bottom-4 right-2 rounded-full bg-accent p-2 text-white font-medium">
          ⏱️{talk.duration}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold mt-4 dark:text-light text-darker">
          {talk.title}
        </h2>
        <p className="text-sm mt-2 dark:text-grey text-dark">
          <FaCalendar className="inline-block mr-2" />
          <i>{talk.date}</i>
        </p>
        <p
          className={`text-sm my-2 dark:text-light text-dark w-full opacity-80`}
          title={isTextLong ? talk.description : ""}
        >
          {trimmedText}
        </p>
      </div>
      {talk.presentations.map((presentation, index) => (
        <div key={index}>
          <a
            href={presentation.hostLink}
            className="text-accent"
            target="_blank"
            rel="noreferrer"
          >
            {presentation.host}
          </a>
          , {presentation.country}
          {presentation.city}
          {presentation.video && (
            <a href={presentation.video} target="_blank" rel="noreferrer">
              {" "}
              📽️
            </a>
          )}
          {presentation.slides && (
            <a href={presentation.slides} target="_blank" rel="noreferrer">
              {" "}
              📝
            </a>
          )}
          {presentation.demo && (
            <a href={presentation.demo} target="_blank" rel="noreferrer">
              {" "}
              💻
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default TalkCard;
