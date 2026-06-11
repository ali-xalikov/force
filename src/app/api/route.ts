import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://jtnqsbgrdbonxhlkaikn.supabase.co/rest/v1/Gallery?select=*&order=created_at.desc",
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
