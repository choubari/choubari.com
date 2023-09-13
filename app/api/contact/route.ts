import { ContactEmailTemplate } from "@/components/email/contact";
import { validateCaptcha } from "@/lib/utils";
import { ContactEntry } from "@/types";
import { redirect, useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // console.log("body", request.body);
  // console.log("grecap", request.body["g-recaptcha-response"]);

  // const grecaptcha = request.body["g-recaptcha-response"]

  // if (!(await validateCaptcha(grecaptcha))) {
  //   return NextResponse.json({ error: "error" });
  // }
  // delete request.body["g-recaptcha-response"];
  try {
    const formData = await request.formData();

    // console.log(formData.get("g-recaptcha-response"));
    // if (!(await validateCaptcha(formData.get("g-recaptcha-response")))) {
    //   return NextResponse.json({ error: "error" });
    // }
    // delete formData.get("g-recaptcha-response");

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
