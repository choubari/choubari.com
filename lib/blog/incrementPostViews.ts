import { cache } from "react";
export const dynamic = "force-dynamic";

import { SupabaseAdmin } from "@/lib/supabase";

const incrementPostViews = cache(async (slug: string) => {
  try {
    await SupabaseAdmin.rpc("increment_post_view", { post_slug: slug });
    return {
      message: `Successfully incremented post: ${slug}`,
    };
  } catch (error) {
    return { error };
  }
});

export default incrementPostViews;
