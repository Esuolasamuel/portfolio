"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// ─── Validation Schema ───────────────────────────────────────────────────────

const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export type ContactActionResult =
  | { success: true; message: string }
  | { success: false; message: string; errors?: Record<string, string[]> };

// ─── Server Action ───────────────────────────────────────────────────────────

export async function sendContactEmail(
  formData: ContactFormData
): Promise<ContactActionResult> {
  // 1. Validate input
  const parsed = ContactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, subject, message } = parsed.data;

  // 2. Configure Nodemailer transport
  //    Set these in your .env.local:
  //    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 3. Send notification to portfolio owner
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO_EMAIL ?? "esuolasamuel7@gmail.com",
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #111;">New message from your portfolio</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Name</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background:#f9f9f9">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Subject</td>
              <td style="padding: 8px;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f4f4f4; border-radius: 8px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    // 4. Send auto-response to client
    await transporter.sendMail({
      from: `"Samuel Esuola" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for your message",
      text: `Hi ${name},\n\nThank you for reaching out through my portfolio! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nSamuel Esuola`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #111;">Thank you for your message!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio! I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Samuel Esuola</p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Message sent! I'll get back to you soon.",
    };
  } catch (err) {
    console.error("[sendContactEmail] SMTP error:", err);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}