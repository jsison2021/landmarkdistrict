import 'server-only';
import { Resend } from 'resend';

type FormEmail = {
  subject: string;
  text: string;
  replyTo?: string;
};

// Each recipient gets their own copy so no inbox address is ever shown to anyone else.
export async function sendFormEmail({ subject, text, replyTo }: FormEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipients = (process.env.FORMS_TO_EMAIL ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  const from = process.env.FORMS_FROM_EMAIL;
  if (!apiKey || !recipients.length || !from) {
    throw new Error('Form email is not configured: set RESEND_API_KEY, FORMS_TO_EMAIL and FORMS_FROM_EMAIL');
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.batch.send(
    recipients.map((to) => ({ from, to, subject, text, replyTo })),
  );
  if (error) throw new Error(`Resend rejected the email: ${error.message}`);
}
