import { SENDGRID_API_KEY } from '../$.env';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
  const { to, subject, text } = await request.json();

  const msg = {
    to,
    from: 'reutershawn45@gmail.com', // Use the email address you verified with SendGrid
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    return json({ success: true });
  } catch (e) {
    console.error(e);
    return json({ success: false, error: e.message }, { status: 500 });
  }
}