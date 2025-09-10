export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import QRCode from "qrcode";
import generatePayload from "promptpay-qr";

const PROMPTPAY_ID = "0622644878";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const amount = Number(searchParams.get("amount")) || 7500;

    const payload = generatePayload(PROMPTPAY_ID, { amount });
    const qrDataUrl = await QRCode.toDataURL(payload);

    return NextResponse.json({ ok: true, qr: qrDataUrl });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
