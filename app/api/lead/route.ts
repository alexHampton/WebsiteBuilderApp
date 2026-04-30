import { NextResponse } from "next/server"
import { Resend } from "resend"

type LeadPayload = {
  name?: string
  phone?: string
  email?: string
  preferredContact?: string
  details?: string
}

export function getEnv(name: string): string | undefined {
  const value = process.env[name]
  return value && value.trim().length > 0 ? value.trim() : undefined
}

export async function POST(request: Request) {
  try {
    const apiKey = getEnv("RESEND_API_KEY")
    const toEmail =
      getEnv("RESEND_TO_EMAIL") ??
      getEnv("RESEND_EMAIL") ??
      getEnv("RESENT_EMAIL")
    const requestedFrom = getEnv("RESEND_FROM_EMAIL")
    const shouldFallbackFrom =
      !!requestedFrom &&
      /@(gmail|yahoo|outlook|hotmail|icloud)\.com$/i.test(requestedFrom)
    const fromEmail = shouldFallbackFrom
      ? "onboarding@resend.dev"
      : requestedFrom ?? "onboarding@resend.dev"

    if (shouldFallbackFrom) {
      console.warn(
        "RESEND_FROM_EMAIL looks like a personal mailbox. Falling back to onboarding@resend.dev.",
      )
    }

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY." },
        { status: 500 },
      )
    }

    if (!toEmail) {
      return NextResponse.json(
        { error: "Missing recipient email env. Set RESEND_TO_EMAIL (or RESEND_EMAIL / RESENT_EMAIL)." },
        { status: 500 },
      )
    }

    const body = (await request.json()) as LeadPayload

    const name = body.name?.trim()
    const phone = body.phone?.trim()
    const email = body.email?.trim()
    const preferredContact = body.preferredContact?.trim()
    const details = body.details?.trim()

    if (!name || !phone || !email || !preferredContact || !details) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      )
    }

    const resend = new Resend(apiKey)
    const subject = `New Lead: ${name}`

    const html = `
      <h2>New Website Lead Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
      <p><strong>More Information:</strong></p>
      <p>${details.replace(/\n/g, "<br />")}</p>
    `

    const text = [
      "New Website Lead Submission",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Preferred Contact: ${preferredContact}`,
      "More Information:",
      details,
    ].join("\n")

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      html,
      text,
      replyTo: email,
    })

    if (error) {
      console.error("Resend send failed:", error)
      return NextResponse.json(
        { error: error.message || "Failed to send lead email." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Lead route error:", error)
    return NextResponse.json(
      { error: "Unexpected server error while sending lead email." },
      { status: 500 },
    )
  }
}
