import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

// Anything coming from a verified Resend sending domain. Default falls back
// to Resend's onboarding sender so the route works out of the box; switch to
// a verified domain (e.g. noreply@nedimhasani.de) once the DNS records are
// added in the Resend dashboard.
const FROM = process.env.CONTACT_FROM ?? "Nedim Hasani <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO ?? "info@nedimhasani.de";

type Body = {
  name?: string;
  email?: string;
  message?: string;
  // honeypot — silently drop anything that fills this in
  website?: string;
};

function isEmail(v: unknown): v is string {
  return (
    typeof v === "string" &&
    v.length >= 5 &&
    v.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  );
}

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Mailversand ist aktuell nicht konfiguriert." },
      { status: 503 },
    );
  }
  const resend = new Resend(apiKey);

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot — bots fill this; real users never see it.
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 254);
  const message = clean(body.message, 5000);

  if (!name || !isEmail(email) || message.length < 5) {
    return NextResponse.json(
      { error: "Bitte fülle Name, E-Mail und Nachricht aus." },
      { status: 400 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const subject = "Nedim Hasani Kontaktformular";
  const text = `Neue Anfrage über nedimhasani.de\n\nName: ${name}\nE-Mail: ${email}\n\n${message}\n`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; color: #111; line-height: 1.55;">
      <h2 style="margin:0 0 16px; font-size:18px;">Neue Anfrage über nedimhasani.de</h2>
      <p style="margin:0 0 8px;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin:0 0 16px;"><strong>E-Mail:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <hr style="border:0;border-top:1px solid #eee;margin:16px 0;" />
      <p style="margin:0;white-space:pre-wrap;">${safeMessage}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        { error: "Versand fehlgeschlagen. Bitte später erneut probieren." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Resend exception", e);
    return NextResponse.json(
      { error: "Versand fehlgeschlagen. Bitte später erneut probieren." },
      { status: 502 },
    );
  }
}
