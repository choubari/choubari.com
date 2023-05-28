export function Hero() {
  return (
    <div className="md:flex md:flew-row justify-between py-28 md:px-40">
      <div className="basis-7/12 pr-16 bg-dark">
        <h1 className="text-5xl pb-10 font-serif font-bold leading-tight">
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
          I share my knowledge & passion using content creation.
        </p>
        <p className="text-accent font-mono text-xl font-bold underline">
          <a href="/contact">Let's CHAT!</a>
        </p>
      </div>
      <div className="basis-5/12 bg-accent flex relative w-full justify-center">
        {/* <Image
          src={avatar}
          alt={"avatar"}
          fill
          style={{ objectFit: "contain" }}
        /> */}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
