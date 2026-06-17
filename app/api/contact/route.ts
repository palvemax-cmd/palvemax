import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const city = formData.get("city") as string;
    const service = formData.get("service") as string;
    const comment = formData.get("comment") as string;
    const files = formData.getAll("files") as File[];

    // Validate required fields
    if (!name || !phone || !city || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const time = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Helsinki" });
    const filesCount = files.filter((f) => f.size > 0).length;

    // ─── 1. TELEGRAM ────────────────────────────────────────────────────────
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChat = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChat) {
      const tgText = [
        "🔔 <b>Новая заявка — PalveMax.fi</b>",
        "",
        `👤 <b>Имя:</b> ${name}`,
        `📞 <b>Телефон:</b> <a href="tel:${phone}">${phone}</a>`,
        email ? `📧 <b>Email:</b> ${email}` : null,
        `📍 <b>Город:</b> ${city}`,
        `🔧 <b>Услуга:</b> ${service}`,
        comment ? `💬 <b>Комментарий:</b> ${comment}` : null,
        filesCount > 0 ? `📎 <b>Фото:</b> ${filesCount} шт.` : null,
        "",
        `🕐 ${time}`,
      ]
        .filter(Boolean)
        .join("\n");

      await fetch(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChat,
            text: tgText,
            parse_mode: "HTML",
            disable_web_page_preview: true,
          }),
        }
      );
    }

    // ─── 2. EMAIL via Resend ─────────────────────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      // Build attachments if any
      const attachments: { filename: string; content: string }[] = [];
      for (const file of files) {
        if (file.size > 0 && file.size < 10 * 1024 * 1024) {
          const buffer = Buffer.from(await file.arrayBuffer());
          attachments.push({
            filename: file.name,
            content: buffer.toString("base64"),
          });
        }
      }

      const htmlBody = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1a3c6b;border-bottom:2px solid #e85c1c;padding-bottom:10px">
            Новая заявка — PalveMax.fi
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;color:#666;width:120px">Имя</td><td style="padding:8px;font-weight:bold">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;color:#666">Телефон</td><td style="padding:8px;font-weight:bold"><a href="tel:${phone}">${phone}</a></td></tr>
            ${email ? `<tr><td style="padding:8px;color:#666">Email</td><td style="padding:8px">${email}</td></tr>` : ""}
            <tr style="background:#f9f9f9"><td style="padding:8px;color:#666">Город</td><td style="padding:8px">${city}</td></tr>
            <tr><td style="padding:8px;color:#666">Услуга</td><td style="padding:8px">${service}</td></tr>
            ${comment ? `<tr style="background:#f9f9f9"><td style="padding:8px;color:#666">Комментарий</td><td style="padding:8px">${comment}</td></tr>` : ""}
            ${filesCount > 0 ? `<tr><td style="padding:8px;color:#666">Фото</td><td style="padding:8px">${filesCount} шт.</td></tr>` : ""}
          </table>
          <p style="color:#999;font-size:12px;margin-top:20px">Отправлено: ${time}</p>
        </div>
      `;

      const emailPayload: Record<string, unknown> = {
        from: "PalveMax.fi <noreply@palvemax.fi>",
        to: [process.env.CONTACT_EMAIL || "palvemax@gmail.com"],
        reply_to: email || undefined,
        subject: `Заявка: ${service} — ${city} (${name})`,
        html: htmlBody,
      };

      if (attachments.length > 0) {
        emailPayload.attachments = attachments;
      }

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify(emailPayload),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
