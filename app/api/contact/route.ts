import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !phone || !subject || !message) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "your-email@example.com",
            subject: `New Contact Form: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
    }
}
