import { ContactEmailTemplate } from "@/components/email/contact";
import { validateCaptcha } from "@/lib/utils";
import { ContactEntry } from "@/types";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (!(await validateCaptcha(formData.get("g-recaptcha-response")))) {
      return NextResponse.json({ error: "error" });
    }
    formData.delete("g-recaptcha-response");

    const contactEntry: ContactEntry = {
      email: formData.get("email")?.toString() || "",
      fullName: formData.get("fullName")?.toString() || "",
      purpose: formData.get("purpose")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };
    const data = await resend.emails.send({
      from: `Kawtar <${process.env.SENDER_EMAIL}>`,
      to: [contactEntry.email],
      bcc: `${process.env.FORWARD_EMAIL}`,
      subject: "Thanks for contacting me @choubari.com",
      react: ContactEmailTemplate({
        fullName: contactEntry.fullName,
        purpose: contactEntry.purpose,
        message: contactEntry.message,
      }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
