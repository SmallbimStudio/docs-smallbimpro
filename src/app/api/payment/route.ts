import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzEJS7Gn6FUED3ZMNEFYlS8OeZFC7gI6-cLs8_r152fjtdAfJXHwTALxdjUlCOVdRECyQ/exec";

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text(); // 👈 อ่านเป็น text ก่อน
    console.log("GAS response:", text);

    try {
      const data = JSON.parse(text);
      return NextResponse.json(data, { status: res.status });
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid JSON from GAS", raw: text }, { status: 500 });
    }
  } catch (err: unknown) {
  const errorMessage = err instanceof Error ? err.message : String(err);
  return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
}
}
