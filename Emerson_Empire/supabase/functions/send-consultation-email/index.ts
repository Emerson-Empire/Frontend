import { Resend } from 'resend'

declare const Deno: { env: { get(key: string): string | undefined }; serve(handler: (req: Request) => Response | Promise<Response>): void }
declare const EdgeRuntime: { waitUntil(promise: Promise<unknown>): void }

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

async function insertLead(data: Record<string, string | null>) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`DB insert failed: ${text}`)
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS })
  }

  try {
    const {
      firstName,
      lastName,
      fullName,
      email,
      phone,
      message,
      serviceInterest,
      urgency,
      intentDescription,
      trackInterest,
      division,
      divisionLabel,
    } = await req.json()

    const displayName = fullName || `${firstName ?? ''} ${lastName ?? ''}`.trim() || 'Unknown'

    // 1. Store lead in database
    await insertLead({
      first_name: firstName ?? null,
      last_name: lastName ?? null,
      full_name: fullName ?? null,
      email,
      phone: phone ?? null,
      message: message ?? null,
      service_interest: serviceInterest ?? null,
      urgency: urgency ?? null,
      intent_description: intentDescription ?? null,
      track_interest: trackInterest ?? null,
      division: division ?? null,
      division_label: divisionLabel ?? null,
    })

    // 2. Admin notification
    await resend.emails.send({
      from: 'The Emerson Empire <onboarding@resend.dev>',
      to: 'webdev@theemersonempire.info',
      subject: `New lead — ${divisionLabel ?? division ?? 'Contact'} — ${displayName}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
          <h2 style="color:#12022A">New Lead Received</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#555;width:160px">Name</td><td style="padding:6px 0;font-weight:600">${displayName}</td></tr>
            <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0;font-weight:600">${email}</td></tr>
            ${phone ? `<tr><td style="padding:6px 0;color:#555">Phone</td><td style="padding:6px 0">${phone}</td></tr>` : ''}
            <tr><td style="padding:6px 0;color:#555">Division</td><td style="padding:6px 0">${divisionLabel ?? division ?? 'N/A'}</td></tr>
            ${serviceInterest ? `<tr><td style="padding:6px 0;color:#555">Service Interest</td><td style="padding:6px 0">${serviceInterest}</td></tr>` : ''}
            ${trackInterest ? `<tr><td style="padding:6px 0;color:#555">Track Interest</td><td style="padding:6px 0">${trackInterest}</td></tr>` : ''}
            ${urgency ? `<tr><td style="padding:6px 0;color:#555">Urgency</td><td style="padding:6px 0">${urgency}</td></tr>` : ''}
            ${intentDescription ? `<tr><td style="padding:6px 0;color:#555">Intent</td><td style="padding:6px 0">${intentDescription}</td></tr>` : ''}
            ${message ? `<tr><td style="padding:6px 0;color:#555">Message</td><td style="padding:6px 0">${message}</td></tr>` : ''}
          </table>
          <hr style="margin:20px 0;border:none;border-top:1px solid #eee"/>
          <p style="color:#999;font-size:12px">The Emerson Empire — Lead Management</p>
        </div>
      `,
    })

    // 3. Visitor confirmation — fire-and-forget so it never blocks the response
    EdgeRuntime.waitUntil(
      resend.emails.send({
        from: 'The Emerson Empire <onboarding@resend.dev>',
        to: email,
        subject: 'We received your message — The Emerson Empire',
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
            <h2 style="color:#12022A">Thank you, ${firstName ?? displayName}.</h2>
            <p style="color:#555;line-height:1.7">
              We've received your message and will be in touch within <strong>24 hours</strong>.
            </p>
            <p style="color:#555;line-height:1.7">
              In the meantime, feel free to explore more about us at
              <a href="https://theemersonempire.com" style="color:#12022A">theemersonempire.com</a>.
            </p>
            <hr style="margin:24px 0;border:none;border-top:1px solid #eee"/>
            <p style="color:#999;font-size:12px">The Emerson Empire Team</p>
          </div>
        `,
      }).catch(() => { /* silently skip if domain not yet verified */ })
    )

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  }
})
