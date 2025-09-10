import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.email || !body.fullName || !body.phone) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const url = process.env.GAS_REGISTER_URL;
    if (!url) {
      return NextResponse.json({ ok: false, error: "Missing GAS_REGISTER_URL" }, { status: 500 });
    }

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await r.json().catch(() => ({}));
    return NextResponse.json(data, { status: r.status });
  } catch (err: unknown) {
  const errorMessage = err instanceof Error ? err.message : String(err);
  return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
}
}
