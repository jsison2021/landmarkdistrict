// Submits a form to Netlify Forms via AJAX (works with the SPA catch-all redirect).
// The matching hidden <form> in public/index.html is what registers the schema at build time.
export async function submitNetlifyForm(form) {
  const body = new URLSearchParams(new FormData(form)).toString();
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
}
