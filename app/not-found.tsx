import Button from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center align-middle items-center my-20">
      <h1 className="font-serif text-5xl font-bold my-20">
        404
        <span className="text-6xl leading-3 text-accent">.</span> Not Found
        <span className="leading-3 text-accent">!</span>
      </h1>
      <p className="mb-5">
        Could not find this page! Better to be back Home ;)
      </p>
      <Button route={"/"} label={"HOME PAGE"} />
    </div>
  );
}
