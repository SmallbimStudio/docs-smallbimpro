import QRCode from "qrcode";
import generatePayload from "promptpay-qr";

interface Env {
  PROMPTPAY_ID: string;       // 📌 PromptPay ID
  GAS_REGISTER_URL: string;   // 📌 GAS สำหรับ register trial
  GAS_CONFIRM_URL?: string;   // 📌 GAS สำหรับ confirm payment
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);

    // ✅ Preflight CORS
    if (req.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    /* ------------------------------------------------------------------
     * 1) Generate Payment QR → GET /api/payment?amount=7500
     * ------------------------------------------------------------------ */
    if (url.pathname === "/api/payment" && req.method === "GET") {
      try {
        const amount = Number(url.searchParams.get("amount")) || 7500;
        const payload = generatePayload(env.PROMPTPAY_ID, { amount });
        const qrDataUrl = await QRCode.toDataURL(payload);

        return new Response(JSON.stringify({ ok: true, qr: qrDataUrl }), {
          headers: { "content-type": "application/json", ...corsHeaders() },
        });
      } catch (err: unknown) {
        return new Response(
          JSON.stringify({ ok: false, error: String(err) }),
          { headers: { "content-type": "application/json", ...corsHeaders() }, status: 500 }
        );
      }
    }

    /* ------------------------------------------------------------------
     * 2) Confirm Payment (Upload Slip) → POST /api/payment
     * ------------------------------------------------------------------ */
    if (url.pathname === "/api/payment" && req.method === "POST") {
      try {
        const body = await req.json();

        if (!env.GAS_CONFIRM_URL) {
          return new Response(JSON.stringify({ ok: false, error: "Missing GAS_CONFIRM_URL" }), {
            headers: { "content-type": "application/json", ...corsHeaders() },
            status: 500,
          });
        }

        const r = await fetch(env.GAS_CONFIRM_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const text = await r.text();
        try {
          const data = JSON.parse(text);
          return new Response(JSON.stringify(data), {
            headers: { "content-type": "application/json", ...corsHeaders() },
            status: r.status,
          });
        } catch {
          return new Response(
            JSON.stringify({ ok: false, error: "Invalid JSON from GAS", raw: text }),
            { headers: { "content-type": "application/json", ...corsHeaders() }, status: 500 }
          );
        }
      } catch (err: unknown) {
        return new Response(
          JSON.stringify({ ok: false, error: String(err) }),
          { headers: { "content-type": "application/json", ...corsHeaders() }, status: 500 }
        );
      }
    }

    /* ------------------------------------------------------------------
     * 3) (Optional) Confirm Payment via /api/payment/confirm
     * ------------------------------------------------------------------ */
    if (url.pathname === "/api/payment/confirm" && req.method === "POST") {
      try {
        const body = await req.json();

        if (!env.GAS_CONFIRM_URL) {
          return new Response(JSON.stringify({ ok: false, error: "Missing GAS_CONFIRM_URL" }), {
            headers: { "content-type": "application/json", ...corsHeaders() },
            status: 500,
          });
        }

        const r = await fetch(env.GAS_CONFIRM_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await r.json().catch(() => ({}));
        return new Response(JSON.stringify(data), {
          headers: { "content-type": "application/json", ...corsHeaders() },
          status: r.status,
        });
      } catch (err: unknown) {
        return new Response(
          JSON.stringify({ ok: false, error: String(err) }),
          { headers: { "content-type": "application/json", ...corsHeaders() }, status: 500 }
        );
      }
    }

    /* ------------------------------------------------------------------
     * 4) Register Trial → POST /api/register
     * ------------------------------------------------------------------ */
    if (url.pathname === "/api/register" && req.method === "POST") {
      try {
        const body = (await req.json()) as any;

        if (!body.email || !body.fullName || !body.phone) {
          return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), {
            headers: { "content-type": "application/json", ...corsHeaders() },
            status: 400,
          });
        }

        if (!env.GAS_REGISTER_URL) {
          return new Response(JSON.stringify({ ok: false, error: "Missing GAS_REGISTER_URL" }), {
            headers: { "content-type": "application/json", ...corsHeaders() },
            status: 500,
          });
        }

        const r = await fetch(env.GAS_REGISTER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await r.json().catch(() => ({}));
        return new Response(JSON.stringify(data), {
          headers: { "content-type": "application/json", ...corsHeaders() },
          status: r.status,
        });
      } catch (err: unknown) {
        return new Response(
          JSON.stringify({ ok: false, error: String(err) }),
          { headers: { "content-type": "application/json", ...corsHeaders() }, status: 500 }
        );
      }
    }

    /* ------------------------------------------------------------------
     * Default: Health check
     * ------------------------------------------------------------------ */
    return new Response("🚀 Small BIM PRO Functions API is running!", {
      headers: { "content-type": "text/plain", ...corsHeaders() },
    });
  },
};
