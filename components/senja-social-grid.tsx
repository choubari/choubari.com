import Script from "next/script";

export default function SenjaSocialGrid() {
  return (
    <>
      <Script
        async
        type="text/javascript"
        src="https://static.senja.io/dist/platform.js"
        strategy="lazyOnload"
      ></Script>
      <div
        className="senja-embed"
        data-id="48bd35bb-286e-4df6-84bd-9476d602681f"
        data-lazyload="false"
      ></div>
    </>
  );
}
