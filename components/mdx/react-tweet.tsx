import { Tweet } from "react-tweet";

interface TweetProps {
  id: string;
}

export function ReactTweet({ id }: TweetProps) {
  return <Tweet id={id} />;
}
