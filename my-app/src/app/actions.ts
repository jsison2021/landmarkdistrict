'use server';

import { z } from 'zod';
import { sendFormEmail } from '@/lib/email';

export type FormState = { status: 'idle' | 'success' | 'error'; message?: string };

const optional = (max: number) =>
  z.string().trim().max(max).optional().transform((v) => v || undefined);

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please add your name.').max(120),
  email: z.email('Please enter a valid email address.').max(200),
  phone: optional(40),
  message: optional(5000),
});

const residencesSchema = z.object({
  email: z.email('Please enter a valid email address.').max(200),
});

const isBot = (formData: FormData) => Boolean(formData.get('company_website'));

const field = (formData: FormData, key: string) => {
  const v = formData.get(key);
  return typeof v === 'string' ? v : undefined;
};

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isBot(formData)) return { status: 'success' };

  const parsed = contactSchema.safeParse({
    name: field(formData, 'name'),
    email: field(formData, 'email'),
    phone: field(formData, 'phone'),
    message: field(formData, 'message'),
  });
  if (!parsed.success) {
    return { status: 'error', message: parsed.error.issues[0]?.message ?? 'Please check the form and try again.' };
  }

  const { name, email, phone, message } = parsed.data;
  try {
    await sendFormEmail({
      subject: `Leasing inquiry from ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone ?? 'Not given'}`,
        '',
        message ?? 'No message.',
      ].join('\n'),
    });
    return { status: 'success' };
  } catch (err) {
    console.error('Contact form failed', err);
    return { status: 'error', message: 'Something went wrong. Please try again, or give us a call.' };
  }
}

export async function joinResidencesList(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isBot(formData)) return { status: 'success' };

  const parsed = residencesSchema.safeParse({ email: field(formData, 'email') });
  if (!parsed.success) {
    return { status: 'error', message: parsed.error.issues[0]?.message ?? 'Please enter a valid email address.' };
  }

  try {
    await sendFormEmail({
      subject: 'New residences interest list signup',
      replyTo: parsed.data.email,
      text: `${parsed.data.email} joined the residences interest list.`,
    });
    return { status: 'success' };
  } catch (err) {
    console.error('Residences form failed', err);
    return { status: 'error', message: 'Something went wrong. Please try again.' };
  }
}
