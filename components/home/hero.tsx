import Deck from "../skillsCards/DeckCards";
import Button from "../ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between py-32 mx-8 md:px-20">
      <div className="md:basis-7/12 pr-16">
        <h1 className="text-5xl pb-10 font-serif font-bold leading-tight">
          <span className="text-accent">Coding</span> &
          <span className="text-accent"> Storytelling</span>:
          <br />
          That's what I do!
        </h1>
        <div className="mb-8">
          <code className="bg-blue-300 p-1.5 mr-2 rounded-sm font-medium text-dark">
            Engineering
          </code>
          <code className="bg-blue-300 p-1.5 mr-2 rounded-sm font-medium text-dark">
            Educating
          </code>
          <code className="bg-blue-300 p-1.5 mr-2 rounded-sm font-medium text-dark">
            Entertaining
          </code>
        </div>
        <p className="font-medium text-lg">
          I turn ideas into reality with the power of software engineering, and
          I share my stories as a content creator.
        </p>
        <div className="flex my-7">
          <Button
            route={"/contact"}
            label={"Let's CHAT!"}
            bgColor={"bg-accent"}
            hoverColor={"bg-accentgrad"}
          />
        </div>
      </div>
      <div className="mt-40 mb-20 md:mt-0 md:mb-0 md:basis-5/12 items-center flex relative w-full justify-center">
        {/* <Image
            src={avatar}
            alt={"avatar"}
            fill
            style={{ objectFit: "contain" }}
          /> */}
        <p>🎉🎉</p>
        <Deck />
      </div>
    </div>
  );
}
