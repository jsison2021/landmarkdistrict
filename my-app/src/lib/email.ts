import 'server-only';
import { Resend } from 'resend';

// Template aliases live in emails/templates.mjs and are pushed to Resend with `npm run emails:sync`.
type TemplateAlias = 'leasing-inquiry' | 'residences-signup' | 'leasing-confirmation' | 'residences-confirmation';
type Variables = Record<string, string>;

// Resend's {{{VAR}}} inserts values raw, so visitor input is escaped before it reaches the HTML.
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const escapeAll = (vars: Variables) =>
  Object.fromEntries(Object.entries(vars).map(([k, v]) => [k, escapeHtml(v)]));

function config() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FORMS_FROM_EMAIL;
  const team = (process.env.FORMS_TO_EMAIL ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!apiKey || !from || !team.length) {
    throw new Error('Form email is not configured: set RESEND_API_KEY, FORMS_TO_EMAIL and FORMS_FROM_EMAIL');
  }
  return { resend: new Resend(apiKey), from, team };
}

// Each team member gets their own copy so no inbox address is ever shown to anyone else.
// Subjects are plain text, so any subject built from visitor input is passed raw here instead of through the template.
async function notifyTeam(template: TemplateAlias, variables: Variables, replyTo: string, subject?: string) {
  const { resend, from, team } = config();
  const { error } = await resend.batch.send(
    team.map((to) => ({ from, to, replyTo, subject, template: { id: template, variables: escapeAll(variables) } })),
  );
  if (error) throw new Error(`Resend rejected the ${template} email: ${error.message}`);
}

// A failed confirmation is logged but never fails the submission, since the team already has it.
async function confirmVisitor(template: TemplateAlias, to: string, variables: Variables = {}) {
  try {
    const { resend, from } = config();
    const { error } = await resend.emails.send({ from, to, template: { id: template, variables: escapeAll(variables) } });
    if (error) console.error(`Resend rejected the ${template} email`, error);
  } catch (err) {
    console.error(`Could not send ${template}`, err);
  }
}

type LeasingInquiry = { name: string; email: string; phone?: string; message?: string };

export async function sendLeasingInquiry({ name, email, phone, message }: LeasingInquiry) {
  const visitorMessage = message ?? 'No message included.';
  await notifyTeam('leasing-inquiry', {
    VISITOR_NAME: name,
    VISITOR_EMAIL: email,
    VISITOR_PHONE: phone ?? 'Not given',
    VISITOR_MESSAGE: visitorMessage,
  }, email, `Leasing inquiry from ${name}`);
  await confirmVisitor('leasing-confirmation', email, { VISITOR_NAME: name, VISITOR_MESSAGE: visitorMessage });
}

export async function sendResidencesSignup(email: string) {
  await notifyTeam('residences-signup', { VISITOR_EMAIL: email }, email);
  await confirmVisitor('residences-confirmation', email);
}
