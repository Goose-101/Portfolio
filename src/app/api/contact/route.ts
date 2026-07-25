import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * This validates the payload and returns success. To actually deliver
 * messages, wire an email provider (Resend, SendGrid, Nodemailer, etc.)
 * where indicated below and add the relevant API key to your env.
 */
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }

  // TODO: integrate an email provider here, e.g.
  //   await resend.emails.send({ to, from, subject, html })
  // For now we simply log server-side and acknowledge receipt.
  console.info("[contact] new message", { name, email });

  return NextResponse.json({ ok: true });
}
