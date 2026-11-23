// Creates or updates every template in emails/templates.mjs in Resend, then publishes it.
// Usage: npm run emails:sync
import { Resend } from 'resend';
import { templates } from '../emails/templates.mjs';

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.FORMS_FROM_EMAIL;
if (!apiKey || !from) {
  console.error('Set RESEND_API_KEY and FORMS_FROM_EMAIL (see .env.example).');
  process.exit(1);
}

const resend = new Resend(apiKey);
const pause = () => new Promise((r) => setTimeout(r, 600));

const existing = new Map();
{
  const { data, error } = await resend.templates.list({ limit: 100 });
  if (error) throw new Error(`Could not list templates: ${error.message}`);
  for (const t of data.data) if (t.alias) existing.set(t.alias, t.id);
}

for (const t of templates) {
  const payload = {
    name: t.name,
    alias: t.alias,
    from,
    subject: t.subject,
    html: t.html,
    variables: t.variables.map((key) => ({ key, type: 'string', fallbackValue: '' })),
  };

  let id = existing.get(t.alias);
  if (id) {
    const { error } = await resend.templates.update(id, payload);
    if (error) throw new Error(`Update ${t.alias} failed: ${error.message}`);
  } else {
    const { data, error } = await resend.templates.create(payload);
    if (error) throw new Error(`Create ${t.alias} failed: ${error.message}`);
    id = data.id;
  }
  await pause();

  const { error } = await resend.templates.publish(id);
  if (error) throw new Error(`Publish ${t.alias} failed: ${error.message}`);
  console.log(`${existing.has(t.alias) ? 'Updated' : 'Created'} and published ${t.alias} (${id})`);
  await pause();
}
