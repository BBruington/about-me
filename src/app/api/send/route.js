import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json()
    console.log("body here: ", body)
    const {email, name, message, phone} = body
    const data = await resend.emails.send({
      from: email,
      to: ['bibruington@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: name }),
    });
    console.log("data: ", data)
    if(data.status === 'success') {
      return NextResponse.json({ message: "Email Sent"})
    }

    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}