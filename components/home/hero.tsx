// import Deck from "../skillsCards/DeckCards";
import Button from "../ui/button";
import dynamic from "next/dynamic";

export default function Hero() {
  // Server Component:
  const Deck = dynamic(() => import("../skillsCards/DeckCards"));

  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 pt-10 pb-44 md:pt-32 mx-8 md:px-20 min-h-[calc(100vh-76px)]">
      <div className="md:basis-7/12 md:pr-16 flex flex-col justify-center">
        <h1 className="text-5xl pb-5 md:pb-10 font-serif font-bold leading-tight">
          <span className="text-accent">Coding</span> &
          <span className="text-accent"> Storytelling</span>:
          <br />
          That's what I do!
        </h1>
        <div className="flex flex-wrap mb-6 md:mb-8">
          <code className="bg-blue-300 px-2 py-1.5 mr-2 my-1 rounded-md font-medium text-dark">
            Engineering
          </code>
          <code className="bg-blue-300 px-2 py-1.5 mr-2 my-1 rounded-md font-medium text-dark">
            Educating
          </code>
          {/* <br className="leading-10 block" /> */}
          <code className="bg-blue-300 px-2 py-1.5 mr-2 my-1 rounded-md font-medium text-dark">
            Entertaining
          </code>
        </div>
        <p className="font-medium text-lg">
          I bring ambitious ideas to life with software engineering, and share
          my expertise across conferences and social media.
        </p>
        <div className="flex my-7">
          <Button route={"/contact"} label={"Let's CHAT!"} />
        </div>
      </div>
      <div className="mt-40 mb-20 md:mt-0 md:mb-0 md:basis-5/12 items-center flex relative w-full justify-center">
        <p className="text-4xl">🎉🎉</p>
        <Deck />
      </div>
    </div>
  );
}
