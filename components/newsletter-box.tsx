function FullWidthDark() {
  return (
    <iframe
      src="https://embeds.beehiiv.com/4cf13b06-3517-402e-98a3-851039166e2c"
      data-test-id="beehiiv-embed"
      width="100%"
      height="250"
      frameBorder="0"
      scrolling="no"
      title="newsletter box"
      style={{
        borderRadius: "4px",
        margin: 0,
        backgroundColor: "transparent",
      }}
    ></iframe>
  );
}
function Slim() {
  return (
    <iframe
      src="https://embeds.beehiiv.com/4cf13b06-3517-402e-98a3-851039166e2c?slim=true"
      data-test-id="beehiiv-embed"
      height="51"
      width="100%"
      frameBorder="0"
      scrolling="no"
      title="newsletter box"
      className="rounded-md"
      style={{
        borderRadius: "5px !important",
        margin: 0,
        backgroundColor: "transparent",
      }}
    ></iframe>
  );
}

interface NewsletterBoxProps {
  type: "slim" | "fullwidthdark";
}

const NewsletterBox: React.FC<NewsletterBoxProps> = ({ type }) => {
  if (type === "slim") {
    return <Slim />;
  }
  if (type === "fullwidthdark") {
    return <FullWidthDark />;
  }

  return <></>;
};

export default NewsletterBox;
