// Source of truth for the Resend-hosted email templates.
// Edit here, then run `npm run emails:sync` to create or update them in Resend.
// Variables use Resend's {{{NAME}}} syntax and are filled in by src/lib/email.ts.

const C = {
  ink: '#111412',
  limestone: '#ECE8E1',
  paper: '#F7F5F0',
  line: '#D9D4CA',
  mute: '#5E5F59',
  brick: '#C8472D',
  brass: '#B6955A',
};

const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const MONO = "'SFMono-Regular', Menlo, Consolas, monospace";
const LOGO = 'https://landmarkdistrict.com/assets/tenant-logos/logo-192.png';

const label = (text) =>
  `<div style="font-family:${MONO};font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${C.mute};padding-bottom:6px;">${text}</div>`;

const field = (name, value) => `
  <tr><td style="padding:14px 0;border-top:1px solid ${C.line};">
    ${label(name)}
    <div style="font-family:${SANS};font-size:16px;line-height:1.5;color:${C.ink};white-space:pre-line;">${value}</div>
  </td></tr>`;

function layout({ preheader, eyebrow, headline, body, footerNote }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>Shops at Landmark District</title>
</head>
<body style="margin:0;padding:0;background:${C.limestone};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.limestone};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
      <tr><td style="background:${C.ink};padding:22px 32px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td style="padding-right:12px;vertical-align:middle;"><img src="${LOGO}" width="20" height="30" alt="" style="display:block;border:0;"></td>
          <td style="vertical-align:middle;">
            <div style="font-family:${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${C.brass};">Shops at</div>
            <div style="font-family:${SANS};font-size:17px;font-weight:600;letter-spacing:-0.01em;color:${C.limestone};">Landmark District</div>
          </td>
        </tr></table>
      </td></tr>
      <tr><td style="height:3px;line-height:3px;font-size:0;background:${C.brick};">&nbsp;</td></tr>
      <tr><td style="background:${C.paper};padding:36px 32px 32px;">
        <div style="font-family:${MONO};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${C.brick};padding-bottom:14px;">${eyebrow}</div>
        <h1 style="margin:0 0 20px;font-family:${SANS};font-size:28px;line-height:1.2;font-weight:600;letter-spacing:-0.02em;color:${C.ink};">${headline}</h1>
        ${body}
      </td></tr>
      <tr><td style="padding:24px 32px;font-family:${SANS};font-size:12px;line-height:1.6;color:${C.mute};">
        ${footerNote ? `<p style="margin:0 0 10px;">${footerNote}</p>` : ''}
        <p style="margin:0;">Shops at Landmark District · 1167 S 4th St, Louisville, KY 40203 · <a href="tel:5026537251" style="color:${C.mute};white-space:nowrap;">(502) 653-7251</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

const p = (text) =>
  `<p style="margin:0 0 16px;font-family:${SANS};font-size:16px;line-height:1.6;color:${C.ink};">${text}</p>`;

const em = (text) => `<em style="font-family:${SERIF};font-style:italic;color:${C.brick};font-weight:400;">${text}</em>`;

export const templates = [
  {
    alias: 'leasing-inquiry',
    name: 'Leasing inquiry (team notification)',
    subject: 'Leasing inquiry from {{{VISITOR_NAME}}}',
    variables: ['VISITOR_NAME', 'VISITOR_EMAIL', 'VISITOR_PHONE', 'VISITOR_MESSAGE'],
    html: layout({
      preheader: 'New leasing inquiry from {{{VISITOR_NAME}}} via landmarkdistrict.com',
      eyebrow: 'New leasing inquiry',
      headline: `{{{VISITOR_NAME}}} wants to ${em('talk')}.`,
      body: `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          ${field('Name', '{{{VISITOR_NAME}}}')}
          ${field('Email', `<a href="mailto:{{{VISITOR_EMAIL}}}" style="color:${C.brick};">{{{VISITOR_EMAIL}}}</a>`)}
          ${field('Phone', '{{{VISITOR_PHONE}}}')}
          ${field('Message', '{{{VISITOR_MESSAGE}}}')}
        </table>`,
      footerNote: 'Reply to this email to answer them directly. Sent from the contact form on landmarkdistrict.com.',
    }),
  },
  {
    alias: 'residences-signup',
    name: 'Residences signup (team notification)',
    subject: 'New residences interest list signup',
    variables: ['VISITOR_EMAIL'],
    html: layout({
      preheader: '{{{VISITOR_EMAIL}}} joined the residences interest list',
      eyebrow: 'Residences interest list',
      headline: `Someone wants to ${em('live')} above the marketplace.`,
      body: `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          ${field('Email', `<a href="mailto:{{{VISITOR_EMAIL}}}" style="color:${C.brick};">{{{VISITOR_EMAIL}}}</a>`)}
        </table>`,
      footerNote: 'Reply to this email to reach them directly. Sent from the residences form on landmarkdistrict.com.',
    }),
  },
  {
    alias: 'leasing-confirmation',
    name: 'Leasing inquiry (visitor confirmation)',
    subject: 'We received your inquiry',
    variables: ['VISITOR_NAME', 'VISITOR_MESSAGE'],
    html: layout({
      preheader: 'Thanks for reaching out about Shops at Landmark District. We&rsquo;ll be in touch soon.',
      eyebrow: 'Leasing &amp; press',
      headline: `Thanks, {{{VISITOR_NAME}}}. We ${em('got')} your note.`,
      body: `
        ${p('Your inquiry about Shops at Landmark District reached our leasing team, and someone will follow up soon. If it&rsquo;s time-sensitive, call us at <a href="tel:5026537251" style="color:' + C.brick + ';white-space:nowrap;">(502) 653-7251</a>.')}
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:8px;">
          ${field('What you sent', '{{{VISITOR_MESSAGE}}}')}
        </table>`,
      footerNote: 'This message was sent from an unmonitored address, so replies won&rsquo;t reach us. To add anything, call or send another note from the site.',
    }),
  },
  {
    alias: 'residences-confirmation',
    name: 'Residences signup (visitor confirmation)',
    subject: "You're on the Landmark residences list",
    variables: [],
    html: layout({
      preheader: 'You&rsquo;ll hear about floorplans and availability first.',
      eyebrow: 'Residences · Coming soon',
      headline: `You&rsquo;re on the ${em('list')}.`,
      body: `
        ${p('Thanks for your interest in living above the marketplace at the Landmark building. Homes on the upper floors are still taking shape as part of the restoration of this corner of Old Louisville.')}
        ${p('When floorplans and availability are ready, the interest list hears first. Until then, there&rsquo;s nothing else you need to do.')}
        ${p(`<a href="https://landmarkdistrict.com/#marketplace" style="color:${C.brick};">See who&rsquo;s already downstairs</a>`)}`,
      footerNote: 'This message was sent from an unmonitored address, so replies won&rsquo;t reach us.',
    }),
  },
];
