import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body;

    // 1. Honeypot Spam Protection
    // If the hidden 'website' field is filled, assume it is a bot/spam.
    // Return 200 OK to fool the bot, but do not send the email.
    if (website && website.trim() !== '') {
      console.log('Spam detected via honeypot. Ignoring email sending.');
      return NextResponse.json(
        { success: true, message: 'Message processed successfully.' },
        { status: 200 }
      );
    }

    // 2. Server-side Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      subject.trim() === '' ||
      message.trim() === ''
    ) {
      return NextResponse.json(
        { error: 'Fields cannot be empty.' },
        { status: 400 }
      );
    }

    // Simple email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    // 3. Email Sending via Resend
    const recipient = 'shanusingh.iiitv@gmail.com';
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
    });

    // In Resend, if the domain is not verified, emails must be sent from "onboarding@resend.dev"
    // to the registered account owner (shanusingh.iiitv@gmail.com).
    const mailOptions = {
      from: 'Contact Form <onboarding@resend.dev>',
      to: recipient,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e8e8e8; border-radius: 8px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px; margin-top: 0;">New Contact Form Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px;">Sender Name:</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Sender Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 6px 0;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Timestamp:</td>
              <td style="padding: 6px 0; color: #666; font-size: 14px;">${timestamp} (IST)</td>
            </tr>
          </table>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #f3f4f6; margin-bottom: 20px;">
            <p style="margin: 0; font-weight: bold; margin-bottom: 8px; color: #374151;">Message Content:</p>
            <p style="margin: 0; white-space: pre-wrap; color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #f3f4f6; margin-bottom: 15px;" />
          <p style="font-size: 11px; color: #9ca3af; margin: 0; text-align: center;">
            This email was sent dynamically from your Portfolio Contact Form via Resend.
          </p>
        </div>
      `,
    };

    const { data, error } = await resend.emails.send(mailOptions);

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!', data },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Contact API Route Exception:', err);
    return NextResponse.json(
      { error: 'An unexpected server error occurred.' },
      { status: 500 }
    );
  }
}
