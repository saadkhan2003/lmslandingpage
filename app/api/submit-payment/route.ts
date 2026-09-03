import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, paymentMethod, transactionId } = body;

    if (!name || !phone || !email || !paymentMethod) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a1a1a; padding: 20px; border-radius: 12px;">
          <h2 style="color: #ef4444; margin: 0 0 20px;">💳 New Payment Submission</h2>
          
          <div style="background: #262626; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <p style="color: #999; margin: 0 0 4px; font-size: 12px;">NAME</p>
            <p style="color: #fff; margin: 0; font-size: 16px; font-weight: bold;">${name}</p>
          </div>

          <div style="background: #262626; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <p style="color: #999; margin: 0 0 4px; font-size: 12px;">PHONE</p>
            <p style="color: #fff; margin: 0; font-size: 16px;">${phone}</p>
          </div>

          <div style="background: #262626; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <p style="color: #999; margin: 0 0 4px; font-size: 12px;">EMAIL</p>
            <p style="color: #fff; margin: 0; font-size: 16px;">${email}</p>
          </div>

          ${city ? `
          <div style="background: #262626; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <p style="color: #999; margin: 0 0 4px; font-size: 12px;">CITY</p>
            <p style="color: #fff; margin: 0; font-size: 16px;">${city}</p>
          </div>
          ` : ""}

          <div style="background: #262626; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <p style="color: #999; margin: 0 0 4px; font-size: 12px;">PAYMENT METHOD</p>
            <p style="color: #22c55e; margin: 0; font-size: 16px; font-weight: bold;">${paymentMethod}</p>
          </div>

          ${transactionId ? `
          <div style="background: #262626; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <p style="color: #999; margin: 0 0 4px; font-size: 12px;">TRANSACTION ID</p>
            <p style="color: #fff; margin: 0; font-size: 16px; font-family: monospace;">${transactionId}</p>
          </div>
          ` : ""}

          <div style="margin-top: 20px; padding: 12px; background: #7f1d1d; border-radius: 8px;">
            <p style="color: #fca5a5; margin: 0; font-size: 14px;">
              ⚠️ Ask ${name} to send payment screenshot on WhatsApp for verification.
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Ai Tools Business Mastery" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_TO || process.env.SMTP_EMAIL,
      subject: `💳 New Payment - ${name} (${paymentMethod})`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
