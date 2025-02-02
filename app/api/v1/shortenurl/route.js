import { NextResponse } from 'next/server';
import { saveUrl } from "../../../../db/lib";
import { get_unique_letters } from "../../../../libs/generator";

export async function POST(req) {
  const { original_url } = await req.json(); 

  if (!original_url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const unique_letters = await get_unique_letters();
    const shortUrl = `${process.env.NEXT_PUBLIC_HOST}${unique_letters}`.replace(/\\/g, "");
    const savedUrl = await saveUrl({ url: original_url, shortendUrl: shortUrl });
    console.log(saveUrl);
    return NextResponse.json({ success: true, data: savedUrl }, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
