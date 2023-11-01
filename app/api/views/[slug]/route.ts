import { NextResponse } from "next/server";
import { SupabaseAdmin } from "@/lib/supabase";

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await SupabaseAdmin.rpc("increment_post_view", { post_slug: params.slug });

    return NextResponse.json({
      message: `Successfully incremented post: ${params.slug}`,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { data } = await SupabaseAdmin.from("posts")
    .select("view_count")
    .filter("slug", "eq", params.slug);

  if (data)
    return NextResponse.json({
      total: data[0]?.view_count || null,
    });
  return NextResponse.json({
    message: "Unsupported Request",
  });
}
