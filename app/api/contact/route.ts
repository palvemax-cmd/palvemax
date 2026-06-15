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

    // Compose email body
    const emailBody = `
Новая заявка с сайта PalveMax.fi
=====================================

Имя: ${name}
Телефон: ${phone}
Email: ${email || "не указан"}
Город: ${city}
Услуга: ${service}

Комментарий:
${comment || "нет"}

Файлов прикреплено: ${files.filter(f => f.size > 0).length}

Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Helsinki" })}
    `.trim();

    // Email sending via nodemailer
    // In production: configure SMTP via environment variables
    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build attachments
    const attachments = [];
    for (const file of files) {
      if (file.size > 0 && file.size < 10 * 1024 * 1024) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "info@palvemax.fi",
      replyTo: email || undefined,
      subject: `Заявка: ${service} — ${city} (${name})`,
      text: emailBody,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
