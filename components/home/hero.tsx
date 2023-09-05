import Deck from "../skillsCards/DeckCards";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between py-28 mx-8 md:px-20">
      <div className="md:basis-7/12 pr-16 bg-dark">
        <h1 className="text-5xl pb-10 font-serif font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-violina via-rosalina to-orangina">
          Coding & Storytelling:
          <br />
          That's what I do!
        </h1>
        <div className="my-5">
          <code className="bg-accent p-1.5 mr-4 rounded-sm font-medium text-lighter">
            Engineering
          </code>
          <code className="bg-accent p-1.5 mr-4 rounded-sm font-medium text-lighter">
            Educating
          </code>
          <code className="bg-accent p-1.5 mr-4 rounded-sm font-medium text-lighter">
            Entertaining
          </code>
        </div>
        <p className="font-medium text-lg">
          I turn ideas into reality with the power of software engineering, and
          I share my knowledge as a content creator.
        </p>
        <p className="text-accent font-mono text-xl font-bold underline">
          <a href="/contact">Let's CHAT!</a>
        </p>
      </div>
      <div className="mt-40 mb-20 md:mt-0 md:mb-0 md:basis-5/12 items-center flex relative w-full justify-center bg-blue-300">
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
