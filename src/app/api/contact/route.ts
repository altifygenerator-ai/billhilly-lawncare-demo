import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const clientTo = process.env.CLIENT_TO_EMAIL;
    const ownerCopy = process.env.OWNER_OBSERVER_EMAIL;

    if (!clientTo || !ownerCopy) {
      return NextResponse.json(
        { error: "Missing email destination settings." },
        { status: 500 }
      );
    }

    const leadText = `
New Billhilly Lawncare quote request

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not selected"}

Message:
${message}
    `;

    await resend.emails.send({
      from,
      to: clientTo,
      replyTo: email,
      subject: `New quote request from ${name}`,
      text: leadText,
    });

    await resend.emails.send({
      from,
      to: ownerCopy,
      replyTo: email,
      subject: `[Internal Copy] Billhilly lead from ${name}`,
      text: leadText,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong sending the message." },
      { status: 500 }
    );
  }
}