import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let payload: { name?: string; phone?: string; source?: string } = {};
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const phone = (payload.phone || "").trim();
  if (!phone) {
    return NextResponse.json({ ok: false, error: "phone required" }, { status: 400 });
  }

  // Logged to server stdout so we can wire to email/CRM webhooks later without redeploying clients.
  console.log("[contact]", JSON.stringify({
    name: (payload.name || "").trim(),
    phone,
    source: payload.source || "unknown",
    at: new Date().toISOString(),
  }));

  return NextResponse.json({ ok: true });
}
