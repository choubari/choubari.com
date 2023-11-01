import { countFormatter } from "@/lib/utils";
import { FaEye } from "react-icons/fa";

interface PostViewsProps {
  slug: string;
}

export default async function PostViews({ slug }: PostViewsProps) {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_APP_URL}/api/views/${slug}`
  // );
  // const data = await response.json();

  return (
    <div className="text-sm mb-2 opacity-60 flex items-center">
      <FaEye className="inline-block mr-2 text-base" />
      <p className="italic">
        0 views
        {/* {data?.total && `${countFormatter(data.total)} views`} */}
      </p>
    </div>
  );
}
