import { SupabaseAdmin } from "@/lib/supabase";

async function getPostViews(slug: string) {
  const { data } = await SupabaseAdmin.from("posts")
    .select("view_count")
    .filter("slug", "eq", slug);
  return {
    total: data[0]?.view_count || null,
  };
}

export default getPostViews;
