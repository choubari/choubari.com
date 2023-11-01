import { countFormatter, getPostViews } from "@/lib/utils";
import { FaEye } from "react-icons/fa";

interface PostViewsProps {
  slug: string;
}

export default async function PostViews({ slug }: PostViewsProps) {
  const data = await getPostViews(slug);

  return (
    <div className="text-sm mb-2 opacity-60 flex items-center">
      <FaEye className="inline-block mr-2 text-base" />
      <p className="italic">
        {data?.total && `${countFormatter(data.total)} views`}
      </p>
    </div>
  );
}
